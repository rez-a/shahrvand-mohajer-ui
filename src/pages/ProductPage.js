import React from 'react';
import product1 from 'assets/images/products/products1.jpg';
import storeLogo from 'assets/images/store-logo.png';
import TitleIcon from 'components/shared/TitleIcon';
import SlideProduct from 'components/shared/SlideProduct';
import ImageZoom from 'components/productPage/ImageZoom';
import Breadcrumb from 'components/Breadcrumb';

const ProductPage = () => {
  return (
    <>
      <div className="flex items-start gap-6">
        <div className="w-72 max-h-96">
          <ImageZoom />
        </div>
        <div className="grow">
          <h2 className="font-bold py-4 border-b">
            گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو سیم کارت
            ظرفیت 128گیگابایت
          </h2>
          <div className="flex items-start justify-between my-4">
            <div>
              <h4 className="flex">
                <TitleIcon bg="bg-zinc-500" />
                <span className="mr-2 text-zinc-600 font-semibold text-sm">
                  ویژگی های محصول
                </span>
              </h4>
              <ul className="text-xs space-y-2 mt-3">
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی یک :
                  </span>
                  <span className="text-zinc-400 mr-2">ویژگی یک</span>
                </li>
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی دو :
                  </span>
                  <span className="text-zinc-400 mr-2">ویژگی دو</span>
                </li>
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی سه :
                  </span>
                  <span className="text-zinc-400 mr-2">ویژگی سه</span>
                </li>
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی چهار :
                  </span>
                  <span className="text-zinc-400 mr-2">
                    ویژگی چهار
                  </span>
                </li>
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی پنج :
                  </span>
                  <span className="text-zinc-400 mr-2">
                    ویژگی پنج
                  </span>
                </li>
                <li className="mr-2">
                  <span className="text-zinc-500 relative pr-4 font-semibold before:w-2 before:h-2 before:bg-zinc-500 before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:absolute">
                    ویژگی شش :
                  </span>
                  <span className="text-zinc-400 mr-2">ویژگی شش</span>
                </li>
              </ul>
              <div className="flex items-center max-w-[20rem] mx-auto my-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="35"
                  height="35"
                  className="fill-rose-500"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm4.838-6.879L8.818 9.646l-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z" />
                </svg>
                <p className="text-sm mr-2">
                  بیش از ۴۳۰ نفر از این محصول بازدید کرده اند
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50/50 border rounded p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6">
                    <img
                      src={storeLogo}
                      alt="test"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm mr-2 text-zinc-700">
                    فروشگاه قاصدک
                  </p>
                </div>
                <p className="flex items-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    className="fill-sky-500"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" />
                  </svg>
                  <span className="text-sm mr-2 text-zinc-700">
                    موجود در انبار
                  </span>
                </p>
                <p className="flex items-center flex-row-reverse mt-4 mb-2">
                  <span className="bg-rose-500 p-2 py-1 rounded-full text-white text-sm font-semibold">
                    5%
                  </span>
                  <span className="text-gray-400 relative before:absolute before:w-[110%] before:h-[0.5px] before:bg-gray-400 before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 ml-3 ">
                    4,900,000
                  </span>
                </p>
                <p className="text-rose-500 text-left mb-4">
                  <span className="font-bold text-2xl ml-3">
                    4,655,000
                  </span>
                  <span className="text-sm">تومان</span>
                </p>
                <small>321,600 تومان تخفیف کسر گردیده است.</small>
                <button className="w-full bg-rose-500 text-white text-lg p-3 rounded mt-2 hover:bg-rose-600">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideProduct title="سایر محصولات فروشگاه قاصدک" />
    </>
  );
};

export default ProductPage;
