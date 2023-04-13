import React from 'react';
import PropTypes from 'prop-types';
import Rates from 'components/shared/rating/Rates';
import product1 from 'assets/images/products/products1.jpg';
import { Link } from 'react-router-dom';
import slugConverter from '../../utilities/slugConverter';

const ProductCartHorizontal = ({
  containerClassName,
  Name,
  SellPrice,
  LastBuyPrice,
  Image,
  ErpCode,
  SideGroupName,
  MainGroupName,
  SideGroupErpCode,
  MainGroupErpCode,
}) => {
  return (
    <div class={`flex flex-col ${containerClassName}`}>
      <div className="flex bg-white rounded-md p-2">
        <div class="h-24 w-24 text-center overflow-hidden">
          <img src={Image} alt={Name} />
        </div>
        <div class="pr-2 bg-white flex flex-col justify-between leading-normal grow">
          <Link
            to={`product/${ErpCode}/${slugConverter(Name)}`}
            class="text-gray-900 w-5/6 truncate font-bold whitespace-nowrap hover:text-rose-500 transition-all duration-200 mb-2"
          >
            {Name}
          </Link>
          <div className="flex items-center justify-between">
            <Link
              to={`products/${MainGroupErpCode}/${slugConverter(
                MainGroupName
              )}/${SideGroupErpCode}/${slugConverter(SideGroupName)}`}
              class="inline-block max-w-[50%] truncate bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 opacity-75 hover:opacity-100 transition-all duration-200 cursor-pointer hover:underline"
            >
              #{SideGroupName}
            </Link>
            <Link
              to={`product/${ErpCode}/${slugConverter(Name)}`}
              className="border block border-sky-500 text-sky-600 bg-white rounded-lg text-xs px-4 py-2 hover:bg-sky-500 hover:text-white transition-all duration-200"
            >
              جزییات محصول
            </Link>
          </div>
          <div className="text-sm font-bold">
            <span
              className={` relative ${
                SellPrice !== LastBuyPrice
                  ? 'opacity-30  before:absolute before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
                  : 'opacity-100 text-black'
              }`}
            >
              <span className="whitespace-nowrap">
                {SellPrice.toLocaleString()}
              </span>
              تومان
            </span>
            {SellPrice !== LastBuyPrice && (
              <span className="mr-4 text-rose-500 whitespace-nowrap">
                <span>{LastBuyPrice.toLocaleString()}</span>
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
