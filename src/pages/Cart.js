import React, { useContext } from 'react';
import CartProductCard from 'components/productCard/CartProductCard';
import AccordionLayout from 'components/shared/accordion/AccordionLayout';
import AccordionItem from 'components/shared/accordion/AccordionItem';
import TitleAccordionItem from '../components/shared/accordion/TitleAccordionItem';
import ContentAccordionItem from 'components/shared/accordion/ContentAccordionItem';
import { CartContext } from 'contexts/CartProvider';
import emptyCart from 'assets/images/empty-cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import DeliveryProgress from 'components/DeliveryProgress';
import { UserContext } from 'contexts/UserProvider';

const Cart = ({
  data: {
    totalPrice,
    deliveryCost,
    min_order_amount,
    productsInCart,
    purchaseProfit,
  },
}) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const handleCheck = () => {
    user ? navigate('/checkout/shipping') : navigate('/login');
  };

  return !!cart.length ? (
    <main className="grid grid-cols-1 xl:grid-cols-7 gap-4 items-start mx-4 2xl:mx-0">
      <section className="col-span-1 xl:col-span-5 ">
        <DeliveryProgress
          deliveryCost={deliveryCost}
          totalPrice={Number(totalPrice)}
          minPrice={Number(min_order_amount)}
        />
        <div className="text-zinc-500 flex items-center border-b py-3 border-rose-500 mb-3">
          <p className=" flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-rose-400"
            >
              <path d="M5.50045 20.0005C6.32888 20.0005 7.00045 20.672 7.00045 21.5005C7.00045 22.3289 6.32888 23.0005 5.50045 23.0005C4.67203 23.0005 4.00045 22.3289 4.00045 21.5005C4.00045 20.672 4.67203 20.0005 5.50045 20.0005ZM18.5005 20.0005C19.3289 20.0005 20.0005 20.672 20.0005 21.5005C20.0005 22.3289 19.3289 23.0005 18.5005 23.0005C17.672 23.0005 17.0005 22.3289 17.0005 21.5005C17.0005 20.672 17.672 20.0005 18.5005 20.0005ZM2.17203 1.75781L5.99981 5.58581V16.9998L20.0005 17.0005V19.0005H5.00045C4.44817 19.0005 4.00045 18.5527 4.00045 18.0005L3.99981 6.41381L0.757812 3.17203L2.17203 1.75781ZM16.0005 3.00045C16.5527 3.00045 17.0005 3.44817 17.0005 4.00045L16.9998 5.99981L19.9936 6.00045C20.5497 6.00045 21.0005 6.45612 21.0005 6.99585V15.0051C21.0005 15.5548 20.5505 16.0005 19.9936 16.0005H8.0073C7.45123 16.0005 7.00045 15.5448 7.00045 15.0051V6.99585C7.00045 6.44611 7.4504 6.00045 8.0073 6.00045L10.9998 5.99981L11.0005 4.00045C11.0005 3.44817 11.4482 3.00045 12.0005 3.00045H16.0005ZM11.0005 8.00045H10.0005V14.0005H11.0005V8.00045ZM18.0005 8.00045H17.0005V14.0005H18.0005V8.00045ZM15.0005 5.00045H13.0005V6.00045H15.0005V5.00045Z"></path>
            </svg>
            <span className="mr-2">سبد خرید</span>
          </p>
          <p className="text-xs mr-1">({productsInCart} کالا)</p>
        </div>
        {cart.map((vendor, index) => (
          <AccordionLayout toggle={false}>
            <AccordionItem
              key={index}
              defaultClassName="mb-3 border rounded-md"
            >
              <TitleAccordionItem
                openClassName="border-b border-b-gray-100 bg-gray-50/50"
                defaultClassName="bg-white"
              >
                <div className=" p-4   flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-rose-500"
                      >
                        <path d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
                      </svg>
                    </div>
                    <p className="text-sm mr-2 text-zinc-700 flex items-center">
                      <span className="font-bold">
                        فروشگاه {vendor.vendorName}
                      </span>
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current"
                  >
                    <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                  </svg>
                </div>
              </TitleAccordionItem>
              <ContentAccordionItem
                closeClaseName="h-0"
                openClassName="lg:h-96 h-auto"
                defaultClassName="bg-white"
              >
                <div className="max-h-[20rem] overflow-y-auto p-0">
                  <ul className="mb-12 divide-y p-4 w-full">
                    {vendor.products.map((product) => (
                      <CartProductCard
                        dispatch={dispatch}
                        key={product.Id}
                        {...product}
                        cart={cart}
                      />
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-md flex flex-col lg:flex-row  justify-center lg:justify-between items-center relative top-2">
                  <p className="flex flex-col items-center mb-4 lg:flex-row lg:mb-0">
                    <span className="font-bold">
                      مبلغ کل ({vendor.products.length}کالا) :
                    </span>
                    <span className="opacity-60 mr-2">
                      {vendor.products
                        .reduce(
                          (total, product) =>
                            total +
                            (product.LastBuyPrice *
                              product.quantity) /
                              Number(product.UnitFew),
                          0
                        )
                        .toLocaleString()}
                      تومان
                    </span>
                  </p>
                </div>
              </ContentAccordionItem>
            </AccordionItem>
          </AccordionLayout>
        ))}
      </section>
      <aside className="bg-gray-50/50 border rounded-md border-gray-100 bg-white xl:col-span-2 p-3 xl:sticky top-24 mb-3">
        <p className="flex items-center justify-between mb-3">
          <span className="font-bold">
            مبلغ کل ({productsInCart}کالا)
          </span>
          <span className="opacity-60">
            {totalPrice.toLocaleString()} تومان
          </span>
        </p>
        <p className="flex items-center justify-between mb-3 text-sky-500">
          <span className="font-bold">سود شما از خرید</span>
          <span className="opacity-100">
            {purchaseProfit.toLocaleString()} تومان
          </span>
        </p>
        <p className="flex items-center justify-between mb-3 border-b pb-4">
          <span className="font-bold flex items-center">
            <span>هزینه پیک</span>
            <div className="relative group">
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
                class="absolute z-10 -left-2 invisible opacity-0 inline-block w-64 text-xs text-gray-600 font-medium transition-opacity duration-300 bg-white border border-gray-200 rounded-md shadow-sm  group-hover:visible group-hover:opacity-100"
              >
                <div class="px-3 py-2">
                  <p className="leading-6">
                    زمان تحویل کالا با ارسال رایگان حدودا یک ساعت و
                    ارسال فوری 30 دقیقه خواهد بود.
                  </p>
                </div>
              </div>
            </div>
          </span>
          <span className="opacity-60">
            {deliveryCost === 0 ? 'رایگان' : `${deliveryCost} تومان`}
          </span>
        </p>
        <p className="font-bold text-lg text-center mb-2">
          مبلغ قابل پرداخت :
        </p>
        <p className="font-bold text-2xl text-center text-rose-500 mb-4">
          <span>
            {(totalPrice + Number(deliveryCost)).toLocaleString()}
          </span>
          <span className="font-medium text-sm mr-2">تومان</span>
        </p>
        <button
          onClick={handleCheck}
          className="relative bg-rose-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group"
        >
          <span className="bg-rose-400 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-white"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
          </span>
          <span className="z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
            ادامه ثبت سفارش
          </span>
        </button>
        <p className=" text-zinc-400 text-xs mt-2">
          <div className="">
            کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت
            سفارش مراحل بعدی را تکمیل کنید.
            <div className="relative group inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-current inline"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
              </svg>
              <div
                id="popover-default"
                role="tooltip"
                class="absolute px-3 py-2 z-20 -left-2 invisible opacity-0 top-full my-1 inline-block w-64 text-xs text-gray-600 font-medium transition-opacity duration-300 bg-white border border-gray-200 rounded-md shadow-sm  group-hover:visible group-hover:opacity-100"
              >
                <p className="leading-6">
                  محصولات موجود در سبد خرید شما تنها در صورت ثبت و
                  پرداخت سفارش برای شما رزرو می‌شوند. در صورت عدم ثبت
                  سفارش، فروشگاه شهروند مهاجر هیچگونه مسئولیتی در قبال
                  تغییر قیمت یا موجودی این کالاها ندارد.
                </p>
              </div>
            </div>
          </div>
        </p>
      </aside>
    </main>
  ) : (
    <div className="text-center">
      <div className="max-w-sm mx-auto">
        <img src={emptyCart} alt="cart empty" />
      </div>
      <h2 className="text-black font-bold text-xl text-center">
        سبد خرید شما خالی است!!
      </h2>
      <Link
        to="/products"
        className="bg-rose-500/90 mt-4 flex group mx-auto items-center justify-center text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300"
      >
        بازگشت به فروشگاه
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-current mr-2 group-hover:-translate-x-2 transition-all duration-200"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default Cart;
