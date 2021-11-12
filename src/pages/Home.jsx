import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Slider from '../components/Home/Slider';
// import Button from '../components/Button';
import NewItem from '../components/Home/NewItem';
import ScheduleItem from '../components/Home/ScheduleItem';

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <Slider
          items={[
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
            { src: 'https://picsum.photos/1920/650', alt: 'Slide' },
          ]}
        />
        {/* <div className="home__user">
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
        </div> */}

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
          <h3 className="home__schedule__subtitle">2021年11月</h3>
          <div className="home__schedule__content">
            <ScheduleItem />
            <ScheduleItem />
          </div>
          <Link to="/" className="home__schedule__viewmore">
            View more
          </Link>
        </div>

        <div className="home__profile">
          <h2 className="home__profile__title">PROFILE</h2>
          <div className="home__profile__content">
            <div className="home__profile__picture">
              <img src="https://picsum.photos/600/700" alt="" />
            </div>
            <div className="home__profile__information">
              <h1 className="profile__info__name">森保まどか</h1>
              <h2 className="profile__info__subname">Madoka Moriyasu</h2>
              <p className="profile__info__about">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <div className="profile__info__item">
                <p className="profile__info__item--title">Date of birth</p>
                <p className="profile__info__item--content">3 September 2002</p>
              </div>
              <div className="profile__info__item">
                <p className="profile__info__item--title">Height</p>
                <p className="profile__info__item--content">167.5cm</p>
              </div>
              <div className="profile__info__item">
                <p className="profile__info__item--title">City</p>
                <p className="profile__info__item--content">Tokyo</p>
              </div>
              <div className="profile__info__item">
                <p className="profile__info__item--title">Country</p>
                <p className="profile__info__item--content">Japan</p>
              </div>
              <div className="profile__info__item">
                <p className="profile__info__item--title">Like</p>
                <p className="profile__info__item--content">Yellow Dogs, Earning</p>
              </div>
              <div className="profile__info__item">
                <p className="profile__info__item--title">Hobby</p>
                <p className="profile__info__item--content">Play basketball, draw, watch funny programs, dance cover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
