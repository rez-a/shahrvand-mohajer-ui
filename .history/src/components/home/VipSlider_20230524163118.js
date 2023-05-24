import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import useSWR from 'swr';
import { SLIDER_VIP, SLIDESHOW } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import { BASE_URL } from 'services/baseURL';
import LoaderProductCardVeritical from 'components/productCard/LoaderProductCardVeritical';

const VipSlider = ({}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class=' ${className}'></span>`;
    },
  };

  const { data: sliderVip, isLoading: sliderLoading } = useSWR(
    SLIDER_VIP,
    fetcher
  );
  const { data: products, isLoading: productsLoading } = useSWR(
    `${SLIDESHOW}?section=SLIDER1`,
    fetcher
  );

  return (
    <div
      className="p-4 pb-0 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center"
      style={{ backgroundColor: sliderVip?.data?.color }}
    >
      <div className="col-span-1 ">
        <p className="text-white text-2xl md:text-4xl px-4 pr-0 mb-4 font-semibold text-center leading-relaxed">
          {sliderVip?.data?.title}
        </p>
        <div className="mx-auto w-2/3">
          <img
            src={`${sliderVip?.data?.image}`}
            alt={sliderVip?.data?.title}
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 ">
        <Swiper
          pagination={pagination}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper !pb-4 sm:!pb-12"
        >
          {productsLoading
            ? [...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                  <LoaderProductCardVeritical />
                </SwiperSlide>
              ))
            : products?.data?.map((product) => (
                <SwiperSlide key={product.Id}>
                  <ProductCartVertical
                    product={product}
                    containerClassName="bg-white rounded-xl hover:shadow-lg py-4 transition-all duration-200"
                  />
                </SwiperSlide>
              ))}
           <SwiperNavBtn
            nextButtonClassName=""
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
            prevButtonClassName=""
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
    </div>
  );
};

VipSlider.propTypes = {};

export default VipSlider;
