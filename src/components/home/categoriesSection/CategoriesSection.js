import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import categories from 'categoriesFake';
import CategoriesItem from './CategoriesItem';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';

const CategoriesSection = () => {
  return (
    <div className="border rounded-xl mx-4 p-4 my-8 bg-white">
      <header className="text-zinc-400 text-center font-semibold p-4">
        بیش از ۱،۵۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف
      </header>
      <div className="mt-3 mb-2"></div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={10}
        className="mySwiper"
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoriesItem
              {...category}
              containerClassName="bg-white rounded-xl hover:shadow-lg py-4 transition-all duration-200"
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

export default CategoriesSection;
