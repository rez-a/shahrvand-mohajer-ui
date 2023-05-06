import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VendorItem from './VendorItem';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { VENDORS } from 'services/endPoints';
import useObserved from 'hooks/useObserved';
import LoaderVendor from './LoaderVendor';

const Vendors = () => {
  const { ref, view } = useObserved();
  const { data: vendors } = useSWR(view && VENDORS, fetcher);

  return (
    <div
      className="border rounded-xl p-4 m-4 2xl:mx-0 bg-white"
      ref={ref}
    >
      <header className="text-zinc-400 text-center font-semibold p-4">
        بیش از 1,000 کالا در فروشگاه های شهروند
      </header>
      <div className="mt-3 mb-2"></div>
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
        {!!vendors?.data
          ? vendors?.data?.map((vendor) => (
              <SwiperSlide key={vendor.id}>
                <VendorItem
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

export default Vendors;
