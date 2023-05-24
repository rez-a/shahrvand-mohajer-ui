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
    <div className="swiper-nav-btn relative w-full h-full">
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
