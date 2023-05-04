import React from 'react';
import PropTypes from 'prop-types';
import {
  decrease,
  increase,
  removeFromCart,
} from 'reducers/cart/actionCreators';
import { Link } from 'react-router-dom';

const CartProductCard = ({
  ErpCode,
  Name,
  IsVendor,
  Image,
  LastBuyPrice,
  SellPrice,
  MainGroupName,
  UnitName,
  UnitFew,
  SideGroupErpCode,
  MainGroupErpCode,
  dispatch,
  IsAvailable,
  quantity,
  cartId,
}) => {
  const discount = Math.floor(
    (SellPrice - LastBuyPrice) / (LastBuyPrice / 100)
  );
  return (
    <div className="flex items-start py-4 border-gray-100">
      <div className="h-40 w-40">
        <img
          class="object-cover w-full  h-96 md:h-auto md:w-48  "
          src={Image}
          alt={Name}
        />
      </div>
      <div class="flex flex-col justify-between leading-normal grow mr-2">
        <div>
          <div className="flex items-center justify-between">
            <div class="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {!!discount && (
                <div className=" inline">
                  <span
                    className={`bg-rose-500 mr-auto text-xs text-white p-2 rounded-xl rounded-br-none font-bold ${
                      SellPrice !== LastBuyPrice
                        ? 'visible'
                        : 'invisible'
                    }`}
                  >
                    {discount}%
                  </span>
                </div>
              )}
              <Link
                class="hover:text-rose-500 transition-all duration-200"
                to={`/product/${MainGroupErpCode}/${SideGroupErpCode}/${ErpCode}`}
                className={`${!!discount ? 'mr-2' : ''}`}
              >
                {Name}
              </Link>
            </div>
            <div className="flex items-center">
              {!!discount ? (
                <>
                  <small className=" relative opacity-30  before:absolute before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6">
                    <span>{SellPrice.toLocaleString()}</span>
                  </small>
                  <p className="font-bold mr-4 ">
                    <span>{LastBuyPrice.toLocaleString()}</span>
                    <span className="mr-1">تومان</span>
                  </p>
                </>
              ) : (
                <p className="font-bold mr-4 ">
                  <span>{LastBuyPrice.toLocaleString()}</span>
                  <span className="mr-1">تومان</span>
                </p>
              )}
            </div>
          </div>
          <p className="text-xs flex items-center justify-end text-slate-400 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current inline ml-1"
              width={18}
              height={18}
            >
              <path d="M5.99805 2C5.99805 2.51284 6.48805 3 6.99805 3H16.998C17.5109 3 17.998 2.51 17.998 2H19.998C19.998 3.65685 18.6549 5 16.998 5H12.998L12.999 7.06201C16.9449 7.55453 19.998 10.9207 19.998 15V21C19.998 21.5523 19.5503 22 18.998 22H4.99805C4.44576 22 3.99805 21.5523 3.99805 21V15C3.99805 10.9204 7.05176 7.55396 10.9981 7.06189L10.998 5H6.99805C5.33805 5 3.99805 3.66 3.99805 2H5.99805ZM11.998 11C9.78891 11 7.99805 12.7909 7.99805 15C7.99805 17.2091 9.78891 19 11.998 19C14.2072 19 15.998 17.2091 15.998 15C15.998 14.2582 15.7961 13.5635 15.4442 12.968L12.7052 15.7071L12.6109 15.7903C12.2187 16.0953 11.6514 16.0676 11.2909 15.7071C10.9004 15.3166 10.9004 14.6834 11.2909 14.2929L14.03 11.5538C13.4345 11.2019 12.7399 11 11.998 11Z"></path>
            </svg>
            <span>
              به ازای هر {Number(UnitFew)} {UnitName}
            </span>
          </p>
          <div className="flex items-center mb-4">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-rose-500"
              >
                <path d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
              </svg>
            </div>
            <p className="text-sm mr-2 text-zinc-700">
              {IsVendor ? MainGroupName : 'فروشگاه شهروند'}
            </p>
          </div>
          <p className="flex items-center">
            <div className="w-6 h-6">
              {IsAvailable ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-sky-500"
                >
                  <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-zinc-300"
                >
                  <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM7 11V13H17V11H7Z"></path>
                </svg>
              )}
            </div>
            <span className="text-sm mr-2 text-zinc-700">
              {IsAvailable ? 'موجود در انبار' : 'ناموجود'}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-2">
            <div className="items-center bg-gray-50 flex p-2 rounded-md ">
              <button
                onClick={() =>
                  dispatch(
                    increase(
                      cartId,
                      IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                    )
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-sky-500"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
              </button>
              <p className="mx-6 text-center">
                <span className="block font-bold">{quantity}</span>
                <span className="text-xs text-slate-400">
                  {UnitName}
                </span>
              </p>
              {quantity === 1 ? (
                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        cartId,
                        IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                      )
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-rose-500"
                  >
                    <path d="M5 11V13H19V11H5Z"></path>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      decrease(
                        cartId,
                        IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                      )
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-rose-500"
                  >
                    <path d="M5 11V13H19V11H5Z"></path>
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={() =>
                dispatch(
                  removeFromCart(
                    cartId,
                    IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                  )
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-zinc-400 hover:fill-rose-500 transition-all duration-300 mr-2"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <p className="font-bold mr-4 ">
              <span>
                {(
                  Number(LastBuyPrice) *
                  (quantity / Number(UnitFew) || 0)
                ).toLocaleString()}
              </span>
              <span className="mr-1">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  Name: PropTypes.string,
  SellPrice: PropTypes.number,
  LastBuyPrice: PropTypes.number,
  Image: PropTypes.string,
  IsAvailable: PropTypes.bool,
  IsVendor: PropTypes.bool,
  MainGroupName: PropTypes.string,
  dispatch: PropTypes.func,
  quantity: PropTypes.number,
};

export default CartProductCard;
