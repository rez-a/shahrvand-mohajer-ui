import { HOME_DELIVERY } from 'constants/paymentMethod';
import React from 'react';
import { Link } from 'react-router-dom';

const SummaryOrder = ({ order }) => {
  return (
    <tr className="bg-neutral-100 border-b hover:text-black hover:bg-gray-50/50 transition-all duration-200 ">
      <td colSpan={3} className="px-6 py-3 space-y-6">
        <div className="flex items-center ">
          <p>شماره سفارش :</p>
          <p className="font-bold text-black mr-2">{order.Code}</p>
        </div>
        <div className="flex items-center ">
          <p>تاریخ سفارش :</p>
          <p className="font-bold text-black mr-2">
            {order.CreatedAt}
          </p>
        </div>
        <div className="flex items-center">
          <p>مبلغ سفارش :</p>
          <p className="font-bold text-black mr-2">
            {Number(order.TotalPrice).toLocaleString()}
            <small
              className="text-slate-700 font-light mr-1
                    "
            >
              تومان
            </small>
          </p>
        </div>
        <div className="flex items-center">
          <p>وضعیت سفارش :</p>
          <p className="font-bold text-black mr-2">
            <span
              className={` font-bold border text-xs  p-2  rounded-md ${
                !Number(order.Cancelled)
                  ? 'bg-green-50 border-green-300 text-green-500 '
                  : 'bg-rose-50 border-rose-300 text-rose-500'
              }`}
            >
              {Number(order.Cancelled) ? 'لغو شده' : 'ثبت شده'}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p>نحوه پرداخت :</p>
          <p className="font-bold text-black mr-2">
            <span className="font-bold border text-xs  p-2  rounded-md bg-neutral-50 border-neutral-300 text-neutral-500">
              {order.PaymentMethod === HOME_DELIVERY
                ? 'درب منزل'
                : 'کیف پول'}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p>امتیاز سفارش :</p>
          <p className="font-bold text-black mr-2">
            {order.TotalScoresOrder}
          </p>
        </div>
        <div className="flex items-center w-full">
          <Link
            to={`/profile/orders/details/${order.Id}`}
            class="font-medium flex items-center text-xs w-full"
          >
            <span className="bg-sky-50 border border-sky-300 p-2 text-sky-500 rounded-md hover:bg-sky-100/70 w-full text-center">
              مشاهده جزییات
            </span>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SummaryOrder;
