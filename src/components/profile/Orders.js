import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import Card from './Card';
import { Link } from 'react-router-dom';

const Orders = (props) => {
  return (
    <Card title="آخرین سفارش ها">
      <div class="relative ">
        <table class="w-full text-sm text-right text-gray-500">
          <thead class="text-gray-600  bg-gray-100 text-sm sticky top-0">
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
          <tbody className="max-h-80 overflow-y-auto h-80">
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-green-50 font-bold border text-xs border-green-300 p-2 text-green-500 rounded-md ">
                  پرداخت شده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">4</td>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">5</td>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">6</td>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">7</td>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:text-black hover:bg-gray-50/50 transition-all duration-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">8</td>
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
                  className="text-zinc-500 font-light mr-1
                    "
                >
                  تومان
                </small>
              </td>
              <td class="px-6 py-4 ">
                <span className="bg-rose-50 font-bold border text-xs border-rose-300 p-2 text-rose-500 rounded-md ">
                  پرداخت نشده
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium flex items-center text-xs "
                >
                  <Link
                    to="details/2"
                    className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70"
                  >
                    مشاهده جزییات
                  </Link>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

Orders.propTypes = {};

export default Orders;
