import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { CartContext } from 'contexts/CartProvider';
import useProductInCart from 'hooks/useProductInCart';
import md5 from 'md5-hash';
import ModalLayout from 'components/shared/modal/ModalLayout';
import ControllerQuantityModal from 'components/shared/modal/ControllerQuantityModal';
import { addToCart } from 'reducers/cart/actionCreators';

const ProductCartHorizontal = ({
  product,
  containerClassName = '',
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
      <div class={`flex flex-col ${containerClassName}`}>
        <div className="flex bg-white rounded-md p-2">
          <div class="h-24 w-1/4 text-center overflow-hidden">
            <img src={Image} alt={Name} />
          </div>
          <div class="pr-2 w-3/4 bg-white flex flex-col justify-between leading-normal grow">
            <Link
              to={`/product/${MainGroupErpCode}/${SideGroupErpCode}/${ErpCode}`}
              class="text-gray-900 w-5/6 truncate font-bold whitespace-nowrap hover:text-rose-500 transition-all duration-200 mb-2"
            >
              {Name}
            </Link>
            <div className="flex items-center justify-between">
              <Link
                to={`/products/${MainGroupErpCode}?${queryString.stringify(
                  {
                    subcategory: [SideGroupErpCode],
                  },
                  { arrayFormat: 'bracket' }
                )}`}
                class="inline-block max-w-[50%] truncate bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 opacity-75 hover:opacity-100 transition-all duration-200 cursor-pointer hover:underline"
              >
                #{SideGroupName}
              </Link>
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
              ) : !!Few ? (
                <button
                  onClick={handleShowModal}
                  className="text-white  py-1.5 px-2 text-xs rounded-md mx-6 shadow-xl   transition-all duration-300 bg-rose-400/90 hover:bg-rose-400 shadow-sky-500/0  border-b-4 border-b-rose-700 "
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
                  <p className="bg-red-100 text-red-800 text-xs mb-3   font-medium mr-2 py-1.5 px-2 mx-2 md:mx-6 rounded dark:bg-red-900 dark:text-red-300">
                    ناموجود
                  </p>
                </div>
              )}
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
