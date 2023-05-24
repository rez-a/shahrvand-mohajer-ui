import React from 'react';
import PropTypes from 'prop-types';
import LoaderProductCardVeritical from 'components/productCard/LoaderProductCardVeritical';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import TitleIcon from 'components/shared/TitleIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Slider = ({ products, title, linkTo, isPagination }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class=${className}></span>`;
    },
  };
  return (
    <>
      <header className="flex items-center text-sm">
        <h2 className="font-semibold text-neutral-800 flex items-center px-4 py-5">
          <TitleIcon bg="bg-neutral-800" />
          <span className="mr-1"> {title} </span>
        </h2>
        {!!linkTo && (
          <div className="mr-auto">
            <Link
              to={linkTo}
              className="bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-200 rounded-lg text-rose-500/70 font-bold px-4 py-2 relative before:absolute before:w-4 before:h-[1px] before:bg-zinc-300 before:-left-4 before:top-1/2 before:-translate-y-1/2"
              type="button"
            >
              مشاهده همه
            </Link>
          </div>
        )}
      </header>
      <main className="pt-4 flex">
        <Swiper
          pagination={isPagination && pagination}
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
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={5}
          className="mySwiper !pb-12 !px-10"
        >
          {!!products
            ? products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCartVertical
                    product={product}
                    containerClassName="border-l hover:shadow-lg py-4 transition-all duration-200"
                  />
                </SwiperSlide>
              ))
            : [...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                  <LoaderProductCardVeritical />
                </SwiperSlide>
              ))}
          <SwiperNavBtn
            nextButtonClassName="right-0 left-auto top-0 absolute bg-red-100 z-10 w-10 h-full hover:bg-gray-50"
            nextIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.505 3 8.995 9.027L7.5 21"/>
              </svg>
            }
            prevButtonClassName="left-0 right-auto top-0 absolute bg-red-100 z-10 w-10 h-full hover:bg-gray-50"
            prevIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.5 3-9 9.002L16.495 21"/>
            </svg>
            }
          />
        </Swiper>
      </main>
    </>
  );
};

Slider.propTypes = {};

export default Slider;
