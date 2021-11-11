/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import NewItem from '../components/Home/NewItem';
import ScheduleItem from '../components/Home/ScheduleItem';
import Slider from '../components/Home/Slider';
import { SORT_TYPE, COMPANY } from '../contants/config';
import { useGetNewsQuery, useGetSchedulesQuery, useGetTopPageBannersQuery, useGetTopPageProfileQuery } from '../services/CompanyService';

// Need Spinner

const TopPage = () => {
  const [getNewsQueryParams, setGetNewsQueryParams] = useState({
    limit: 10,
    sort: SORT_TYPE.NEWEST,
    category: COMPANY.CAMPAIGN_CATEGORIES.EVENT,
    // artistId: 16777517
  })


  const { data: bannersData } = useGetTopPageBannersQuery({ companyId: 1 }, {
    selectFromResult: ({ data, ...rest }) => {
      // console.log("🚀 ~ TopPage ~ data", data)
      let mapToSliderData = [];
      if (data?.data?.length) {
        mapToSliderData = data.data.map((item) => ({
          src: item.image_url,
          alt: 'Slide'
        }))
      }

      return { data: mapToSliderData, ...rest };
    },
  });
  const { data: newsData, isSuccess: isGetNewsDataSuccess } = useGetNewsQuery(getNewsQueryParams);

  const { data: profileData } = useGetTopPageProfileQuery({
    login_id: "mini01@gmail.com"
  });

  const { data: scheduleData, isSuccess: isGetScheduleDataSuccess } = useGetSchedulesQuery({
    month: 1635699600000
  });

  // console.log("🚀 ~ TopPage ~ newsData", newsData)
  console.log("🚀 ~ TopPage ~ profileData", profileData);
  console.log("🚀 ~ TopPage ~ scheduleData", scheduleData)



  const onViewMore = (e) => {
    e.preventDefault();
    // alert('a')
    setGetNewsQueryParams({
      ...getNewsQueryParams,
      category: null
    })
  }

  const renderIcon = (category) => {
    switch (category) {
      case COMPANY.CAMPAIGN_CATEGORIES.NOTIFICATION:
        return "icon-heart"
      case COMPANY.CAMPAIGN_CATEGORIES.MEDIA:
        return "icon-camera"
      default:
        return ''
    }
  }


  const renderNews = () => {
    if (isGetNewsDataSuccess) {
      return (
        <div className="home__new">
          <h2 className="home__new__title">News</h2>
          {newsData.data.campaigns.map((item) => <NewItem
            src={item.image}
            alt={item.title}
            icon={renderIcon(item.category)}
            time={moment(+item.publish_time).format("DD.MM.YYYY")}
            description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
          />)}
          <Link className="home__new__viewmore" onClick={onViewMore} to="/">
            View more
          </Link>
        </div>
      )
    }
    return null;
  }

  const renderSchedule = () => {
    if (isGetScheduleDataSuccess) {
      return (
        <div className="home__schedule">
          <h2 className="home__schedule__title">SCHEDULE</h2>
          <div className="home__schedule__content">
            {scheduleData.data.schedules.map(item =>
              <ScheduleItem
                dateNumber={moment(+item.start_time).format("DD")}
                name={item.name}
                hour={moment(+item.start_time).format("HH:00")}
              />)}
          </div>
          <Link to="/" className="home__schedule__viewmore">
            View more
          </Link>
        </div>
      )
    }
    return null;
  }



  return (
    <div className="home">
      <Slider items={bannersData || []} />
      <div className="home__user">
        <Button className="home__user--btn">
          <span className="home__user--btn__icon">
            <i className="icon-user" />
          </span>
          <span className="home__user--btn__title">プロフィール</span>
        </Button>
        <Button className="home__user--btn">
          <span className="home__user--btn__icon">
            <i className="icon-calendar" />
          </span>
          <span className="home__user--btn__title">スケジュール</span>
        </Button>
      </div>

      {renderNews()}
      {renderSchedule()}



    </div>
  )
}

export default TopPage;
