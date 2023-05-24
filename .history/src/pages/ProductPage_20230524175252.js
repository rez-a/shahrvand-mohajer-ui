import React from 'react';
import TitleIcon from 'components/shared/TitleIcon';
import ImageZoom from 'components/productPage/ImageZoom';
import { PRODUCT } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoadingContext } from 'contexts/LoadingProvider';
import ProductRelated from 'components/productPage/ProductRelated';
import { CartContext } from 'contexts/CartProvider';
import { useState } from 'react';
import useProductInCart from 'hooks/useProductInCart';
import ModalLayout from 'components/shared/modal/ModalLayout';
import ControllerQuantityModal from 'components/shared/modal/ControllerQuantityModal';
import md5 from 'md5-hash';
import Loading from 'components/shared/Loading';
import Breadcrumb from 'components/Breadcrumb';
import queryString from 'query-string';
import { addToCart } from 'reducers/cart/actionCreators';

const ProductPage = () => {
  const { erpCode } = useParams();
  const { setLoader } = useContext(LoadingContext);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const { data: product, isLoading } = useSWR(
    `${PRODUCT}/${erpCode}`,
    fetcher
  );

  const {
    Name,
    VisitCount,
    IsVendor,
    Attr,
    Few,
    Image,
    LastBuyPrice,
    SellPrice,
    MainGroupName,
    SideGroupName,
    SideGroupErpCode,
    ErpCode,
    MainGroupErpCode,
  } = !!product?.data && product?.data;

  const [attrSelected, setAttrSelected] = useState(Attr?.[0]);
  useEffect(() => {
    setLoader(isLoading);
  }, [isLoading]);
  const [showModal, setShowModal] = useState(false);

  const discount = Math.floor(
    (SellPrice - LastBuyPrice) / (LastBuyPrice / 100)
  );

  const { productInCart } = useProductInCart(
    cart,
    md5(`${ErpCode}${attrSelected}`),
    IsVendor ? MainGroupErpCode : 'SHAHRVAND'
  );

  const handleShowModal = () => {
    dispatch(
      addToCart(
        { ...product?.data, attrSelected },
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
      <Breadcrumb
        links={[
          { title: 'دسته بندی ها', toLink: '/products' },
          {
            title: MainGroupName,
            toLink: `/products/${MainGroupErpCode}`,
          },
          {
            title: SideGroupName,
            toLink: `/products/${MainGroupErpCode}?${queryString.stringify(
              {
                subcategory: [SideGroupErpCode],
              },
              { arrayFormat: 'bracket' }
            )}`,
          },
          { title: Name },
        ]}
      />
      <div className="min-h-screen mx-4 2xl:mx-0">
        {!!product?.data ? (
          <>
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-white p-2  md:p-4 rounded-md border border-gray-100">
              <div className="w-72 max-h-96 hidden lg:block overflow-hidden">
                <ImageZoom image={Image} alt={Name} />
              </div>
              <div className="sm:w-1/2 w-40 max-h-40 block lg:hidden mx-auto">
                <img src={Image} alt={Name} />
              </div>
              <div className="grow w-full sm:w-1/2">
                <h2 className="font-bold py-2 border-b">{Name}</h2>
                <div className="flex flex-col lg:flex-row items-start justify-between my-4">
                  <div>
                    {!!Attr.length && (
                      <>
                        <h4 className="flex">
                          <TitleIcon bg="bg-zinc-500" />
                          <span className="mr-2 text-zinc-600 font-semibold text-sm">
                            انواع محصول
                          </span>
                        </h4>

                        <ul className="text-xs space-y-2 mt-2">
                          {Attr.map((atr, index) => (
                            <li key={index} className="mr-2">
                              <span
                                onClick={() => setAttrSelected(atr)}
                                className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute"
                              >
                                {atr}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <div className="flex items-center max-w-[20rem] mx-auto my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={35}
                        height={35}
                        className="fill-rose-500"
                      >
                        <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM12.0178 14.6997L15.3765 11.341C16.2552 10.4623 16.2552 9.03769 15.3765 8.15901C14.4978 7.28033 13.0732 7.28033 12.1945 8.15901L12.0178 8.33579L11.841 8.15901C10.9623 7.28033 9.53769 7.28033 8.65901 8.15901C7.78033 9.03769 7.78033 10.4623 8.65901 11.341L12.0178 14.6997Z"></path>
                      </svg>
                      <p className="text-sm mr-2">
                        بیش از {VisitCount} نفر از این محصول بازدید
                        کرده اند
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 xl:w-1/3">
                    <div className="bg-white shadow-xl rounded-lg p-4 w-full">
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
                          {IsVendor
                            ? MainGroupName
                            : 'فروشگاه شهروند'}
                        </p>
                      </div>
                      <p className="flex items-center my-2">
                        <div className="w-6 h-6">
                          {Number(Few) ? (
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
                          {Number(Few) ? 'موجود در انبار' : 'ناموجود'}
                        </span>
                      </p>
                      {LastBuyPrice !== SellPrice ? (
                        <>
                          <p className="flex items-center flex-row-reverse mt-2 mb-2">
                            <span className="bg-rose-500 p-2 py-1 rounded-full text-white text-sm font-semibold">
                              %{discount}
                            </span>
                            <span className="text-gray-400 relative before:absolute before:w-[110%] before:h-[0.5px] before:bg-gray-400 before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 ml-3 ">
                              {SellPrice?.toLocaleString()}
                            </span>
                          </p>
                          <p className="text-rose-500 text-left mb-2">
                            <span className="font-bold text-2xl ml-3">
                              {LastBuyPrice?.toLocaleString()}
                            </span>
                            <span className="text-sm">تومان</span>
                          </p>
                        </>
                      ) : (
                        <p className="text-rose-500 text-left mb-2">
                          <span className="font-bold text-2xl ml-3">
                            {LastBuyPrice?.toLocaleString()}
                          </span>
                          <span className="text-sm">تومان</span>
                        </p>
                      )}
                      {LastBuyPrice !== SellPrice && (
                        <small>
                          {Number(
                            SellPrice - LastBuyPrice
                          ).toLocaleString()}
                          <span className="mr-1">
                            تومان تخفیف کسر گردیده است.
                          </span>
                        </small>
                      )}
                      {Number(Few) ? (
                        <button
                          onClick={handleShowModal}
                          className={`w-full  text-white text-lg p-3 rounded mt-2 transition-all duration-300 ${
                            !!productInCart
                              ? 'bg-sky-500 hover:bg-sky-600'
                              : 'bg-rose-500 hover:bg-rose-600 '
                          }`}
                        >
                          {!!productInCart
                            ? 'تغییر تعداد محصول'
                            : 'افزودن به سبد خرید'}
                        </button>
                      ) : (
                        <div className="w-full  text-white flex items-center justify-center text-lg p-3 rounded mt-2 bg-gray-200 ">
                          <span>افزودن به سبد خرید</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductRelated
              title={`سایر محصولات فروشگاه ${
                IsVendor ? MainGroupName : 'شهروند'
              }`}
              mainCategory={MainGroupErpCode}
            />
            <ModalLayout isShow={showModal} setShow={setShowModal}>
              <ControllerQuantityModal
                product={product?.data}
                productInCart={productInCart}
                dispatch={dispatch}
                setShowModal={setShowModal}
              />
            </ModalLayout>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ProductPage;
