import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  EffectFade,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';

const ShowcaseSlider = ({ sliders }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class=${className}></span>`;
    },
  };
  return (
    <>
      <Swiper
        effect={'fade'}
        modules={[Navigation, EffectFade, Pagination, A11y, Autoplay]}
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        className="mySwiper relative h-full rounded-lg !w-full"
      >
        {sliders?.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.Image} alt="image-slider" />
          </SwiperSlide>
        ))}
        <SwiperNavBtn
          nextIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              className="fill-white opacity-80"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          }
          prevIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              className="fill-white opacity-80"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          }
        />
      </Swiper>
    </>
  );
};

ShowcaseSlider.propTypes = {
  sliders: PropTypes.array,
};

export default ShowcaseSlider;
