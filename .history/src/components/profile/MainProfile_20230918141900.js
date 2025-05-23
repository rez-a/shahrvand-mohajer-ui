import React, { useContext } from 'react';
import Card from './Card';
import useSWR from 'swr';
import { ORDERS, PAYMENTS, PROFILE } from 'services/endPoints';
import Spinner from 'components/shared/Spinner';
import TableLoaded from 'components/shared/TableLoaded';
import EmptyDataProfile from './EmptyData';
import { Link } from 'react-router-dom';
import dispatcher from 'services/dispatcher';
import { fetcher } from 'services/swr/fetcher';
import { HOME_DELIVERY } from 'constants/paymentMethod';
import { UserContext } from 'contexts/UserProvider';

const MainProfile = (props) => {
  const {
    user: { score_order },
  } = useContext(UserContext);
  const { data: user } = useSWR(PROFILE, dispatcher);
  const { name, mobile, tel } = !!user && user.data;

  const { data: orders } = useSWR(ORDERS, fetcher);
  const { data: payments } = useSWR(PAYMENTS, fetcher);

  return (
    <>
      <Card title="اطلاعات شخصی">
        {!user ? (
          <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md grid place-items-center">
            <Spinner width="w-8" height="h-8" />
          </div>
        ) : (
          <div>
            <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md">
              <div className=" flex flex-col items-start md:flex-row md:items-center gap-3 justify-between">
                <p className=" text-slate-700">
                  نام کاربری :
                  <span className="text-black font-bold mr-1">
                    {!!name ? (
                      name
                    ) : (
                      <Link
                        to="/profile/edit"
                        className="text-rose-500 text-xs underline decoration-dotted"
                      >
                        نام کاربری خود را تعیین کنید
                      </Link>
                    )}
                  </span>
                </p>
                <p className=" text-slate-700">
                  شماره همراه :
                  <span className="text-black font-bold mr-1">
                    {mobile}
                  </span>
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center items-start justify-between">
                <p className=" text-slate-700">
                  شماره ثابت :
                  <span className="text-black font-bold mr-1">
                    {!!tel ? (
                      tel
                    ) : (
                      <Link
                        to="/profile/edit"
                        className="text-rose-500 text-xs underline decoration-dotted"
                      >
                        تلفن ثابت خود را تعیین کنید
                      </Link>
                    )}
                  </span>
                </p>
                <p className=" text-slate-700">
                  امتیاز شما :
                  <span className="text-black font-bold mr-1">
                    {score_order}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card title="آخرین سفارش ها">
        {!orders ? (
          <TableLoaded count={3} />
        ) : !!orders.data.length ? (
          <div>
            <div className="relative overflow-x-auto border border-gray-100">
              <table className="w-full text-sm text-center text-gray-500 ">
                <thead className="text-sm whitespace-nowrap text-gray-700  bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      شماره سفارش
                    </th>
                    <th scope="col" className="px-6 py-3">
                      تاریخ سفارش
                    </th>
                    <th scope="col" className="px-6 py-3">
                      مبلغ سفارش
                    </th>
                    <th scope="col" className="px-6 py-3">
                      وضعیت سفارش
                    </th>
                    <th scope="col" className="px-6 py-3">
                      نحوه پرداخت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      امتیاز سفارش
                    </th>
                    <th scope="col" className="px-6 py-3">
                      جزییات سفارش
                    </th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {orders.data.slice(0, 3).map((order, index) => (
                    <tr
                      key={order.Id}
                      className="bg-white border-b  hover:text-black hover:bg-gray-50/50 transition-all duration-200"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
                      >
                        {order.Code}
                      </th>
                      <td className="px-6 py-4">{order.CreatedAt}</td>
                      <td className="px-6 py-4 text-black font-bold">
                        {Number(order.TotalPrice).toLocaleString()}
                        <small
                          className="text-slate-700 font-light mr-1
                    "
                        >
                          تومان
                        </small>
                      </td>
                      <td className="px-6 py-4 ">
                        <span
                          className={` font-bold border text-xs  p-2  rounded-md ${
                            !Number(order.Cancelled)
                              ? 'bg-green-50 border-green-300 text-green-500 '
                              : 'bg-rose-50 border-rose-300 text-rose-500'
                          }`}
                        >
                          {Number(order.Cancelled)
                            ? 'لغو شده'
                            : 'ثبت شده'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold border text-xs  p-2  rounded-md bg-neutral-50 border-neutral-300 text-neutral-500">
                          {order.PaymentMethod === HOME_DELIVERY
                            ? 'درب منزل'
                            : 'کیف پول'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className=" p-2 rounded-md  text-black font-bold">
                          {order.TotalScoresOrder}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/profile/orders/details/${order.Id}`}
                          className="font-medium flex items-center text-xs "
                        >
                          <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70">
                            مشاهده جزییات
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              className="text-slate-700 text-sm w-full bg-gray-50 block hover:opacity-70 text-center py-4 font-semibold rounded-md"
              to="/profile/orders"
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
            </Link>
          </div>
        ) : (
          <EmptyDataProfile
            text="شما هیچ سفارشی ندارید"
            textclassName="text-rose-500 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 731.67 511.12 "
              className="w-40 h-40"
            >
              <path
                d="m0,509.7c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H1.19c-.66,0-1.19.53-1.19,1.19Z"
                fill="#3f3d58"
              />
              <polygon
                points="440.61 79.12 466.22 87.54 466.22 50.67 442.98 50.67 440.61 79.12"
                fill="#f8a8ab"
              />
              <circle
                cx="463.05"
                cy="35.35"
                r="25.52"
                fill="#f8a8ab"
              />
              <path
                d="m456.55,37.35l3.52,4.27,6.36-11.14s8.12.42,8.12-5.61,7.45-6.2,7.45-6.2c0,0,10.55-18.42-11.3-13.57,0,0-15.16-10.38-22.69-1.51,0,0-23.11,11.64-16.5,31.9l10.99,20.89,2.49-4.73s-1.51-19.85,11.56-14.32v.02h0Z"
                fill="#2f2e43"
              />
              <rect
                x="432.93"
                y="461.78"
                width="20.94"
                height="29.71"
                fill="#f8a8ab"
              />
              <path
                d="m451.55,508.51c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97h0Z"
                fill="#2f2e43"
              />
              <path
                d="m480.61,205.64l-54.93-2.81s-8.42,31.92,2.22,65.18l1.28,200.29h31.04l29.26-206.61-8.87-56.05h0Z"
                fill="#2f2e43"
              />
              <path
                d="m471.35,72.03l-30.15-16s-32.49,47.48-28,73.2c4.5,25.72,12.48,73.6,12.48,73.6l66.51,2.81-11.61-94.29-9.23-39.32h0Z"
                fill="#e2e3e4"
              />
              <rect
                x="447.83"
                y="461.78"
                width="20.94"
                height="29.71"
                fill="#f8a8ab"
              />
              <path
                d="m466.45,508.51c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97h0Z"
                fill="#2f2e43"
              />
              <path
                d="m492.19,205.64l-66.51-2.81s-8.42,31.92,2.22,65.18l12.86,200.29h31.04l29.26-206.61-8.87-56.05h0Z"
                fill="#2f2e43"
              />
              <path
                d="m485.25,336.46c-4.65,0-9.72-1.14-14.73-2.26-3.71-.83-6.98-1.04-9.6-1.2-3.98-.25-7.13-.45-8.88-2.78-1.73-2.3-1.73-6.21,0-13.92,2.3-10.24,7.42-26.6,13.68-40.06,8.09-17.36,15.86-25.35,23.11-23.72,9.71,2.18,13.58,18.39,15.03,27.85,2.02,13.21,1.84,28.91-.44,39.07h0c-3.02,13.45-9.95,17.01-18.18,17.01h.01Zm1.77-81.12c-5.33,0-11.87,7.78-18.57,22.18-6.17,13.25-11.21,29.36-13.48,39.45-1.45,6.48-1.61,10.01-.53,11.46.92,1.22,3.33,1.38,6.66,1.58,2.73.17,6.13.38,10.07,1.27,15.66,3.51,25.45,4.79,29.32-12.48,4.15-18.5.99-60.35-12.32-63.34-.38-.09-.77-.13-1.16-.13h.01Z"
                fill="#dfdfe0"
              />
              <polygon
                points="548.58 460.81 399.43 461.79 376.26 451.13 389.76 313.42 403.34 314.11 543.07 321.22 548.58 460.81"
                fill="#e11d48"
              />
              <polygon
                points="399.43 461.79 376.26 451.13 389.76 313.42 403.34 314.11 399.43 461.79"
                fill="#272223"
                isolation="isolate"
                opacity=".2"
              />
              <path
                d="m487.5,311.06c-2.77,0-5.8-.68-8.78-1.35-2.21-.5-4.16-.62-5.73-.72-2.37-.15-4.25-.27-5.29-1.66-1.03-1.37-1.03-3.7,0-8.3,1.37-6.11,4.42-15.86,8.16-23.88,4.82-10.35,9.46-15.11,13.78-14.14,5.79,1.3,8.1,10.96,8.96,16.61,1.2,7.88,1.1,17.24-.26,23.29h0c-1.8,8.02-5.93,10.14-10.84,10.14h0Zm1.06-48.36c-3.18,0-7.08,4.64-11.07,13.23-3.68,7.9-6.69,17.5-8.03,23.52-.87,3.86-.96,5.97-.31,6.83.55.73,1.98.82,3.97.94,1.63.1,3.65.23,6,.76,9.33,2.09,15.17,2.85,17.48-7.44,2.47-11.03.59-35.98-7.34-37.76-.23-.05-.46-.08-.69-.08h-.01Z"
                fill="#dfdfe0"
              />
              <polygon
                points="525.25 385.21 436.33 385.79 422.51 379.44 430.56 297.33 438.66 297.74 521.97 301.98 525.25 385.21"
                fill="#e2e3e4"
              />
              <polygon
                points="436.33 385.79 422.51 379.44 430.56 297.33 438.66 297.74 436.33 385.79"
                fill="#272223"
                isolation="isolate"
                opacity=".2"
              />
              <path
                id="uuid-8ce6c1e2-0323-4bcc-9fae-abcd697b19c4-253"
                d="m492.7,255.64c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06h0Z"
                fill="#f8a8ab"
              />
              <path
                d="m433,71.45s22.26-2.82,24.92,3.83,33.92,164.94,33.92,164.94h-20.62l-38.22-168.77h0Z"
                fill="#e2e3e4"
              />
              <polygon
                points="278.34 105.33 255.98 112.68 255.98 80.5 276.27 80.5 278.34 105.33"
                fill="#f8a8ab"
              />
              <circle
                cx="258.75"
                cy="67.13"
                r="22.28"
                fill="#f8a8ab"
              />
              <path
                d="m264.87,64.92c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38s5.85-2.4,9.03-2.55c7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2-3.03,5.45-9.37,9.47-15.45,8.08-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64s-6.42-3.73-8.8-1.36"
                fill="#2f2e43"
              />
              <path
                d="m292.28,72.64c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38"
                fill="#2f2e43"
              />
              <rect
                x="250.02"
                y="463.43"
                width="20.94"
                height="29.71"
                fill="#f8a8ab"
              />
              <path
                d="m229.62,511.12c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97h-.01Z"
                fill="#2f2e43"
              />
              <rect
                x="319.09"
                y="443.35"
                width="20.94"
                height="29.71"
                transform="translate(-192.55 243.81) rotate(-31.95)"
                fill="#f8a8ab"
              />
              <path
                d="m306.98,507.05c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79h0Z"
                fill="#2f2e43"
              />
              <path
                d="m286.38,214.98h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75-17.43-21.28-17.43-21.28h0Z"
                fill="#2f2e43"
              />
              <polygon
                points="315.54 218.3 222.43 218.3 250.36 97.92 290.93 97.92 315.54 218.3"
                fill="#e11d48"
              />
              <path
                id="uuid-37b50455-8328-4bab-acb8-ef0258a53271-254"
                d="m199.3,95.55c-1.49-7.32,1.24-14.01,6.08-14.94s9.97,4.26,11.45,11.58c.63,2.92.53,5.94-.29,8.82l5.89,31.11-15.22,2.41-4.19-30.92c-1.89-2.36-3.16-5.12-3.72-8.06h0Z"
                fill="#f8a8ab"
              />
              <path
                d="m289.94,97.92h-35.78l-24.12,48.24-9.1-36.15-19.99,2.12s4.73,70.63,25.4,68.24c20.67-2.39,68.88-66.02,63.58-82.46h.01Z"
                fill="#e11d48"
              />
              <path
                d="m323.73,326.73c-2.77,0-5.8-.68-8.78-1.35-2.21-.5-4.16-.62-5.73-.72-2.37-.15-4.25-.27-5.29-1.66-1.03-1.37-1.03-3.7,0-8.3,1.37-6.11,4.42-15.86,8.16-23.88,4.82-10.35,9.46-15.11,13.78-14.14,5.79,1.3,8.1,10.96,8.96,16.61,1.2,7.88,1.1,17.24-.26,23.29h0c-1.8,8.02-5.93,10.14-10.84,10.14h0Zm1.06-48.36c-3.18,0-7.08,4.64-11.07,13.23-3.68,7.9-6.69,17.5-8.03,23.52-.87,3.86-.96,5.97-.31,6.83.55.73,1.98.82,3.97.94,1.63.1,3.65.23,6,.76,9.33,2.09,15.17,2.85,17.48-7.44,2.47-11.03.59-35.98-7.34-37.76-.23-.05-.46-.08-.69-.08h-.01Z"
                fill="#dfdfe0"
              />
              <polygon
                points="361.49 400.87 272.57 401.45 258.75 395.1 266.8 312.99 274.9 313.4 358.21 317.64 361.49 400.87"
                fill="#e2e3e4"
              />
              <polygon
                points="272.57 401.45 258.75 395.1 266.8 312.99 274.9 313.4 272.57 401.45"
                fill="#272223"
                isolation="isolate"
                opacity=".2"
              />
              <path
                id="uuid-a22ab2ed-d129-49b3-815e-454852415f0b-255"
                d="m329.89,281.37c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06h0Z"
                fill="#f8a8ab"
              />
              <path
                d="m269.54,97.92s20.33-.86,21.39,0c5.55,4.53,38.1,168.04,38.1,168.04h-20.62l-38.87-168.04h0Z"
                fill="#e11d48"
              />
            </svg>
          </EmptyDataProfile>
        )}
      </Card>
      <Card title="آخرین پرداخت ها">
        {!payments ? (
          <TableLoaded count={3} />
        ) : !!payments.data.length ? (
          <div>
            <div className="relative overflow-x-auto border border-gray-100">
              <table className="w-full text-sm text-center text-gray-500 ">
                <thead className="text-sm whitespace-nowrap text-gray-700  bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      شماره پرداخت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      تاریخ پرداخت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      مبلغ پرداختی
                    </th>
                    <th scope="col" className="px-6 py-3">
                      وضعیت پرداخت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      درگاه بانکی
                    </th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {payments.data.slice(0, 3).map((payment, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b  hover:text-black hover:bg-gray-50/50 transition-all duration-200"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
                      >
                        {payment.Resnumber}
                      </th>
                      <td className="px-6 py-4">
                        {payment.CreatedAt}
                      </td>
                      <td className="px-6 py-4 text-black font-bold">
                        {payment.Amount}
                        <small
                          className="text-slate-700 font-light mr-1
                    "
                        >
                          تومان
                        </small>
                      </td>
                      <td className="px-6 py-4 ">
                        <span
                          className={`font-bold border text-xs  p-2  rounded-md ${
                            payment.Status === 'PAID'
                              ? 'bg-green-50 border-green-300 text-green-500'
                              : 'bg-rose-50 border-rose-300 text-rose-500'
                          }`}
                        >
                          {payment.Status === 'PAID'
                            ? 'موفق'
                            : 'ناموفق'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold border text-xs  p-2  rounded-md bg-neutral-50 border-neutral-300 text-neutral-500">
                          {!!payment?.BankName
                            ? payment.BankName
                            : 'نامشخص'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              className="text-slate-700 text-sm w-full bg-gray-50 block hover:opacity-70 text-center py-4 font-semibold rounded-md"
              to="/profile/payments"
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
            </Link>
          </div>
        ) : (
          <EmptyDataProfile
            text="شما هیچ پرداختی ندارید!!"
            textClassName="text-rose-500 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 567.1704 517.30967"
              className="w-40 h-40 mb-4"
            >
              <rect
                x="326.03543"
                y="307.38928"
                width="495"
                height="45"
                transform="translate(-385.45426 -17.88532) rotate(-16.24392)"
                fill="#3f3d56"
              />
              <path
                d="M386.40028,575.96948,316.35377,335.55639a7.0001,7.0001,0,0,1,4.76257-8.67871L784.8346,191.76928a7.00645,7.00645,0,0,1,8.67871,4.76221l62.05591,212.98877-1.92016.55957L791.59315,197.09106a5.00865,5.00865,0,0,0-6.19922-3.40186L321.67579,328.7976a5.00029,5.00029,0,0,0-3.40186,6.19922l70.04651,240.41309Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#3f3d56"
              />
              <path
                d="M752.93324,410.51a6.51233,6.51233,0,0,1-6.24341-4.6831l-11.74854-40.32324a6.50734,6.50734,0,0,1,4.42212-8.0586l40.32349-11.74853a6.50722,6.50722,0,0,1,8.05859,4.42285L799.494,390.44262a6.50733,6.50733,0,0,1-4.42212,8.05859l-40.32349,11.74854A6.47854,6.47854,0,0,1,752.93324,410.51Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M385.31751,336.3a11.691,11.691,0,0,0-.43017-1.22,11.99972,11.99972,0,0,0-22.90967,6.67,11.37989,11.37989,0,0,0,.29,1.26,12.01924,12.01924,0,0,0,11.52978,8.64,11.74908,11.74908,0,0,0,3.3501-.48A12.01262,12.01262,0,0,0,385.31751,336.3Zm-8.73,12.95a10.01322,10.01322,0,0,1-12.3999-6.8,11.435,11.435,0,0,1-.28027-1.26,9.99681,9.99681,0,0,1,19.04-5.54,8.33837,8.33837,0,0,1,.45019,1.21A10.00446,10.00446,0,0,1,376.58753,349.25006Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M355.88508,344.87a11.00221,11.00221,0,0,1,4.20834-12.0571,11,11,0,1,0,5.81753,19.96694A11.00221,11.00221,0,0,1,355.88508,344.87Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M666.7472,394.43005a6.04249,6.04249,0,0,0-7.44971-4.2L592.90736,408.8l-7.14991,2h44.89991l7.1499-2,24.75-6.92A6.04864,6.04864,0,0,0,666.7472,394.43005Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#ccc"
              />
              <path
                d="M619.77747,380.56005a6.04513,6.04513,0,0,0-7.45019-4.19l-99.61963,27.86a6.06838,6.06838,0,0,0-4.37012,6.57h25.79l7.15967-2,74.30029-20.78A6.05544,6.05544,0,0,0,619.77747,380.56005Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#ccc"
              />
              <path
                d="M876.24147,408.79777H393.241a7.00787,7.00787,0,0,0-7,7v286a7.00755,7.00755,0,0,0,7,7H876.24147a7.00786,7.00786,0,0,0,7-7v-286A7.00818,7.00818,0,0,0,876.24147,408.79777Zm5,293a5.00181,5.00181,0,0,1-5,5H393.241a5.0018,5.0018,0,0,1-5-5v-286a5.00213,5.00213,0,0,1,5-5H876.24147a5.00213,5.00213,0,0,1,5,5Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#3f3d56"
              />
              <path
                d="M440.23744,447.8a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,440.23744,447.8Zm0-22a10,10,0,1,0,10,10A10.0113,10.0113,0,0,0,440.23744,425.8Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M421.58526,435.8a11.00221,11.00221,0,0,1,7.413-10.39858,11,11,0,1,0,0,20.79717A11.00222,11.00222,0,0,1,421.58526,435.8Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M488.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,488.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M512.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,512.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M536.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,536.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M573.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,573.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M597.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,597.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M621.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,621.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M658.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,658.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M682.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,682.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M706.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,706.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M743.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,743.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M767.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,767.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M791.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,791.88112,577.57805Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e11d48"
              />
              <path
                d="M549.89914,677.745H420.45883a6.04736,6.04736,0,1,1,0-12.09472H549.89914a6.04736,6.04736,0,1,1,0,12.09472Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e6e6e6"
              />
              <path
                d="M508.39914,651.745H461.95883a6.04736,6.04736,0,1,1,0-12.09472h46.44031a6.04736,6.04736,0,1,1,0,12.09472Z"
                transform="translate(-316.07106 -191.48811)"
                fill="#e6e6e6"
              />
              <rect
                x="71.81005"
                y="277.08994"
                width="493"
                height="2"
                fill="#3f3d56"
              />
            </svg>
          </EmptyDataProfile>
        )}
      </Card>
    </>
  );
};

MainProfile.propTypes = {};

export default MainProfile;
