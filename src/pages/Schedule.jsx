import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import Modal from '../components/Modal';

export default function Schedule() {
  const [toggleFilter, setToggleFilter] = useState(false);

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
            events={[
              { title: 'サンプルサンプルサンプルサンプルサンプル ', date: '2021-11-11' },
              { title: 'サンプルサンプルサンプルサンプルサンプル ', date: '2021-11-11' },
              { title: 'サンプルサンプルサンプルサンプルサンプル ', date: '2021-11-11' },
            ]}
          />
        </div>
        <h2 className="schedule__title">
          <span className="schedule__title__prefix">11.8 Mon</span> SCHEDULE
        </h2>
        <div className="schedule__list">
          <ScheduleItem inline icon="icon-shake-hand" showDate={false} />
          <ScheduleItem inline icon="icon-live-photo" showDate={false} />
          <ScheduleItem inline icon="icon-shake-hand" showDate={false} />
          <ScheduleItem inline icon="icon-live-photo" showDate={false} />
        </div>
      </div>
      <Modal visible={toggleFilter} onClose={() => setToggleFilter(false)} title="カテゴリから選択する">
        <div className="schedule__filter__list">
          <Button className="filter__list--button">ALL</Button>
          <Button className="filter__list--button">
            <i className="icon-shake-hand" /> <span>EVENT</span>
          </Button>
          <Button className="filter__list--button">
            <i className="icon-live-photo" /> <span>LIVE</span>
          </Button>
          <Button className="filter__list--button">
            <i className="icon-media" /> <span>MEDIA</span>
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
