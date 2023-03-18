import React from 'react';
import PropTypes from 'prop-types';
import Rates from 'components/shared/rating/Rates';
import product1 from 'assets/images/products/products1.jpg';

const ProductCartHorizontal = ({
  containerClassName,
  title,
  price,
  discount,
  rate,
  imageCover,
}) => {
  return (
    <div class={`flex flex-col ${containerClassName}`}>
      <div className="flex">
        <div class="h-24 w-24 text-center overflow-hidden">
          <img src={imageCover} alt="Avatar of Jonathan Reinink" />
        </div>
        <div class="pr-2 bg-white flex flex-col justify-between leading-normal grow">
          <div class="text-gray-900 font-bold whitespace-nowrap mb-2">
            {title}
          </div>
          <div className="flex items-center justify-between">
            <Rates rate={rate} />
            <div className="text-left">
              <button className="border border-sky-500 text-sky-500 bg-white rounded-lg text-xs px-4 py-2 hover:bg-sky-500 hover:text-white transition-all duration-200">
                جزییات محصول
              </button>
            </div>
          </div>
          <div className="text-sm font-bold">
            <span
              className={` relative ${
                discount > 0
                  ? 'opacity-30  before:absolute before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
                  : 'opacity-100 text-black'
              }`}
            >
              <span className="whitespace-nowrap">
                {price.toLocaleString()}
              </span>
              تومان
            </span>
            {discount > 0 && (
              <span className="mr-4 text-rose-500 whitespace-nowrap">
                <span>
                  {(
                    price -
                    (price * discount) / 100
                  ).toLocaleString()}
                </span>
                تومان
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCartHorizontal.propTypes = {
  containerClassName: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  rate: PropTypes.number,
  imageCover: PropTypes.string,
};

export default ProductCartHorizontal;
