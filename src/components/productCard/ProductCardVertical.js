import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugConverter from 'utilities/slugConverter';
import queryString from 'query-string';

const ProductCartVertical = ({
  containerClassName,
  Name,
  ErpCode,
  MainGroupName,
  MainGroupErpCode,
  SideGroupName,
  SideGroupErpCode,
  SellPrice,
  LastBuyPrice,
  Image,
}) => {
  const discount = Math.floor(
    (SellPrice - LastBuyPrice) / (LastBuyPrice / 100)
  );

  return (
    <div
      class={`max-w-xs overflow-hidden group ${containerClassName}`}
    >
      <div className="px-4 flex items-center">
        <span
          className={`bg-rose-500 mr-auto text-xs text-white p-2 rounded-xl rounded-br-none font-bold ${
            SellPrice !== LastBuyPrice ? 'visible' : 'invisible'
          }`}
        >
          {discount}%
        </span>
      </div>
      <div className="w-full h-60 p-4 overflow-hidden">
        <img className="object-contain" src={Image} alt={Name} />
      </div>
      <div class="px-6 py-4">
        <Link
          to={`/product/${MainGroupErpCode}/${slugConverter(
            MainGroupName
          )}/${SideGroupErpCode}/${slugConverter(
            SideGroupName
          )}/${ErpCode}/${slugConverter(Name)}`}
          class="font-bold truncate block w-full text-rose-500/70 group-hover:text-rose-500/100 transition-all duration-200 text-base"
        >
          {Name}
        </Link>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Link
          to={`/products/${MainGroupErpCode}/${slugConverter(
            MainGroupName
          )}?${queryString.stringify(
            {
              subcategory: [SideGroupErpCode],
            },
            { arrayFormat: 'bracket' }
          )}`}
          class="inline-block bg-gray-200 max-w-full truncate rounded-full px-3 py-1 text-xs text-gray-700 opacity-75 hover:opacity-100 transition-all duration-200 cursor-pointer hover:underline"
        >
          #{SideGroupName}
        </Link>
      </div>
      <div className="text-sm px-6 font-bold">
        <span
          className={` relative ${
            SellPrice !== LastBuyPrice
              ? 'opacity-30  before:absolute whitespace-nowrap before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
              : 'opacity-100 text-black'
          }`}
        >
          <span className="whitespace-nowrap ml-1">
            {SellPrice?.toLocaleString()}
          </span>
          تومان
        </span>
        {SellPrice !== LastBuyPrice && (
          <span className="mr-4 text-rose-500 whitespace-nowrap">
            <span>{LastBuyPrice?.toLocaleString()}</span>
            تومان
          </span>
        )}
      </div>
    </div>
  );
};

ProductCartVertical.propTypes = {
  containerClassName: PropTypes.string,
  Name: PropTypes.string,
  SideGroupName: PropTypes.string,
  SideGroupErpCode: PropTypes.string,
  MainGroupErpCode: PropTypes.string,
  MainGroupName: PropTypes.string,
  SellPrice: PropTypes.number,
  DiscountPrice: PropTypes.number,
  rate: PropTypes.number,
  Image: PropTypes.string,
};

export default ProductCartVertical;
