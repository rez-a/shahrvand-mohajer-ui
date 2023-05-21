import Loading from 'components/shared/Loading';
import Spinner from 'components/shared/Spinner';
import TitleIcon from 'components/shared/TitleIcon';
import { NORMAL } from 'constants/shippingMethod';
import { UserContext } from 'contexts/UserProvider';
import decodeToken from 'helper/handlerAuthorazation/decodeToken';
import storeAuthToken from 'helper/handlerAuthorazation/storeAuthToken';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import dispatcher from 'services/dispatcher';
import { ORDER_PAY, REFRESH_TOKEN } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import Swal from 'sweetalert2';

const Invoice = ({ invoice, setInvoice }) => {
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handlePayInvoice = async () => {
    setLoading(true);
    try {
      const response = await fetcher(`${ORDER_PAY}/${invoice.Id}`);
      if (!response.data) throw Error(response);
      handleResponseInvoice(response);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'نتیجه تراکنش',
        text: err.response.data.message,
      });
    }
  };

  const handleResponseInvoice = async (response) => {
    try {
      const refreshTokenResponse = await dispatcher(
        REFRESH_TOKEN,
        {}
      );
      editUser(refreshTokenResponse.access_token);
      if (response.data.Section === 'WALLET') {
        Swal.fire({
          icon: 'success',
          title: 'نتیجه تراکنش',
          text: response.message,
        }).then((res) => {
          setInvoice(null);
          navigate('/');
        });
      }
    } catch (err) {
      return new Error();
    }
    setLoading(false);
  };

  const editUser = (token) => {
    storeAuthToken(token);
    setUser(decodeToken(token));
  };

  useEffect(() => {
    !invoice && navigate(-1);
  }, []);
  return invoice ? (
    <main className="container mx-auto">
      <div className="max-w-4xl border rounded-md border-gray-100 bg-white mx-auto p-6">
        <div className="flex items-center">
          <TitleIcon />
          <h2 className="text-base font-bold mr-2">جزییات فاکتور</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ul className="mb-4 divide-y">
              <li className="py-4">
                <div className="flex items-center justify-between font-bold">
                  <span>شماره سفارش</span>
                  <span>{invoice.Id}</span>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    موجودی کیف پول
                  </span>
                  <span className="font-semibold">
                    <span>
                      {Number(
                        invoice.CurrentWalletBalance
                      ).toLocaleString()}
                    </span>
                    <span className="font-light text-xs mr-1">
                      تومان
                    </span>
                  </span>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    مبلغ سفارش
                  </span>
                  <span className="font-semibold">
                    <span>
                      {Number(invoice.TotalPrice).toLocaleString()}
                    </span>
                    <span className="font-light text-xs mr-1">
                      تومان
                    </span>
                  </span>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    مابه التفاوت
                  </span>
                  <span
                    className={`font-semibold  px-2 py-1 rounded-md  ${
                      !!Number(invoice.DiffAmountPayWithWallet)
                        ? 'text-rose-600 bg-rose-200'
                        : 'bg-neutral-100'
                    }`}
                  >
                    <span>
                      {Number(
                        invoice.DiffAmountPayWithWallet
                      ).toLocaleString()}
                    </span>
                    <span className="font-light text-xs mr-1">
                      تومان
                    </span>
                  </span>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    تاریخ ثبت سفارش
                  </span>
                  <span className="font-semibold">
                    {invoice.CreatedAt}
                  </span>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    نحوه ارسال
                  </span>
                  <span className="font-semibold">
                    {invoice.ShippingMethod === NORMAL
                      ? 'ارسال عادی'
                      : 'ارسال فوری'}
                  </span>
                </div>
              </li>
            </ul>
            <button
              onClick={handlePayInvoice}
              className="relative bg-sky-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group block"
            >
              <span className="bg-sky-400 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
                {loading ? (
                  <Spinner />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-white"
                  >
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                  </svg>
                )}
              </span>
              <span className="z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
                {!!Number(invoice.DiffAmountPayWithWallet)
                  ? loading
                    ? 'درحال ورود به درگاه بانکی...'
                    : 'پرداخت فاکتور'
                  : loading
                  ? 'درحال پرداخت از کیف پول...'
                  : 'پرداخت فاکتور'}
              </span>
            </button>
          </div>
          <div className="col-span-1  items-center hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 598.11121 535.11426"
              className="w-full h-auto"
            >
              <path
                d="M304.29593,302.51687a4.59436,4.59436,0,0,0-3.18166,5.65638l76.71619,273.97819a4.59431,4.59431,0,0,0,5.65637,3.1816l282.81481-79.19052a4.59437,4.59437,0,0,0,3.18162-5.65631L592.76707,226.508a4.59434,4.59434,0,0,0-5.65633-3.18168Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M387.04091,572.39573l269.50474-75.46358L583.55634,236.26384,314.0516,311.72742Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#fff"
              />
              <path
                d="M349.68366,346.53414c-1.79809.50348-2.53942,3.49029-1.65249,6.6578s3.07152,5.335,4.86961,4.83156L475.8179,323.60568c1.79808-.50348,2.53941-3.4903,1.65248-6.6578s-3.07151-5.335-4.8696-4.83156Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M359.58247,381.886c-1.79808.50348-2.53941,3.49029-1.65248,6.6578s3.07151,5.335,4.8696,4.83156l122.91712-34.41782c1.79809-.50348,2.53942-3.49029,1.65249-6.6578s-3.07152-5.335-4.86961-4.83156Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M369.36719,416.83036c-1.79809.50348-2.53942,3.49026-1.65249,6.6578s3.07152,5.335,4.86961,4.83156L495.50143,393.9019c1.79808-.50348,2.53942-3.49027,1.65248-6.6578s-3.07151-5.335-4.8696-4.83156Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M379.266,452.18218c-1.79809.50348-2.53943,3.49027-1.65249,6.6578s3.07151,5.335,4.8696,4.83156l122.91712-34.41782c1.79809-.50348,2.53943-3.49026,1.65249-6.6578s-3.07152-5.335-4.86961-4.83156Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M534.9799,295.05735a5.96564,5.96564,0,1,0,3.21712,11.48936l22.97873-6.43423a5.96564,5.96564,0,0,0-3.21712-11.48937Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M544.68685,329.724a5.96564,5.96564,0,1,0,3.21712,11.48936l22.97872-6.43423a5.96564,5.96564,0,0,0-3.21712-11.48937Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M554.39379,364.39058a5.96563,5.96563,0,1,0,3.21711,11.48936l22.97873-6.43423a5.96564,5.96564,0,0,0-3.21712-11.48937Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M564.10073,399.05721a5.96564,5.96564,0,0,0,3.21712,11.48936l22.97873-6.43424a5.96564,5.96564,0,0,0-3.21712-11.48936Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#e6e6e6"
              />
              <path
                d="M573.37484,459.14634a7.60151,7.60151,0,1,0,4.0993,14.63992l29.27976-8.19858a7.6015,7.6015,0,0,0-4.09929-14.63992h0Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#0ea5e9"
              />
              <rect
                x="382.94479"
                y="459.87697"
                width="225"
                height="2"
                transform="translate(-406.86374 -31.78243) rotate(-15.64269)"
                fill="#e6e6e6"
              />
              <polygon
                points="520.202 506.072 502.825 510.273 478.352 445.247 503.999 439.047 520.202 506.072"
                fill="#a0616a"
              />
              <path
                d="M773.78964,717.55713l-.11768-.48584a22.23326,22.23326,0,0,1,16.36792-26.80518l33.99854-8.21924,5.33618,22.07276Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#2f2e41"
              />
              <polygon
                points="443.276 517.91 425.399 517.909 416.894 448.953 443.279 448.954 443.276 517.91"
                fill="#a0616a"
              />
              <path
                d="M748.55062,717.45361l-57.18628-.00244v-.5a22.20823,22.20823,0,0,1,22.20826-22.20752h.001l34.978.00147Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#2f2e41"
              />
              <path
                d="M717.824,673.43319,700.46594,466.56191l71.856-13.245.28375-.05127,21.03174,13.5199-7.32031,76.13381,33.70434,118.69857-29.10218,7.65853L757.16116,559.19046,749.4357,525.714l-3.9592,43.50036L748.41573,676.492Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#2f2e41"
              />
              <path
                d="M698.24051,471.25415l-.19011-.24067,24.83039-186.9574.0324-.24493.1748-.17516c.366-.366,9.06584-8.96295,18.01419-8.96295,1.29375,0,2.52377-.03276,3.70359-.06266,6.84753-.178,12.25677-.32041,18.68527,6.10916,6.54991,6.54919,27.91987,30.46463,27.91987,63.21913,0,31.70356,2.88689,130.22765,2.91609,131.21879l.04094,1.39129-1.167-.759c-.288-.18513-29.03062-18.487-53.13652-1.47389-7.53321,5.31739-14.30064,7.18147-20.08725,7.18147C706.50924,481.49732,698.3555,471.40083,698.24051,471.25415Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#0ea5e9"
              />
              <circle
                cx="737.30161"
                cy="227.82042"
                r="35.81548"
                transform="translate(-319.86766 199.12975) rotate(-28.66321)"
                fill="#a0616a"
              />
              <path
                d="M682.47425,511.43267a14.66358,14.66358,0,0,0,.85079-22.46873l20.33939-47.976L677.033,445.88934,661.8012,490.69675a14.743,14.743,0,0,0,20.673,20.73592Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#a0616a"
              />
              <path
                d="M662.82375,474.11363l6.54955-13.82749a2.693,2.693,0,0,1-.96728-1.00253c-6.11913-10.60487,30.84271-98.6722,33.30632-104.51364-.3756-3.17705-4.25577-36.84436-1.41871-48.19259,3.33974-13.359,10.19724-19.58491,22.92964-20.81814,14.04146-1.31867,17.82978,17.74932,17.86609,17.943l.01282,49.02-16.11487,56.42786-36.7518,74.97321Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#0ea5e9"
              />
              <path
                d="M741.88113,241.31379c-4.29338.55862-7.532-3.83417-9.03411-7.89482s-2.64661-8.78808-6.37942-10.98156c-5.09979-2.99674-11.62474.60754-17.45662-.38118-6.586-1.11657-10.86811-8.09643-11.20372-14.768s2.31935-13.08815,4.92436-19.23924l.90945,7.64441a15.15938,15.15938,0,0,1,6.62453-13.25057l-1.17219,11.217c.735-6.28405,7.50492-11.15334,13.69633-9.85109l-.1846,6.6835c7.60682-.90452,15.28012-1.81032,22.90947-1.12121s15.312,3.103,21.09438,8.1275c8.64957,7.51589,11.80857,19.89169,10.748,31.30129s-5.77042,22.12808-10.67915,32.48221c-1.23506,2.60513-2.9433,5.54483-5.80719,5.87668-2.57323.29818-4.92778-1.85286-5.72771-4.31671s-.4096-5.14055.06946-7.68631c.72371-3.84576,1.636-7.77663.95558-11.63028s-3.45273-7.66178-7.33739-8.13406-7.85964,3.9681-5.992,7.4069Z"
                transform="translate(-300.94439 -182.44287)"
                fill="#2f2e41"
              />
              <polygon
                points="597.729 535.092 339.991 535.092 339.991 532.986 598.111 532.986 597.729 535.092"
                fill="#3f3d56"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Loading />
  );
};

export default Invoice;
