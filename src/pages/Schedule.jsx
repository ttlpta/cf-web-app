import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import moment from 'moment';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import Modal from '../components/Modal';
import { useGetSchedulesQuery } from '../services/CompanyService';
import { SCHEDULE_TYPE } from '../contants/config';

export default function Schedule() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [scheduleQueryParams, setScheduleQueryParams] = useState({
    month: null,
    scheduleType: null
  })

  console.log('scheduleQueryParams', scheduleQueryParams);


  const { data: scheduleData, isSuccess: isGetScheduleDataSuccess } = useGetSchedulesQuery(scheduleQueryParams, {
    selectFromResult: ({ data, ...rest }) => {
      let mapToScheduleData = [];
      if (data?.data?.schedules?.length) {
        mapToScheduleData = data.data.schedules.map((item) => ({
          title: item.name,
          date: moment(+item.publish_time).format("YYYY-MM-DD"),
        }));
      }

      return { data: mapToScheduleData, ...rest };
    }
  });


  // console.log('aa', scheduleData);

  const onFilterCalendar = (scheduleType) => {
    console.log("🚀 ~ onFilterCalendar ~ scheduleType", scheduleType)
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
            <Link to="/schedules">スケジュール</Link>
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
        <h2 className="schedule__title lg">
          <span className="schedule__title__prefix">11.8 Mon</span> SCHEDULE
        </h2>
        <div className="schedule__list">
          <ScheduleItem inline icon="icon-shake-hand" showDate={false} />
          <ScheduleItem inline icon="icon-live-photo" showDate={false} />
          <ScheduleItem inline icon="icon-shake-hand" showDate={false} />
          <ScheduleItem inline icon="icon-live-photo" showDate={false} />
        </div>
      </div>
      <Modal visible={toggleFilter} onClose={() => setToggleFilter(false)} title="カテゴリから選択する" filter>
        <div className="schedule__filter__title">Sort</div>
        <div className="schedule__filter__list md">
          <Button className="filter__list--button active">
            <span>Newest</span>
          </Button>
          <Button className="filter__list--button">
            <span>Oldest</span>
          </Button>
        </div>
        <div className="schedule__filter__title">Category</div>
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
