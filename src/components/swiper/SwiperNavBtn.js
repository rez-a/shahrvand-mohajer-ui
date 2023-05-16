import React from 'react';
import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';

const SwiperNavBtn = ({
  nextIcon,
  prevIcon,
  nextButtonClassName,
  prevButtonClassName,
}) => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btn absolute top-1/2 -translate-y-24 sm:-translate-y-1/2 z-10 w-full flex items-center justify-between">
      <button
        className={nextButtonClassName}
        onClick={() => swiper.slideNext()}
      >
        {nextIcon}
      </button>
      <button
        className={prevButtonClassName}
        onClick={() => swiper.slidePrev()}
      >
        {prevIcon}
      </button>
    </div>
  );
};

SwiperNavBtn.propTypes = {
  nextIcon: PropTypes.element,
  prevIcon: PropTypes.element,
  nextButtonClassName: PropTypes.string,
  prevButtonClassName: PropTypes.string,
};

export default SwiperNavBtn;
