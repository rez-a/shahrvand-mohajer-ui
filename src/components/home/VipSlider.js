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
      return `<span class=${className}></span>`;
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
      className="p-4 pb-0 my-8 grid grid-cols-5 items-center"
      style={{ backgroundColor: sliderVip?.data?.color }}
    >
      <div className="hidden lg:block col-span-1 ">
        <p className="text-white text-4xl px-4 pr-0 mb-4 font-semibold text-center leading-relaxed">
          {sliderVip?.data?.title}
        </p>
        <div className="mx-auto w-2/3">
          <img
            src={`${BASE_URL}${sliderVip?.data?.image}`}
            alt={sliderVip?.data?.title}
          />
        </div>
      </div>
      <div className="col-span-5 lg:col-span-4">
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
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper !pb-12"
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
    </div>
  );
};

VipSlider.propTypes = {};

export default VipSlider;
