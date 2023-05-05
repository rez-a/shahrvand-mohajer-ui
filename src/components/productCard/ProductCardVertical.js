import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useContext } from 'react';
import { CartContext } from 'contexts/CartProvider';
import { useState } from 'react';
import ModalLayout from 'components/shared/modal/ModalLayout';
import useProductInCart from 'hooks/useProductInCart';
import ControllerQuantityModal from 'components/shared/modal/ControllerQuantityModal';
import md5 from 'md5-hash';

const ProductCartVertical = ({ containerClassName, product }) => {
  const {
    Name,
    ErpCode,
    MainGroupErpCode,
    SideGroupName,
    SideGroupErpCode,
    SellPrice,
    LastBuyPrice,
    Image,
    Id,
    IsVendor,
    Attr,
  } = product;
  const discount = Math.floor(
    (SellPrice - LastBuyPrice) / (LastBuyPrice / 100)
  );
  const [attrSelected, setAttrSelected] = useState(Attr[0]);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const { productInCart } = useProductInCart(
    cart,
    md5(`${ErpCode}${attrSelected}`),
    IsVendor ? MainGroupErpCode : 'SHAHRVAND'
  );

  return (
    <>
      <div class={` overflow-hidden group ${containerClassName}`}>
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
        <button
          onClick={() => setShowModal(true)}
          className={` text-white  py-1 px-2 text-xs rounded-md mx-6 shadow-lg   transition-all duration-300 ${
            !!productInCart
              ? 'bg-sky-500/90 hover:bg-sky-500 shadow-sky-500/0'
              : 'bg-rose-500/90 hover:bg-rose-500 shadow-rose-500/0'
          }`}
        >
          {!!productInCart
            ? 'تغییر تعداد محصول'
            : 'افزودن به سبد خرید'}
        </button>
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
              <span className="ml-1">
                {LastBuyPrice?.toLocaleString()}
              </span>
              تومان
            </span>
          )}
        </div>
      </div>
      <ModalLayout isShow={showModal} setShow={setShowModal}>
        <ControllerQuantityModal
          product={product}
          productInCart={productInCart}
          dispatch={dispatch}
          setShowModal={setShowModal}
          attrSelecte={attrSelected}
          setAttrSelected={setAttrSelected}
          cart={cart}
        />
      </ModalLayout>
    </>
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
