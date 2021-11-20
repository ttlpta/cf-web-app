import React from 'react';
import Layout from '../components/Layout';

export default function ArtistProfile() {
  return (
    <Layout>
      <div className="artist__profile">
        <div className="artist__profile__picture">
          <div className="artist__profile__picture--background">
            <img src="https://picsum.photos/1920/650" alt="" />
          </div>
          <div className="artist__profile__picture--avatar">
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
        </div>
        <h1 className="artist__profile__name">Gen Hoshino</h1>
        <hr className="artist__profile__divider" />
        <div className="artist__profile__info">
          <h2 className="artist__profile__title">About</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">Date of birth</p>
            <p className="artist__profile__info__item--content">3 September 2002</p>
          </div>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">Height</p>
            <p className="artist__profile__info__item--content">167.5cm</p>
          </div>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">City</p>
            <p className="artist__profile__info__item--content">Tokyo</p>
          </div>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">Country</p>
            <p className="artist__profile__info__item--content">Japan</p>
          </div>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">Like</p>
            <p className="artist__profile__info__item--content">Yellow Dogs, Earning</p>
          </div>
          <div className="artist__profile__info__item">
            <p className="artist__profile__info__item--title">Hobby</p>
            <p className="artist__profile__info__item--content">
              Play basketball, draw, watch funny programs, dance cover
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
