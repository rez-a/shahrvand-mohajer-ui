import React, { useState } from 'react';
import Card from './Card';
import ProfileProductCard from 'components/productCard/ProfileProductCard';
import { Link, useParams } from 'react-router-dom';
import { ORDER_DETAILS } from 'services/endPoints';
import useSWR from 'swr';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserProvider';
import TableLoaded from 'components/shared/TableLoaded';
import Spinner from 'components/shared/Spinner';
import { fetcher } from 'services/swr/fetcher';

const OrderDetails = (props) => {
  const { orderId } = useParams();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { data: order, mutate } = useSWR(
    `${ORDER_DETAILS}/${orderId}`,
    fetcher,
    {
      refreshInterval: false,
    }
  );

  const orderCanceling = async () => {
    setLoading(true);
    const response = await fetcher(`orders/${orderId}/cancelled`);
    if (response.status === 'Success') mutate();
    setLoading(false);
  };
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
              <div className="pr-6 border-r flex justify-between grow items-center">
                <div>
                  <p className="font-bold mb-2">
                    سفارش <span>{order.Code}</span>
                  </p>
                  <p className="text-xs text-zinc-400 font-light ">
                    ثبت شده در تاریخ <span>{order.CreatedAt}</span>
                  </p>
                </div>
                {!Number(order.Cancelled) && (
                  <button
                    onClick={() => orderCanceling()}
                    className="text-xs flex items-center gap-2 bg-rose-50 text-rose-600 p-2 rounded-md hover:bg-rose-100/60 transition-all duration-200 mr-auto"
                  >
                    {loading && (
                      <Spinner
                        color="text-rose-200"
                        fill="fill-rose-700"
                      />
                    )}
                    <span>لفو کردن سفارش</span>
                  </button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  نام کاربری :
                </p>
                <p className="text-sm text-zinc-500">{user.name}</p>
              </div>
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  شماره تماس :
                </p>
                <p className="text-sm text-zinc-500">{user.mobile}</p>
              </div>
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  نحوه ارسال :
                </p>
                <p className="text-sm text-zinc-500">
                  {order.ShippingMethod === 'FREE'
                    ? 'ارسال رایگان'
                    : 'ارسال فوری'}
                </p>
              </div>
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  نحوه پرداخت :
                </p>
                <p className="text-sm text-zinc-500">
                  پرداخت درب منزل
                </p>
              </div>
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
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
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  وضعیت پرداخت :
                </p>
                <p className="text-sm text-zinc-500">
                  درحال بروز رسانی...
                </p>
              </div>
              <div className="space-y-2 py-4 px-7 border-b border-b-gray-100 h-24">
                <p className="text-blue-700 font-bold">
                  وضعیت سفارش :
                </p>
                <p
                  className={`text-xs  inline-flex px-2 py-1 rounded-md  border  ${
                    !Number(order.Cancelled)
                      ? 'border-green-300 text-green-500 bg-green-50'
                      : 'border-rose-300 text-rose-500 bg-rose-50'
                  }`}
                >
                  {!Number(order.Cancelled) ? 'ثبت شده' : 'لغو شده'}
                </p>
              </div>
            </div>
          </>
        )}
      </Card>
      {!!Number(order?.Suggest) && (
        <div className="col-span-5 relative bg-white text-blue-700 rounded-3xl shadow-sm border border-gray-200/70 px-4 py-5">
          <svg
            className="fill-blue-700 w-6 h-6 inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
          </svg>
          <span className="mr-2 text-sm font-semibold">
            درصورت ناموجودی محصول ، با نوع دیگری جایگزین شود
          </span>
        </div>
      )}

      {!!order && (
        <Card title="محصولات سفارش">
          <div className="mt-4 border-t">
            <div className="max-h-[40rem] h-full overflow-y-auto">
              <ul className="mb-12 divide-y col-span-3 p-4 border-b border-b-neutral-100">
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
