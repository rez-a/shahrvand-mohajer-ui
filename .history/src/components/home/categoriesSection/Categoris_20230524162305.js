import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryItem from 'components/home/categoriesSection/CategoryItem';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { CATEGORIES } from 'services/endPoints';
import useObserved from 'hooks/useObserved';
import LoaderVendor from './LoaderCategories';

const Categoris = () => {
  const { ref, view } = useObserved();
  const { data: categories } = useSWR(view && CATEGORIES, fetcher);

  return (
    <div
      className="border rounded-xl p-4 m-4 2xl:mx-0 bg-white"
      ref={ref}
    >
      <header className="text-zinc-400 text-center font-semibold p-4">
        بیش از 1,000 کالا در دسته بندی های مختلف شهروند
      </header>
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
          1280: {
            slidesPerView: 6,
          },
        }}
        slidesPerView={6}
        spaceBetween={10}
        className="mySwiper"
      >
        {!!categories?.data
          ? categories?.data?.map((vendor) => (
              <SwiperSlide key={vendor.id}>
                <CategoryItem
                  {...vendor}
                  containerClassName="bg-white rounded-xl hover:shadow-lg py-4 transition-all duration-200"
                />
              </SwiperSlide>
            ))
          : [...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <LoaderVendor />
              </SwiperSlide>
            ))}
          <SwiperNavBtn
            nextButtonClassName="right-0 left-auto top-0 pr-2 absolute bg-white border-gray-50 border-l z-10 w-10 h-full hover:bg-gray-50"
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
            prevButtonClassName="left-0 right-auto top-0 pr-2 absolute bg-white border-gray-50 border-r z-10 w-10 h-full hover:bg-gray-50"
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

export default Categoris;
