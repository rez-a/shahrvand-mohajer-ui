import React from 'react';
import PropTypes from 'prop-types';
import Rates from 'components/shared/rating/Rates';

const ProductCartVertical = ({
  containerClassName,
  title,
  category,
  price,
  discount,
  rate,
  imageCover,
  allProduct,
}) => {
  return (
    <div
      class={`max-w-xs overflow-hidden group ${containerClassName}`}
    >
      <div className="px-4 flex items-center">
        <Rates rate={rate} />
        <span
          className={`bg-rose-500 mr-auto text-xs text-white p-2 rounded-xl rounded-br-none font-bold ${
            discount > 0 ? 'visible' : 'invisible'
          }`}
        >
          {discount}%
        </span>
      </div>
      <div className="w-full h-60 p-4 overflow-hidden">
        <img
          className="object-contain"
          src={imageCover}
          alt="Sunset in the mountains"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold truncate text-rose-500/70 group-hover:text-rose-500/100 transition-all duration-200 text-base">
          {title}
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 opacity-75 hover:opacity-100 transition-all duration-200 cursor-pointer">
          #{category}
        </span>
      </div>
      <div className="text-sm px-6 font-bold">
        <span
          className={` relative ${
            discount > 0
              ? 'opacity-30  before:absolute before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
              : 'opacity-100 text-black'
          }`}
        >
          <span className="whitespace-nowrap">
            {price.toLocaleString()}
          </span>{' '}
          تومان
        </span>
        {discount > 0 && (
          <span className="mr-4 text-rose-500 whitespace-nowrap">
            <span>
              {(price - (price * discount) / 100).toLocaleString()}
            </span>
            تومان
          </span>
        )}
      </div>
    </div>
  );
};

ProductCartVertical.propTypes = {
  containerClassName: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  rate: PropTypes.number,
  imageCover: PropTypes.string,
};

export default ProductCartVertical;
