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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#323232" stroke-width="1.512" d="M15.015 3.74a2.268 2.268 0 1 1-3.208 3.207 2.268 2.268 0 0 1 3.208-3.208m5.247 6.556a2.722 2.722 0 1 1-3.85 3.85 2.722 2.722 0 0 1 3.85-3.85M6.563 15.35a1.36 1.36 0 1 1-1.924 1.924 1.36 1.36 0 0 1 1.924-1.924m.434-8.262a1.815 1.815 0 1 1-2.566 2.567 1.815 1.815 0 0 1 2.566-2.567"/>
  <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 20.167a.453.453 0 1 0 .002.906.453.453 0 0 0-.002-.906"/>
</svg>
          <span className="mr-1"> {title} </span>
        </h2>
        {!!linkTo && (
          <div className="mr-auto">
            <Link
              to={linkTo}
              className="border border-gray-100 hover:bg-gray-100 transition-all duration-200 rounded-lg text-rose-500/70 font-bold px-4 py-2 relative before:absolute before:w-4 before:h-[1px] before:bg-zinc-300 before:-left-4 before:top-1/2 before:-translate-y-1/2"
              type="button"
            >
              مشاهده همه
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.503 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6.002 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
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
