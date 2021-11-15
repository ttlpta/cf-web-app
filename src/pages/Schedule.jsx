import React, { useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import moment from 'moment';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import Modal from '../components/Modal';
import { useGetSchedulesQuery } from '../services/CompanyService';
import { FORMAT, SCHEDULE_TYPE } from '../contants/config';
import Pagination from '../components/Pagination';
import { renderScheduleTypeIcon, renderScheduleTypeLabel } from '../contants/helper';
import PATH from '../contants/path';

const currentDate = moment().format(FORMAT.DATE_MONTH_DAY);
const currentDateInMillisecond = moment().valueOf();


export default function Schedule() {
  const history = useHistory();

  const [toggleFilter, setToggleFilter] = useState(false);
  const [scheduleQueryParams, setScheduleQueryParams] = useState({
    month: null,
    scheduleType: SCHEDULE_TYPE.ALL
  });

  const [currentScheduleQueryParams, setCurrentScheduleQueryParams] = useState({
    month: currentDateInMillisecond,
    scheduleType: SCHEDULE_TYPE.ALL,
    pageNo: 1,
    pageSize: 5
  })


  const { data: scheduleData } = useGetSchedulesQuery(scheduleQueryParams, {
    selectFromResult: ({ data, ...rest }) => {
      let mapToScheduleData = [];
      if (data?.data?.schedules?.records?.length) {
        mapToScheduleData = data.data.schedules.records.map((item) => ({
          title: item.name,
          date: moment(+item.publish_time).format(FORMAT.YEAR_MONTH_DATE),
        }));
      }

      return { data: mapToScheduleData, ...rest };
    }
  });

  const { data: currentScheduleData } = useGetSchedulesQuery(currentScheduleQueryParams);



  const onPaginate = (current) => {
    setCurrentScheduleQueryParams({
      ...currentScheduleQueryParams,
      pageNo: current
    })

  }


  const renderCurrentSchedules = (data) => useMemo(() => {
    if (data?.data?.schedules?.records?.length) {
      return (
        <div>
          <h2 className="schedule__title">
            <span className="schedule__title__prefix">{currentDate || ''}</span> SCHEDULE
          </h2>
          <div className="schedule__list">
            {data.data.schedules.records.map(item =>
              <ScheduleItem
                hour={`${moment(+item.publish_time).get('hour')}:00`}
                inline
                icon={renderScheduleTypeIcon(item.type)}
                showDate={false}
                scheduleType={renderScheduleTypeLabel(item.type)}
                onClick={() => history.push(PATH.SCHEDULE.DETAIL(item.id))}
              />
            )}
            <Pagination current={currentScheduleQueryParams.pageNo} total={data?.data?.schedules?.total} pageSize={currentScheduleQueryParams.pageSize} onChange={onPaginate} />
          </div>
        </div>
      )
    }
    return null;
  }, [currentScheduleData])



  const onFilterCalendar = (scheduleType) => {
    setScheduleQueryParams({
      ...scheduleQueryParams,
      scheduleType,
    });
    setToggleFilter(false);
  }



  return (
    <Layout>
      <div className="schedule">
        <Breadcrumb className="schedule__breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.SCHEDULE.LIST}>スケジュール</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="schedule__title">SCHEDULE</h2>
        <div className="schedule__filter">
          <Button className="schedule__filter__btn" onClick={() => setToggleFilter(!toggleFilter)}>
            <span>カテゴリから選択する</span>
            <BsFilter />
          </Button>
        </div>
        <div className="schedule__calendar">
          <Calendar
            events={scheduleData || []}
            scheduleQueryParams={scheduleQueryParams}
            setScheduleQueryParams={setScheduleQueryParams}
          />
        </div>
        {renderCurrentSchedules(currentScheduleData)}

      </div>
      <Modal visible={toggleFilter} onClose={() => setToggleFilter(false)} title="カテゴリから選択する">
        <div className="schedule__filter__list">
          <Button className="filter__list--button" onClick={() => onFilterCalendar(SCHEDULE_TYPE.ALL)}>ALL</Button>
          <Button className="filter__list--button" onClick={() => onFilterCalendar(SCHEDULE_TYPE.EVENT)}>
            <i className="icon-shake-hand" /> <span>EVENT</span>
          </Button>
          <Button className="filter__list--button" onClick={() => onFilterCalendar(SCHEDULE_TYPE.LIVE)}>
            <i className="icon-live-photo" /> <span>LIVE</span>
          </Button>
          <Button className="filter__list--button" onClick={() => onFilterCalendar(SCHEDULE_TYPE.MEDIA)}>
            <i className="icon-media" /> <span>MEDIA</span>
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
