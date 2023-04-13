import React from 'react';
import PropTypes from 'prop-types';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import TitleIcon from 'components/shared/TitleIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavBtn from 'components/swiper/SwiperNavBtn';
import useSWR from 'swr';
import { SLIDESHOW } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';

const SlideProduct = ({ title, section, className }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class=${className}></span>`;
    },
  };

  const { data: products, isLoading } = useSWR(
    `${SLIDESHOW}?section=${section}`,
    fetcher
  );
  return (
    <div
      className={`border border-gray-100 rounded-lg p-4 pb-0 bullet-active-rose bg-white my-8 ${className}`}
    >
      <header className="flex items-center text-sm">
        <h2 className="font-semibold text-zinc-400 flex items-center ">
          <TitleIcon bg="bg-zinc-400" />
          <span className="mr-1"> {title} </span>
        </h2>
        <div className="mr-auto">
          <a
            href=""
            className="bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-200 rounded-lg text-rose-500/70 font-bold px-4 py-2 relative before:absolute before:w-4 before:h-[1px] before:bg-zinc-300 before:-left-4 before:top-1/2 before:-translate-y-1/2"
            type="button"
          >
            مشاهده همه
          </a>
        </div>
      </header>
      <main className="pt-4">
        <Swiper
          pagination={pagination}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          className="mySwiper !pb-12"
        >
          {!isLoading &&
            products.slice(0, 9)?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCartVertical
                  {...product}
                  containerClassName="border-l hover:shadow-lg py-4 transition-all duration-200"
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
      </main>
    </div>
  );
};

SlideProduct.propTypes = {};

export default SlideProduct;
