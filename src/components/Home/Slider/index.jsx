import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import styles from './Slider.module.scss';

SwiperCore.use([Pagination]);

const Slider = React.forwardRef((props, ref) => {
  const { items } = props;
  return (
    <Swiper
      itemRef={ref}
      className={styles.swiper}
      slidesPerView={2}
      spaceBetween={55}
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
          {({ isNext, isPrev }) => (
            <div className={clsx(styles.content, { [styles.next]: isNext, [styles.prev]: isPrev })}>
              <img src={source.src} alt={source.alt} />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
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
