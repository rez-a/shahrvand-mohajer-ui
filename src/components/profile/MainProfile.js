import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import useSWR from 'swr';
import { fetchWithToken } from 'services/swr/fetchWithToken';
import { ORDERS, PROFILE } from 'services/endPoints';
import Spinner from 'components/shared/Spinner';
import { postWithToken } from 'services/swr/postWithToken';
import TableLoaded from 'components/shared/TableLoaded';

const MainProfile = (props) => {
  const { data: user } = useSWR(PROFILE, postWithToken);
  const { data: orders } = useSWR(ORDERS, fetchWithToken);

  console.log(orders);
  return (
    <div className="grid col-span-5 gap-y-4">
      <Card title="اطلاعات شخصی">
        {!user ? (
          <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md grid place-items-center">
            <Spinner width="w-8" height="h-8" />
          </div>
        ) : (
          <div>
            <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md">
              <div className=" flex items-center justify-between">
                <p className=" text-slate-700">
                  نام کاربری :
                  <span className="text-black font-bold mr-1">
                    {user.name}
                  </span>
                </p>
                <p className=" text-slate-700">
                  شماره همراه تلفن :
                  <span className="text-black font-bold mr-1">
                    {user.mobile}
                  </span>
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className=" text-slate-700">
                  شماره ثابت :
                  <span className="text-black font-bold mr-1">
                    {user.tel}
                  </span>
                </p>
                <a
                  href="#"
                  className="text-rose-500 text-sm underline decoration-dotted"
                >
                  ویرایش اطلاعات
                </a>
              </div>
            </div>
          </div>
        )}
      </Card>
      <Card title="آخرین سفارش ها">
        {!orders ? (
          <TableLoaded count={3} />
        ) : (
          <div>
            <div class="relative overflow-x-auto border border-gray-100">
              <table class="w-full text-sm text-right text-gray-500 ">
                <thead class="text-sm text-gray-700  bg-gray-100">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      #
                    </th>
                    <th scope="col" class="px-6 py-3">
                      شماره سفارش
                    </th>
                    <th scope="col" class="px-6 py-3">
                      تاریخ سفارش
                    </th>
                    <th scope="col" class="px-6 py-3">
                      مبلغ سفارش
                    </th>
                    <th scope="col" class="px-6 py-3">
                      وضعیت سفارش
                    </th>
                    <th scope="col" class="px-6 py-3">
                      جزییات سفارش
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.splice(0, 3).map((order, index) => (
                    <tr
                      key={order.Id}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600"
                    >
                      <td class="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {order.Code}
                      </th>
                      <td class="px-6 py-4">{order.CreatedAt}</td>
                      <td class="px-6 py-4 text-black font-bold">
                        {Number(order.TotalPrice).toLocaleString()}
                        <small
                          className="text-slate-700 font-light mr-1
                    "
                        >
                          تومان
                        </small>
                      </td>
                      <td class="px-6 py-4 ">
                        <span
                          className={` font-bold border text-xs  p-2  rounded-md ${
                            order.Status === 'Completed'
                              ? 'bg-green-50 border-green-300 text-green-500 '
                              : 'bg-rose-50 border-rose-300 text-rose-500'
                          }`}
                        >
                          {order.Status === 'Completed'
                            ? 'پرداخت شده'
                            : 'پرداخت نشده'}
                        </span>
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium flex items-center text-xs "
                        >
                          <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70">
                            مشاهده جزییات
                          </span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              className="text-slate-700 text-sm w-full bg-gray-50 block hover:opacity-70 text-center py-4 font-semibold rounded-md"
              href="#"
            >
              مشاهده لیست سفارش ها
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline fill-current mr-3"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </a>
          </div>
        )}
      </Card>
      <Card title="آخرین پرداخت ها">
        <div>
          <div class="relative overflow-x-auto border border-gray-100">
            <table class="w-full text-sm text-right text-gray-500 ">
              <thead class="text-sm text-gray-700  bg-gray-100">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    شماره پرداخت
                  </th>
                  <th scope="col" class="px-6 py-3">
                    تاریخ پرداخت
                  </th>
                  <th scope="col" class="px-6 py-3">
                    مبلغ پرداختی
                  </th>
                  <th scope="col" class="px-6 py-3">
                    وضعیت پرداخت
                  </th>
                  <th scope="col" class="px-6 py-3">
                    جزییات پرداخت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">1</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SDGASDGSDGSG
                  </th>
                  <td class="px-6 py-4">1401/05/09</td>
                  <td class="px-6 py-4 text-black font-bold">
                    250,000
                    <small
                      className="text-slate-700 font-light mr-1
                    "
                    >
                      تومان
                    </small>
                  </td>
                  <td class="px-6 py-4 ">
                    <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                      ناموفق
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium flex items-center text-xs "
                    >
                      <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70">
                        مشاهده جزییات
                      </span>
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">2</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SDGASDGSDGSG
                  </th>
                  <td class="px-6 py-4">1401/05/09</td>
                  <td class="px-6 py-4 text-black font-bold">
                    250,000
                    <small
                      className="text-slate-700 font-light mr-1
                    "
                    >
                      تومان
                    </small>
                  </td>
                  <td class="px-6 py-4 ">
                    <span className="bg-green-50 font-bold border text-xs border-green-300 p-2 text-green-500 rounded-md ">
                      موفق
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium flex items-center text-xs "
                    >
                      <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70">
                        مشاهده جزییات
                      </span>
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">3</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SDGASDGSDGSG
                  </th>
                  <td class="px-6 py-4">1401/05/09</td>
                  <td class="px-6 py-4 text-black font-bold">
                    250,000
                    <small
                      className="text-slate-700 font-light mr-1
                    "
                    >
                      تومان
                    </small>
                  </td>
                  <td class="px-6 py-4 ">
                    <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                      ناموفق
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium flex items-center text-xs "
                    >
                      <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70">
                        مشاهده جزییات
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            className="text-slate-700 text-sm w-full bg-gray-50 block hover:opacity-70 text-center py-4 font-semibold rounded-md"
            href="#"
          >
            مشاهده لیست پرداخت ها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="inline fill-current mr-3"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
          </a>
        </div>
      </Card>
    </div>
  );
};

MainProfile.propTypes = {};

export default MainProfile;
