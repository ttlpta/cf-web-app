import moment from 'moment';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import NewItem from '../components/New/NewItem';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import Slider from '../components/Home/Slider';
import { SORT_TYPE } from '../contants/config';
import {
  useGetCampaignsQuery,
  useGetSchedulesQuery,
  useGetTopPageBannersQuery,
  useGetTopPageProfileQuery,
} from '../services/CompanyService';
import { userProfileSelector } from '../redux/slices/authSlice';
import { renderNewsIcon } from '../contants/helper';
import PATH from '../contants/path';

// Need Spinner
const currentDateInMillisecond = moment().valueOf();

const TopPage = () => {
  const history = useHistory();
  const [getNewsQueryParams, setGetNewsQueryParams] = useState({
    limit: 5,
    sort: SORT_TYPE.NEWEST,
    category: null,
    // artistId: 16777517
  });
  const { email1: artisEmail } = useSelector(userProfileSelector);

  const { data: bannersData } = useGetTopPageBannersQuery(
    { companyId: 1 },
    {
      selectFromResult: ({ data, ...rest }) => {
        let mapToSliderData = [];
        if (data?.data?.length) {
          mapToSliderData = data.data.map((item) => ({
            src: item.image_url,
            alt: 'Slide',
          }));
        }

        return { data: mapToSliderData, ...rest };
      },
    },
  );
  const { data: newsData, isSuccess: isGetNewsDataSuccess } = useGetCampaignsQuery(getNewsQueryParams);

  const { data: profileData, isSuccess: isGetProfileDataSuccess } = useGetTopPageProfileQuery({
    login_id: 'ha.hoang.thi+8@bluebelt.asia',
  });

  const { data: scheduleData, isSuccess: isGetScheduleDataSuccess } = useGetSchedulesQuery({
    month: currentDateInMillisecond,
    pageSize: 5
  });

  const renderNews = () => {
    if (isGetNewsDataSuccess) {
      return (
        <div className="home__new">
          <h2 className="home__new__title">News</h2>
          {newsData.data.campaigns.map((item) => (
            <NewItem
              src={item.image}
              alt={item.title}
              icon={renderNewsIcon(item.category)}
              time={moment(+item.publish_time).format('DD.MM.YYYY')}
              description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
              onClick={() => history.push(`/news/detail/${item.id}`)}
            />
          ))}
          <Link className="home__new__viewmore" to={PATH.NEW.LIST}>
            View more
          </Link>
        </div>
      );
    }
    return null;
  };

  const renderSchedule = () => {
    if (isGetScheduleDataSuccess) {
      return (
        <div className="home__schedule">
          <h2 className="home__schedule__title">SCHEDULE</h2>
          <div className="home__schedule__content">
            {scheduleData.data.schedules.records.map((item) => (
              <ScheduleItem
                dateNumber={moment(+item.start_time).format('DD')}
                name={item.name}
                hour={moment(+item.start_time).format('HH:00')}
                onClick={() => history.push(`/schedules/detail/${item.id}`)}
              />
            ))}
          </div>
          <Link to={PATH.SCHEDULE.LIST} className="home__schedule__viewmore">
            View more
          </Link>
        </div>
      );
    }
    return null;
  };

  const renderProfile = () => {
    if (isGetProfileDataSuccess) {
      const {
        avatar_image = 'https://picsum.photos/600/700',
        artist_name = '森保まどか',
        nick_name = 'Madoka Moriyasu',
        bio = 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        dob = '3 September 2002',
        height = '167.5cm',
        city = 'Tokyo',
        country = 'Japan',
        hobby = 'Play basketball, draw, watch funny programs, dance cover',
        blood_type = 1
      } = profileData?.data?.artist || {};

      const generalInfo = {
        dob, height, city, country, blood_type, hobby
      }

      const renderGeneralInfo = () => Object.keys(generalInfo).map((key) => (
        <div className="profile__info__item">
          <p className="profile__info__item--title">{key}</p>
          <p className="profile__info__item--content">{generalInfo[key]}</p>
        </div>
      ))

      return (
        <div className="home__profile">
          <h2 className="home__profile__title">PROFILE</h2>
          <div className="home__profile__content">
            <div className="home__profile__picture">
              <img src={avatar_image} alt={artist_name || 'avatar'} />
            </div>
            <div className="home__profile__information">
              <h1 className="profile__info__name">{artist_name} </h1>
              <h2 className="profile__info__subname">{nick_name} </h2>
              <p className="profile__info__about">
                {bio}
              </p>
              {renderGeneralInfo()}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="home">
      <Slider
        items={bannersData || []}
      />
      <div className="home__user">
        <Button className="home__user--btn">
          <span className="home__user--btn__icon">
            <i className="icon-user" />
          </span>
          <span className="home__user--btn__title">プロフィール</span>
        </Button>
        <Button className="home__user--btn"
        >
          <span className="home__user--btn__icon">
            <i className="icon-calendar" />
          </span>
          <span className="home__user--btn__title">スケジュール</span>
        </Button>
      </div>

      {renderNews()}
      {renderSchedule()}
      {renderProfile()}
    </div>
  );
};

export default TopPage;
