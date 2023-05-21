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
import { addToCart } from 'reducers/cart/actionCreators';

const ProductCartVertical = ({
  containerClassName = '',
  product,
}) => {
  const {
    Name,
    ErpCode,
    MainGroupErpCode,
    SideGroupName,
    SideGroupErpCode,
    SellPrice,
    LastBuyPrice,
    MainGroupName,
    Image,
    Id,
    IsVendor,
    Attr,
    Few,
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

  const handleShowModal = () => {
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
    );
    setShowModal(true);
  };

  return (
    <>
      <div className={` overflow-hidden group ${containerClassName}`}>
        <div className="p-2 md:px-4 flex items-center">
          <span
            className={`bg-rose-500 mr-auto text-xs text-white p-2 rounded-xl rounded-br-none font-bold ${
              SellPrice !== LastBuyPrice ? 'visible' : 'invisible'
            }`}
          >
            %{discount}
          </span>
        </div>
        <div className="w-40 md:w-full h-40 p-2 md:p-4 overflow-hidden mx-auto">
          <img className="object-contain" src={Image} alt={Name} />
        </div>
        {!!productInCart ? (
          <button
            onClick={() => setShowModal(true)}
            className="text-white  py-1.5 px-2 text-xs rounded-md mx-6 shadow-xl   transition-all duration-300 bg-yellow-400/90 hover:bg-yellow-400 shadow-sky-500/0  border-b-4 border-b-yellow-700"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-black/60"
              >
                <path d="M3.00488 3.00293H21.0049C21.5572 3.00293 22.0049 3.45064 22.0049 4.00293V20.0029C22.0049 20.5552 21.5572 21.0029 21.0049 21.0029H3.00488C2.4526 21.0029 2.00488 20.5552 2.00488 20.0029V4.00293C2.00488 3.45064 2.4526 3.00293 3.00488 3.00293ZM4.00488 5.00293V19.0029H20.0049V5.00293H4.00488ZM9.00488 11.0029H11.0049V13.0029H9.00488V15.0029H7.00488V13.0029H5.00488V11.0029H7.00488V9.00293H9.00488V11.0029ZM13.0049 11.0029H19.0049V13.0029H13.0049V11.0029Z"></path>
              </svg>
            </div>
          </button>
        ) : !!Number(Few) ? (
          <button
            onClick={handleShowModal}
            className="text-white  py-1.5 px-2 text-xs rounded-md mx-2 md:mx-6 shadow-xl   transition-all duration-300 bg-rose-400/90 hover:bg-rose-400 shadow-sky-500/0  border-b-4 border-b-rose-700"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </div>
          </button>
        ) : (
          <div className="flex">
            <p className="bg-red-100 text-red-800 text-xs mb-3   font-medium mr-2 py-1.5 px-2 mx-2 md:mx-6 rounded">
              ناموجود
            </p>
          </div>
        )}

        <div className="px-2 md:px-6 py-4">
          <Link
            to={`/product/${MainGroupErpCode}/${SideGroupErpCode}/${ErpCode}`}
            className="font-bold truncate block w-full text-rose-500/70 group-hover:text-rose-500/100 transition-all duration-200 text-base"
          >
            {Name}
          </Link>
        </div>
        <div className="px-2 md:px-6 pb-2">
          <Link
            to={`/products/${MainGroupErpCode}?${queryString.stringify(
              {
                subcategory: [SideGroupErpCode],
              },
              { arrayFormat: 'bracket' }
            )}`}
            className="inline-block bg-gray-200 max-w-full truncate rounded-full px-3 py-1 text-xs text-gray-700 opacity-75 hover:opacity-100 transition-all duration-200 cursor-pointer hover:underline"
          >
            #{SideGroupName}
          </Link>
        </div>
        <div className="text-sm px-2 md:px-6 font-bold">
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
            <span className="sm:mr-4 text-rose-500 whitespace-nowrap block sm:inline">
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
