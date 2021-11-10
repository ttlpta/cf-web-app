import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import styles from './Slider.module.scss';

SwiperCore.use([Pagination, Thumbs]);

const Slider = React.memo((props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { items } = props;
  return (
    <div className={styles.wrapper}>
      <Swiper
        className={styles.swiperMain}
        thumbs={{ swiper: thumbsSwiper, slideThumbActiveClass: styles.thumbActive }}
        slidesPerView={1}
      >
        {items.map((source, index) => (
          <SwiperSlide key={index} className={styles.item}>
            <img src={source.src} alt={source.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={styles.swiper}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={25}
        centeredSlides
        pagination={{
          clickable: true,
          clickableClass: styles.pagination,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
      >
        {items.map((source, index) => (
          <SwiperSlide key={index} className={styles.item}>
            <img src={source.src} alt={source.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

Slider.displayName = 'Slider';

export default Slider;
