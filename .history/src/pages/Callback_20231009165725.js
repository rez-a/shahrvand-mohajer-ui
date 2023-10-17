import Loading from 'components/shared/Loading';
import { UserContext } from 'contexts/UserProvider';
import decodeToken from 'helper/handlerAuthorazation/decodeToken';
import storeAuthToken from 'helper/handlerAuthorazation/storeAuthToken';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import dispatcher from 'services/dispatcher';
import { PAYMENT_CALLBACK, REFRESH_TOKEN } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';

const Callback = () => {
  const { setUser } = useContext(UserContext);
  const [style, setStyle] = useState(createStyle(false));
  const { search } = useLocation();
  const navigate = useNavigate();

  const paymentData = queryString.parse(search);
  if (!paymentData?.invoiceId) navigate('/');

  const { data, isLoading } = useSWR(
    !!paymentData?.invoiceId && `${PAYMENT_CALLBACK}${search}`,
    fetcher
  );

  const paymentCallback = !!data && data?.data;

  useEffect(() => {
    setStyle(createStyle(!!data));
  }, [data]);

  useEffect(() => {
    const refreshToken = async () => {
      const refreshTokenResponse = await dispatcher(
        REFRESH_TOKEN,
        {}
      );
      editUser(refreshTokenResponse.data.access_token);
    };

    if (!!data) refreshToken();
  }, [data]);

  const editUser = (token) => {
    storeAuthToken(token);
    setUser(decodeToken(token));
  };

  function createStyle(status) {
    return {
      border: status ? `border-sky-500` : `border-rose-500`,
      bg: status ? `bg-sky-100` : `bg-rose-100`,
      fill: status ? `fill-sky-500` : `fill-rose-500`,
      text: status ? `text-sky-700` : `text-rose-700`,
      buttonClass: status
        ? `bg-sky-500  hover:bg-sky-500 bg-sky-500/90 shadow-sky-500/50`
        : `bg-rose-500  hover:bg-rose-500 bg-rose-500/90 shadow-rose-500/50`,
    };
  }

  return !isLoading && !!paymentData?.invoiceId ? (
    <main className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative border rounded-md  mx-auto p-8 pb-32 ${style.bg} ${style.border}`}
        >
          {!!data ? (
            <svg
              className={`w-32 h-32 mx-auto ${style.fill}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-32 h-32 mx-auto ${style.fill}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
            </svg>
          )}

          <h2
            className={`text-2xl font-bold text-center ${style.text} mt-4`}
          >
            {!!paymentCallback
              ? 'پرداخت با موفقیت انجام شد'
              : 'پرداخت انجام نشد'}
          </h2>
        </div>
        <div className="bg-white w-[calc(100%_-_1rem)]  md:w-2/3 relative -top-20 mx-auto p-4 rounded-lg">
          <ul className="divide-y">
            {!!data ? (
              <>
                <li className="flex items-center justify-between py-4 gap-3">
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    کد رهگیری
                  </p>
                  <p className={`font-semibold ${style.text}`}>
                    {paymentCallback?.Resnumber}
                  </p>
                </li>
                <li className="flex items-center justify-between py-4 gap-3">
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    تراکنش
                  </p>
                  <p className={`font-semibold ${style.text}`}>
                    <span
                      className={` px-3 py-1 rounded-md ${style.bg}`}
                    >
                      موفق
                    </span>
                  </p>
                </li>
                <li className="flex items-center justify-between py-4 gap-3">
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    مبلغ پرداختی
                  </p>
                  <p className={`font-semibold ${style.text}`}>
                    <span>{paymentCallback?.Amount}</span>
                    <span className="text-xs font-light mr-1">
                      تومان
                    </span>
                  </p>
                </li>
                <li className="flex items-center justify-between py-4 gap-3">
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    تاریخ تراکنش
                  </p>
                  <p className={`font-semibold ${style.text}`}>
                    {paymentCallback?.CreatedAt}
                  </p>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center justify-between py-4">
                  <p className="text-sm text-gray-500">تراکنش</p>
                  <p className={`font-semibold ${style.text}`}>
                    <span
                      className={` px-3 py-1 rounded-md ${style.bg}`}
                    >
                      ناموفق
                    </span>
                  </p>
                </li>
                <li className="flex items-center justify-center py-4">
                  <p
                    className={`font-semibold text-center ${style.text}`}
                  >
                    پرداخت انجام نشد ، مبلغ تا 72 ساعت آینده
                    بازگردانده خواهد شد
                  </p>
                </li>
              </>
            )}
          </ul>
          <Link
            href="/index"
            className={`relative  h-12 overflow-hidden group block text-white w-full py-2 rounded-md font-bold shadow-lg  transition-all duration-300 ${style.buttonClass}`}
          >
            <span className="z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
              بازگشت به صفحه اصلی
            </span>
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <Loading />
  );
};

export default Callback;
