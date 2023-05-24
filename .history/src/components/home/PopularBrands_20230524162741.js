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
            nextButtonClassName="right-0 rounded-r-lg  left-auto top-0 pr-2 absolute bg-white border-gray-50 border-l z-10 w-10 h-full hover:bg-gray-50"
            nextIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m7.505 3 8.995 9.027L7.5 21"
                />
              </svg>
            }
            prevButtonClassName="left-0 rounded-l-lg right-auto top-0 pr-2 absolute bg-white border-gray-50 border-r z-10 w-10 h-full hover:bg-gray-50"
            prevIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m16.5 3-9 9.002L16.495 21"
                />
              </svg>
            }
          />

      </Swiper>
    </div>
  );
};

PopularBrands.propTypes = {};

export default PopularBrands;
