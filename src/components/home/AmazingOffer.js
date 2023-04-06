import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import tagBanner from 'assets/images/banners/tag-banner.png';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import products from 'productsFake';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';

const AmazingOffer = ({}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <div className="bg-rose-500 p-4 pb-0 my-8 grid grid-cols-5 items-center">
      <div className="col-span-1 mx-auto w-2/3">
        <img src={tagBanner} alt="amazing offer" />
      </div>
      <div className="col-span-4">
        <Swiper
          pagination={pagination}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper !pb-12"
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCartVertical
                {...product}
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

AmazingOffer.propTypes = {};

export default AmazingOffer;
