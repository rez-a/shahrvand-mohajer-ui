import React from 'react';
import {
  addToCart,
  decrease,
  increase,
  removeFromCart,
} from 'reducers/cart/actionCreators';
import { Link } from 'react-router-dom';

const ControllerQuantityModal = ({
  product,
  dispatch,
  setShowModal,
  cart,
  attrSelected,
  setAttrSelected,
  productInCart,
}) => {
  const {
    Name,
    ErpCode,
    IsVendor,
    Attr,
    Image,
    LastBuyPrice,
    SellPrice,
    MainGroupName,
    UnitName,
    UnitFew,
    LimitOrder,
    MainGroupErpCode,
    MinUnitFew,
  } = product;

  return (
    <div className="relative flex flex-col rounded-2xl bg-clip-border overflow-hidden text-gray-700 shadow-none bg-white max-w-lg w-full">
      <div className="px-4 py-2 flex items-center justify-end">
        <button
          onClick={() => setShowModal(false)}
          className="hover:bg-slate-200 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
          </svg>
        </button>
      </div>
      <div className="w-full border-b">
        <div className="flex flex-col sm:flex-row items-center gap-2 justify-between px-5 pb-2">
          <div className="flex flex-col justify-center items-center sm:items-start">
            <div className="h-24 w-24 mr-2 mb-2">
              <img
                className="object-contain"
                src={Image}
                alt={Name}
              />
            </div>
            <p className="text-sm font-bold">{Name}</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm flex justify-center sm:justify-end font-bold mr-auto">
              <div
                className={` relative ${
                  SellPrice !== LastBuyPrice
                    ? 'opacity-30  before:absolute whitespace-nowrap before:w-full before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
                    : 'opacity-100 text-black'
                }`}
              >
                <div>
                  <span className="whitespace-nowrap ml-1">
                    {SellPrice?.toLocaleString()}
                  </span>
                  تومان
                </div>
              </div>
              {SellPrice !== LastBuyPrice && (
                <div className="mr-4 text-base text-rose-500 whitespace-nowrap">
                  <span>{LastBuyPrice?.toLocaleString()}</span>
                  تومان
                </div>
              )}
            </div>
            <p className="text-xs text-left flex items-center justify-center sm:justify-end text-slate-400 mt-2">
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
          </div>
        </div>
      </div>
      {!!Attr.length && (
        <div className="p-4">
          <ul className="flex gap-2">
            {Attr.map((productAttr, index) => (

              <li
                key={index}
                className={`flex rounded-md p-2 ${
                  productAttr === attrSelected
                    ? 'items-center border-2 border-sky-500 bg-sky-100/70'
                    : 'bg-gray-50/40 border border-gray-200'
                }`}
              >
                {console.log(productAttr)}
                <svg
                  className="w-4 h-4 inline-flex ml-1 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                </svg>
                <button
                  onClick={() => setAttrSelected(productAttr)}
                  className="text-sm text-slate-800 font-semibold px-2 py-1 mr-auto"
                >
                  {productAttr}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between border-t p-5">
        <p className="text-gray-600 font-semibold text-sm">
          جمع کل :
        </p>
        <div className="flex gap-2 mr-4">
          <div className="text-sm font-bold">
            { ( ( (Number(LastBuyPrice)* productInCart?.quantity) / 1 ) || 0).toLocaleString()}
            <span className="mr-1">تومان</span>
          </div>
        </div>
      </div>
      <div>
        {!!productInCart ? (
          <div className="flex items-center px-4 py-2 bg-slate-100">
            <div className="items-center justify-center w-1/2 flex p-2 ">
              {productInCart?.quantity === Number(LimitOrder) ? (
                <div className="group relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
                  </svg>
                  <div
                    id="popover-default"
                    role="tooltip"
                    class="absolute z-10 -right-2 invisible opacity-0 inline-block mb-1 bottom-full w-64 text-xs text-gray-600 font-medium transition-opacity duration-300 bg-white border border-gray-200 rounded-md shadow-sm  group-hover:visible group-hover:opacity-100"
                  >
                    <div class="px-3 py-2">
                      <p className="leading-6">
                        حداکثر مقدار سفارش برای این محصول
                        {LimitOrder} {UnitName} میباشد.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      increase(
                        productInCart.cartId,
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
              )}
              <p className="mx-6 text-center">
                <span className="block font-bold">
                  {productInCart?.quantity}
                </span>
                <span className="text-xs text-slate-400">
                  {UnitName}
                </span>
              </p>
              {productInCart?.quantity === Number(MinUnitFew) ? (
                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        productInCart.cartId,
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
                    className="fill-zinc-400 hover:fill-rose-500 transition-all duration-300"
                  >
                    <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                  </svg>
                </button>
              ) : (
                <div>
                  <button
                    onClick={() =>
                      dispatch(
                        decrease(
                          productInCart.cartId,
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
                </div>
              )}
            </div>

            <div className="pr-2 border-r border-r-slate-200 text-center w-1/2">
              <p className="text-sm">درسبد شما</p>
              <small className="text-xs text-zinc-400">
                مشاهده &zwnj;
                <Link to="/checkout/cart" className="text-sky-500">
                  سبد خرید
                </Link>
              </small>
            </div>
          </div>
        ) : (
          <button
            onClick={() =>
              dispatch(
                addToCart(
                  { ...product, attrSelected },
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
            className="w-full font-semibold bg-rose-500 text-white text-sm py-6 rounded-b-2xl hover:bg-rose-600 transition-all duration-300"
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
};

ControllerQuantityModal.propTypes = {};

export default ControllerQuantityModal;
