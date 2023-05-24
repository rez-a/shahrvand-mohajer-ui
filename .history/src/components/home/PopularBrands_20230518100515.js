import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import brands from 'brands';
import { Autoplay, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const PopularBrands = (props) => {
  return (
    <div className="border rounded-xl mx-4 2xl:mx-0 p-4 my-8 bg-white">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={5}
        spaceBetween={15}
        className="mySwiper"
      >
        {brands?.map((brand) => (
          <SwiperSlide className="relative" key={brand.id}>
            <div className="h-24 w-24 mx-auto  top-1/2 ">
              <img
                src={brand.brandCover}
                className="w-full h-full object-contain"
                alt="brand"
              />
            </div>
            <Link
              to={`/search?q=${brand.linkTo}`}
              className="absolute w-full h-full top-0 left-0 z-20"
            />
          </SwiperSlide>
        ))}
        <SwiperNavBtn
          nextIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              className="fill-black opacity-80"
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
              className="fill-black opacity-80"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          }
        />
      </Swiper>
    </div>
  );
};

PopularBrands.propTypes = {};

export default PopularBrands;
