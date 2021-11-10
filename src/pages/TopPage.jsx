import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import NewItem from '../components/Home/NewItem';
import ScheduleItem from '../components/Home/ScheduleItem';
import Slider from '../components/Home/Slider';
import { useGetNewsQuery, useGetTopPageBannersQuery } from '../services/CompanyService';

// Need Spinner

const TopPage = () => {
  console.log('1');

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
  const { data: newsData } = useGetNewsQuery({
    companyId: 1,
  });
  console.log("🚀 ~ TopPage ~ newsData", newsData)

  // console.log("🚀 ~ TopPage ~ data", bannersData);



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

      <div className="home__new">
        <h2 className="home__new__title">News</h2>
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-camera"
          time="24 hours ago"
          description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
        />
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-heart"
          time="2021.1.1"
          description="FCイベント開催のお知らせ"
        />
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-camera"
          time="24 hours ago"
          description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
        />
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-heart"
          time="2021.1.1"
          description="FCイベント開催のお知らせ"
        />
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-camera"
          time="24 hours ago"
          description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
        />
        <NewItem
          src="https://picsum.photos/128/90"
          alt="Title new"
          icon="icon-heart"
          time="2021.1.1"
          description="FCイベント開催のお知らせ"
        />
        <Link to="/" className="home__new__viewmore">
          View more
        </Link>
      </div>

      <div className="home__schedule">
        <h2 className="home__schedule__title">SCHEDULE</h2>
        <div className="home__schedule__content">
          <ScheduleItem />
          <ScheduleItem />
        </div>
        <Link to="/" className="home__schedule__viewmore">
          View more
        </Link>
      </div>
    </div>
  )
}

export default TopPage
