import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import { useGetScheduleQuery } from '../services/CompanyService';
import { renderScheduleTypeLabel } from '../contants/helper';
import PATH from '../contants/path';
import SocialShare from '../components/SocialShare';

export default function ScheduleDetail() {
  const { id } = useParams();
  const history = useHistory();
  const currentUrl = window.location.href;

  const { data: scheduleDetailData, isSuccess: isGetScheduleDetailDataSuccess } = useGetScheduleQuery(id);

  const {
    type,
    publish_time = '1631248980000',
    start_time = '1631248980000',
    name = 'FCイベント開催のお知らせ',
    image_url = 'https://picsum.photos/790/450',
    detail = 'Other schedule',
  } = scheduleDetailData?.data?.schedule || {};

  const onBackToScheduleList = () => history.push(PATH.SCHEDULE.LIST);

  const year = moment(+publish_time).get('year');
  const month = moment(+publish_time).get('month') + 1; // Month 0 - 11
  const day = moment(+publish_time).get('date');
  const hour = moment(+start_time).get('hour');
  // console.log("🚀 ~ ScheduleDetail ~ day", moment(+publish_time).format("DD MM YYYY HH"))

  const renderNextSchedules = (data) => {
    if (isGetScheduleDetailDataSuccess && data?.data?.next_schedule?.length) {
      return data.data.next_schedule.map((item) => (
        <ScheduleItem
          name={item.name}
          scheduleType={renderScheduleTypeLabel(item.type)}
          dateNumber={moment(+item.end_time).get('date')}
          onClick={() => history.push(PATH.SCHEDULE.DETAIL(item.id))}
        />
      ));
    }
    return null;
  };

  return (
    <Layout>
      <div className="schedule">
        <Breadcrumb className="schedule__breadcrumb">
          <Breadcrumb.Item>
            <Link to={PATH.DEFAULT}>トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.SCHEDULE.LIST}>スケジュール</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.SCHEDULE.DETAIL(id)}>FCイベント開催のお知らせ</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="schedule__detail">
          <div className="schedule__detail__content">
            <div className="detail__header">
              <Button className="detail__header__back">Back to new list</Button>
              <div className="detail__header__left">
                <span className="detail__header__left--text">
                  {year} {month}月
                </span>
                <span className="detail__header__left--date">
                  {day}/{month}
                </span>
                <span className="detail__header__left--info">水</span>
              </div>
              <div className="detail__header__right">
                <div className="detail__header__right--info">
                  <span>{renderScheduleTypeLabel(type)}</span>
                  <span>{hour}:00~</span>
                </div>
                <h2 className="detail__header__right--title">{name}</h2>
              </div>
            </div>
            <div className="detail__content">
              <img src={image_url} alt="Img" />
              <div dangerouslySetInnerHTML={{ __html: detail }} />
              <Button className="detail__content__btn">購入はこちら</Button>
            </div>
            <div className="detail__footer">
              <div className="detail__footer__share">
                <SocialShare url={currentUrl} />
              </div>
            </div>
          </div>

          <div className="schedule__detail__related">
            <Button className="detail__related__btn" onClick={onBackToScheduleList}>
              Schedule一覧
            </Button>
            <h3 className="detail__related__title">最新スケジュール</h3>
            <div className="detail__related__list">{renderNextSchedules(scheduleDetailData)}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
