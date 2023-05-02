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
import { Link, useParams } from 'react-router-dom';
import { ORDER_DETAILS } from 'services/endPoints';
import { fetchWithToken } from 'services/swr/fetchWithToken';
import useSWR from 'swr';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserProvider';
import TableLoaded from 'components/shared/TableLoaded';

const OrderDetails = (props) => {
  const { orderId } = useParams();
  const { user } = useContext(UserContext);
  const { data: order } = useSWR(
    `${ORDER_DETAILS}/${orderId}`,
    fetchWithToken,
    {
      refreshInterval: false,
    }
  );
  console.log(order);
  return (
    <div className="grid col-span-5 gap-y-4">
      <Card title="جزییات سفارش">
        {!order ? (
          <TableLoaded count={7} />
        ) : (
          <>
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
                <p className="font-bold mb-2">
                  سفارش <span>{order.Code}</span>
                </p>
                <p className="text-xs text-zinc-400 font-light ">
                  ثبت شده در تاریخ <span>{order.CreatedAt}</span>
                </p>
              </div>
            </div>
            <div className="">
              <ul className="">
                <li className="flex items-center py-4 border-b px-7">
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      نام کاربری :
                    </p>
                    <p className="text-sm text-zinc-500">
                      {user.name}
                    </p>
                  </div>
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      شماره تماس :
                    </p>
                    <p className="text-sm text-zinc-500">
                      {user.mobile}
                    </p>
                  </div>
                </li>
                <li className="flex items-center py-4 border-b px-7">
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      نحوه ارسال :
                    </p>
                    <p className="text-sm text-zinc-500">
                      {order.ShippingMethod === 'FREE'
                        ? 'ارسال رایگان'
                        : 'ارسال فوری'}
                    </p>
                  </div>
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      نحوه پرداخت :
                    </p>
                    <p className="text-sm text-zinc-500">
                      پرداخت درب منزل
                    </p>
                  </div>
                </li>
                <li className="flex items-center py-4 px-7">
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      مبلغ سفارش :
                    </p>
                    <p className="text-sm text-zinc-500">
                      <span className="font-bold text-base">
                        {Number(order.TotalPrice).toLocaleString()}
                      </span>
                      <span className="text-xs mr-1">تومان</span>
                    </p>
                  </div>
                  <div className="space-y-2 w-1/2">
                    <p className="text-blue-700 font-bold">
                      وضعیت سفارش :
                    </p>
                    <p
                      className={`text-xs  inline-flex px-2 py-1 rounded-md  border  ${
                        order.Status === 'Completed'
                          ? 'border-green-300 text-green-500 bg-green-50'
                          : 'border-rose-300 text-rose-500 bg-rose-50'
                      }`}
                    >
                      {order.Status === 'Completed'
                        ? 'ثبت شده'
                        : 'ثبت نشده'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}
      </Card>
      {!!order && (
        <Card title="محصولات سفارش">
          <div className="mt-4 border-t">
            <div className="max-h-[40rem] h-full overflow-auto">
              <ul className="mb-12 divide-y col-span-3 p-4 border border-neutral-100">
                {order.items.map((product) => (
                  <ProfileProductCard key={product.Id} {...product} />
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

OrderDetails.propTypes = {};

export default OrderDetails;
