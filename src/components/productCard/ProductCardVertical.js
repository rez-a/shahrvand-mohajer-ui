import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useContext } from 'react';
import { CartContext } from 'contexts/CartProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  addToCart,
  decrease,
  increase,
  removeFromCart,
} from 'reducers/cart/actionCreators';

const ProductCartVertical = ({ containerClassName, product }) => {
  const {
    Name,
    ErpCode,
    MainGroupName,
    MainGroupErpCode,
    SideGroupName,
    SideGroupErpCode,
    SellPrice,
    LastBuyPrice,
    Image,
    IsVendor,
    Id,
  } = product;
  const discount = Math.floor(
    (SellPrice - LastBuyPrice) / (LastBuyPrice / 100)
  );

  const location = useLocation();

  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(false);
  useEffect(() => {
    const vendor = cart.find((vendor) =>
      IsVendor
        ? vendor.vendorErpCode === MainGroupErpCode
        : vendor.vendorErpCode === 'SHAHRVAND'
    );
    const product = vendor?.products.find(
      (product) => product.Id === Id
    );
    setQuantity(product?.quantity);
  }, [cart, location]);

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
      {!!quantity ? (
        <div className=" items-center mx-6 border rounded-md  w-fit text-xs flex py-1 px-2 border-rose-200">
          <button
            onClick={() =>
              dispatch(
                increase(
                  Id,
                  IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                )
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-sky-500"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </button>
          <span className="mx-4">{quantity}</span>
          {quantity === 1 ? (
            <button
              onClick={() =>
                dispatch(
                  removeFromCart(
                    Id,
                    IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                  )
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="fill-zinc-400 hover:fill-rose-500 transition-all duration-300"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(
                  decrease(
                    Id,
                    IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                  )
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="fill-rose-500"
              >
                <path d="M5 11V13H19V11H5Z"></path>
              </svg>
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() =>
            dispatch(
              addToCart(
                product,
                IsVendor
                  ? {
                      vendorErpCode: MainGroupErpCode,
                      vendorName: MainGroupName,
                    }
                  : {
                      vendorErpCode: 'SHAHRVAND',
                      vendorName: 'شهروند',
                    }
              )
            )
          }
          className="bg-rose-500/90 text-white  py-1 px-2 text-xs rounded-md mx-6 shadow-lg shadow-rose-500/0 hover:bg-rose-500 transition-all duration-300"
        >
          افزودن به سبد خرید
        </button>
      )}

      <div class="px-6 py-4">
        <Link
          to={`/product/${MainGroupErpCode}/${SideGroupErpCode}/${ErpCode}`}
          class="font-bold truncate block w-full text-rose-500/70 group-hover:text-rose-500/100 transition-all duration-200 text-base"
        >
          {Name}
        </Link>
      </div>
      <div class="px-6 pb-2">
        <Link
          to={`/products/${MainGroupErpCode}?${queryString.stringify(
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
