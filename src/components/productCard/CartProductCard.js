import React from 'react';
import PropTypes from 'prop-types';
import storeLogo from 'assets/images/store-logo.png';
import {
  decrease,
  increase,
  removeFromCart,
} from 'reducers/cart/actionCreators';

const CartProductCard = ({
  Name,
  SellPrice,
  LastBuyPrice,
  Image,
  IsAvailable,
  IsVendor,
  MainGroupName,
  dispatch,
  quantity,
  Id,
  MainGroupErpCode,
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
          <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {Name}
          </h5>
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
            <div className="items-center border flex p-2 rounded-md ">
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

              <button
                onClick={() =>
                  quantity === 1
                    ? dispatch(
                        decrease(
                          Id,
                          IsVendor ? MainGroupErpCode : 'SHAHRVAND'
                        )
                      )
                    : dispatch(
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
                  className="fill-rose-500"
                >
                  <path d="M5 11V13H19V11H5Z"></path>
                </svg>
              </button>
            </div>
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
                width="20"
                height="20"
                className="fill-zinc-400 hover:fill-rose-500 transition-all duration-300 mr-2"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            {discount ? (
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
