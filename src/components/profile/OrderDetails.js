import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import AccordionLayout from 'components/shared/accordion/AccordionLayout';
import AccordionItem from 'components/shared/accordion/AccordionItem';
import TitleAccordionItem from 'components/shared/accordion/TitleAccordionItem';
import ContentAccordionItem from 'components/shared/accordion/ContentAccordionItem';
import ProfileProductCard from 'components/productCard/ProfileProductCard';
import products from 'productsFake';
import storeLogo from 'assets/images/store-logo.png';
import { Link } from 'react-router-dom';

const OrderDetails = (props) => {
  return (
    <Card title="جزییات سفارش">
      <div className="p-4 flex items-center space-x-4 space-x-reverse bg-gray-100/70 ">
        <Link to="/profile/orders" className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text-zinc-400 font-light text-xs">
            بازگشت
          </span>
        </Link>
        <div className="pr-6 border-r">
          <p className="font-bold mb-2">سفارش SDGASDGSDGSG</p>
          <p className="text-xs text-zinc-400 font-light ">
            ثبت شده در تاریخ 1401/05/09
          </p>
        </div>
      </div>
      <div className="p-4">
        <ul>
          <li className="flex items-center py-4 border-b">
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">نام کاربری :</p>
              <p className="text-sm text-zinc-500">جلال بهرامی راد</p>
            </div>
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">شماره تماس :</p>
              <p className="text-sm text-zinc-500">09302582971</p>
            </div>
          </li>
          <li className="flex items-center py-4 border-b">
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">نحوه ارسال :</p>
              <p className="text-sm text-zinc-500">ارسال رایگان</p>
            </div>
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">نحوه پرداخت :</p>
              <p className="text-sm text-zinc-500">پرداخت درب منزل</p>
            </div>
          </li>
          <li className="flex items-center py-4 border-b">
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">مبلغ سفارش :</p>
              <p className="text-sm text-zinc-500">
                <span className="font-bold text-base">235,000</span>
                <span className="text-xs mr-1">تومان</span>
              </p>
            </div>
            <div className="space-y-2 w-1/2">
              <p className="text-sky-500 font-bold">وضعیت سفارش :</p>
              <p className="text-xs bg-rose-50 inline-flex px-2 py-1 rounded-md text-rose-500 border border-rose-300">
                پرداخت نشده
              </p>
            </div>
          </li>
        </ul>
        <div className="mt-4">
          <h2 className="font-bold mb-3">محصولات :</h2>
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
                defaultClassName="relative"
              >
                <div className="h-[20rem] overflow-auto">
                  <ul className="mb-12 divide-y col-span-3 p-4">
                    {products.slice(0, 2).map((product) => (
                      <ProfileProductCard
                        key={product.id}
                        {...product}
                      />
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 flex justify-between absolute bottom-0 w-full">
                  <p className="flex items-center">
                    <span className="font-bold">
                      مبلغ کل (2کالا) :
                    </span>
                    <span className="opacity-60 mr-2">
                      16,879,000 تومان
                    </span>
                  </p>
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
                      <ProfileProductCard
                        key={product.id}
                        {...product}
                      />
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                  <p className="flex items-center">
                    <span className="font-bold">
                      مبلغ کل (2کالا) :
                    </span>
                    <span className="opacity-60 mr-2">
                      16,879,000 تومان
                    </span>
                  </p>
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
                      <ProfileProductCard
                        key={product.id}
                        {...product}
                      />
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                  <p className="flex items-center">
                    <span className="font-bold">
                      مبلغ کل (2کالا) :
                    </span>
                    <span className="opacity-60 mr-2">
                      16,879,000 تومان
                    </span>
                  </p>
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
                      <ProfileProductCard
                        key={product.id}
                        {...product}
                      />
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-md flex justify-between relative -top-2">
                  <p className="flex items-center">
                    <span className="font-bold">
                      مبلغ کل (2کالا) :
                    </span>
                    <span className="opacity-60 mr-2">
                      16,879,000 تومان
                    </span>
                  </p>
                </div>
              </ContentAccordionItem>
            </AccordionItem>
          </AccordionLayout>
        </div>
      </div>
    </Card>
  );
};

OrderDetails.propTypes = {};

export default OrderDetails;
