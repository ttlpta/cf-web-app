import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import NewItem from '../components/New/NewItem';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import { useGetCampaignsQuery } from '../services/CompanyService';
import { dayInMilliseconds, NEW_CATEGORIES, SORT_TYPE } from '../contants/config';
import { renderNewsIcon } from '../contants/helper';
import PATH from '../contants/path';

export default function New() {
  const history = useHistory();

  const [toggleFilter, setToggleFilter] = useState(false);

  const [getNewsQueryParams, setGetNewsQueryParams] = useState({
    limit: 10,
    sort: SORT_TYPE.NEWEST,
    category: null,
    // artistId: 16777517
  });

  const { data: newsData, isSuccess: isGetNewsDataSuccess } = useGetCampaignsQuery(getNewsQueryParams);

  const currentDateInMillisecond = moment().valueOf();

  const renderTime = (time) => {
    if (time > currentDateInMillisecond) {
      return `${moment(time).format("YYYY MM DD")}`;
    }
    if (currentDateInMillisecond - time < dayInMilliseconds) {
      // console.log(moment(time).format("DD MM YYYY HH MM SS"));
      return `${moment(time).get('hour')} hour ago`;
    }
    return `${moment(time).format("YYYY MM DD")}`
  }


  const renderNewList = (data) => {
    console.log("🚀 ~ renderNewList ~ data", data);
    if (data?.data?.campaigns?.length) {
      return data.data.campaigns.map(item => <NewItem
        className="new__list__item"
        src={item.image || "https://picsum.photos/128/90"}
        alt={item.name}
        icon={renderNewsIcon(item.category)}
        time={renderTime(+item.publish_time)}
        description={item.summary || "サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"}
        onClick={() => history.push(`/news/detail/${item.id}`)}
      />)
    }
    return null;
  };

  const onFilterNewsCategories = (category) => {
    setGetNewsQueryParams({
      ...getNewsQueryParams,
      category,
    });
    setToggleFilter(false);
  }



  return (
    <Layout>
      <div className="new">
        <Breadcrumb className="new__breadcrumb">
          <Breadcrumb.Item>
            <Link to={PATH.DEFAULT}>トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.NEW.LIST}>NEWS</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="new__title">NEWS</h2>
        <h3 className="new__subtitle">Newest</h3>
        <div className="new__divider" />
        <div className="new__filter">
          <Button className="new__filter__btn" onClick={() => setToggleFilter(!toggleFilter)}>
            <span>カテゴリ</span>
            <BsFilter />
          </Button>
        </div>
        <div className="new__list">
          {renderNewList(newsData)}
          {/* <Pagination current={1} total={10} pageSize={3} /> */}
        </div>
      </div>
      <Modal visible={toggleFilter} onClose={() => setToggleFilter(false)} title="カテゴリ">
        <div className="new__filter__list">
          <Button className="filter__list--button" onClick={() => onFilterNewsCategories(NEW_CATEGORIES.NOTIFICATION)}>
            <i className="icon-notice" /> <span>NOTICE</span>
          </Button>
          <Button className="filter__list--button" onClick={() => onFilterNewsCategories(NEW_CATEGORIES.EVENT)}>
            <i className="icon-shake-hand" /> <span>EVENT</span>
          </Button>
          <Button className="filter__list--button" onClick={() => onFilterNewsCategories(NEW_CATEGORIES.MEDIA)}>
            <i className="icon-media" /> <span>MEDIA</span>
          </Button>
          <Button className="filter__list--button" onClick={() => onFilterNewsCategories(NEW_CATEGORIES.OTHER)}>
            <i className="icon-three-dot" /> <span>OTHER</span>
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
