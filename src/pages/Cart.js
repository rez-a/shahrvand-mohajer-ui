import React from 'react';
import products from 'productsFake';
import storeLogo from 'assets/images/store-logo.png';
import CartProductCard from 'components/productCard/CartProductCard';
import AccordionLayout from 'components/shared/accordion/AccordionLayout';
import AccordionItem from 'components/shared/accordion/AccordionItem';
import TitleAccordionItem from '../components/shared/accordion/TitleAccordionItem';
import ContentAccordionItem from 'components/shared/accordion/ContentAccordionItem';

const Cart = () => {
  return (
    <main className="grid grid-cols-7 gap-4 items-start">
      <main className="col-span-5 ">
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
          <p className="text-xs mr-1">(2 کالا)</p>
        </div>
        <AccordionLayout>
          <AccordionItem defaultClassName="mb-3 border  rounded-md">
            <TitleAccordionItem openClassName="border-b border-b-gray-100">
              <div className="bg-gray-50/50 p-4  flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src={storeLogo}
                      alt="test"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm mr-2 text-zinc-700 flex items-center">
                    <span className="font-bold">فروشگاه قاصدک</span>
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
              openClassName="h-96"
            >
              <div className="h-[20rem] overflow-auto">
                <ul className="mb-12 divide-y col-span-3 p-4">
                  {products.slice(0, 2).map((product) => (
                    <CartProductCard key={product.id} {...product} />
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                <p className="flex items-center">
                  <span className="font-bold">مبلغ کل (2کالا) :</span>
                  <span className="opacity-60 mr-2">
                    16,879,000 تومان
                  </span>
                </p>
                <button className="bg-sky-500/90 text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
                  ثبت سفارش
                </button>
              </div>
            </ContentAccordionItem>
          </AccordionItem>
          <AccordionItem defaultClassName="mb-3 border  rounded-md">
            <TitleAccordionItem openClassName="border-b border-b-gray-100">
              <div className="bg-gray-50/50 p-4  flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src={storeLogo}
                      alt="test"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm mr-2 text-zinc-700 flex items-center">
                    <span className="font-bold">فروشگاه قاصدک</span>
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
            <ContentAccordionItem closeClaseName="h-0">
              <div className="h-[20rem] overflow-auto">
                <ul className="mb-12 divide-y col-span-3 p-4">
                  {products.slice(0, 2).map((product) => (
                    <CartProductCard key={product.id} {...product} />
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                <p className="flex items-center">
                  <span className="font-bold">مبلغ کل (2کالا) :</span>
                  <span className="opacity-60 mr-2">
                    16,879,000 تومان
                  </span>
                </p>
                <button className="bg-sky-500/90 text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
                  ثبت سفارش
                </button>
              </div>
            </ContentAccordionItem>
          </AccordionItem>
          <AccordionItem defaultClassName="mb-3 border  rounded-md">
            <TitleAccordionItem openClassName="border-b border-b-gray-100">
              <div className="bg-gray-50/50 p-4  flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src={storeLogo}
                      alt="test"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm mr-2 text-zinc-700 flex items-center">
                    <span className="font-bold">فروشگاه قاصدک</span>
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
            <ContentAccordionItem closeClaseName="h-0">
              <div className="h-[20rem] overflow-auto">
                <ul className="mb-12 divide-y col-span-3 p-4">
                  {products.slice(0, 2).map((product) => (
                    <CartProductCard key={product.id} {...product} />
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                <p className="flex items-center">
                  <span className="font-bold">مبلغ کل (2کالا) :</span>
                  <span className="opacity-60 mr-2">
                    16,879,000 تومان
                  </span>
                </p>
                <button className="bg-sky-500/90 text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
                  ثبت سفارش
                </button>
              </div>
            </ContentAccordionItem>
          </AccordionItem>
          <AccordionItem defaultClassName="mb-3 border  rounded-md">
            <TitleAccordionItem openClassName="border-b border-b-gray-100">
              <div className="bg-gray-50/50 p-4  flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src={storeLogo}
                      alt="test"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm mr-2 text-zinc-700 flex items-center">
                    <span className="font-bold">فروشگاه قاصدک</span>
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
            <ContentAccordionItem closeClaseName="h-0">
              <div className="h-[20rem] overflow-auto">
                <ul className="mb-12 divide-y col-span-3 p-4">
                  {products.slice(0, 2).map((product) => (
                    <CartProductCard key={product.id} {...product} />
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                <p className="flex items-center">
                  <span className="font-bold">مبلغ کل (2کالا) :</span>
                  <span className="opacity-60 mr-2">
                    16,879,000 تومان
                  </span>
                </p>
                <button className="bg-sky-500/90 text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
                  ثبت سفارش
                </button>
              </div>
            </ContentAccordionItem>
          </AccordionItem>
        </AccordionLayout>
      </main>
      <aside className="bg-gray-50/50 border rounded border-gray-100 col-span-2 p-3 sticky top-4 mb-3">
        <p className="flex items-center justify-between mb-3">
          <span className="font-bold">مبلغ کل (2کالا)</span>
          <span className="opacity-60">16,879,000 تومان</span>
        </p>
        <p className="flex items-center justify-between mb-3 text-sky-500">
          <span className="font-bold">سود شما از خرید</span>
          <span className="opacity-100">16,879,000 تومان</span>
        </p>
        <p className="flex items-center justify-between mb-3 border-b pb-4">
          <span className="font-bold flex items-center">
            <span>هزینه آدرس</span>
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
                    هزینه ارسال مرسولات می‌تواند وابسته به شهر و آدرس
                    گیرنده متفاوت باشد.
                  </p>
                </div>
              </div>
            </div>
          </span>
          <span className="opacity-60">وابسته به آدرس</span>
        </p>
        <p className="font-bold text-lg text-center mb-2">
          مبلغ قابل پرداخت :
        </p>
        <p className="font-bold text-2xl text-center text-rose-500 mb-4">
          <span>16,879,000</span>
          <span className="font-medium text-sm mr-2">تومان</span>
        </p>
        <button className="relative bg-rose-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group">
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
          <span className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            ادامه ثبت همه سفارش ها
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
  );
};

export default Cart;
