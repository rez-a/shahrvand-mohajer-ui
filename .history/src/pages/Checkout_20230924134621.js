import CheckboxInput from "components/shared/inputs/CheckboxInput";
import RadioInput from "components/shared/inputs/RadioInput";
import Loading from "components/shared/Loading";
import Spinner from "components/shared/Spinner";
import TitleIcon from "components/shared/TitleIcon";
import { HOME_DELIVERY, WALLET } from "constants/paymentMethod";
import { NORMAL, TAXI } from "constants/shippingMethod";
import { CartContext } from "contexts/CartProvider";
import { UserContext } from "contexts/UserProvider";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "reducers/cart/actionCreators";
import dispatcher from "services/dispatcher";
import { ADDRESSES, ORDER_SAVE, PROFILE } from "services/endPoints";
import { fetcher } from "services/swr/fetcher";
import { updater } from "services/updater";
import Swal from "sweetalert2";
import useSWR from "swr";

const Checkout = ({
  data: {
    totalPrice,
    deliveryCost,
    productsInCart,
    purchaseProfit,
    taxiـfare,
    order,
    setOrder,
    setInvoice,
  },
}) => {
  const { user: login } = useContext(UserContext);
  const {
    state: { cart },
  } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    !login && navigate("/login");
  }, []);
  const { dispatch } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const { data: user, mutate } = useSWR(PROFILE, dispatcher);
  const { is_profile_complete, name, mobile, address } = !!user && user.data;

  useEffect(() => {
    setOrder({
      ...order,
    });
  }, [user]);

  useEffect(() => {
    !cart.length && navigate("/checkout/cart");
  }, []);

  const handleSaveOrder = async () => {
    setLoading(true);
    try {
      const response = await dispatcher(ORDER_SAVE, {
        products: order.products,
        address: order.address.index,
        shipping_method: order.shipping,
        suggest: order.suggest,
        payment_method: order.payMethod,
      });
      setLoading(false);
      handleResponseOrder(response);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "سفارش شما ثبت نشد",
        text: "مشکلی پیش آمد سفارش شما ثبت نشد",
      });
    }
    setLoading(false);
  };

  const handleResponseOrder = async (response) => {
    const { data, message } = response;
    if (data.PaymentMethod === HOME_DELIVERY) {
      return Swal.fire({
        icon: "success",
        title: message,
        text: `شماره سفارش ${data.Id}`,
      }).finally((res) => {
        navigate("/");
        dispatch(clearCart());
      });
    } else if (data.PaymentMethod === WALLET) {
      await setInvoice(data);
      navigate("/checkout/invoice");
      dispatch(clearCart());
    }
  };

  return (
    <>
      {!!user ? (
        <main className="grid grid-cols-1 xl:grid-cols-7 gap-4 items-start mx-4 2xl:mx-0">
          <section className="col-span-1 xl:col-span-5 gap-4">
            {!!is_profile_complete ? (
              <>
                <div className="bg-white border border-gray-100 rounded-lg px-6 py-3">
                  <div className="flex items-center mb-4 justify-between">
                    <h2 className="text-neutral-800 font-bold flex items-center">
                      <span className="mr-1">آدرس تحویل سفارش</span>
                    </h2>
                  </div>
                  <div className="pr-2">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        fill="none"
                        viewBox="0 0 24 25"
                      >
                        <path
                          stroke="#323232"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.276 6.022v0a7.462 7.462 0 0 1 0 10.553l-4.033 4.034a1.76 1.76 0 0 1-2.487 0l-4.033-4.034a7.462 7.462 0 0 1 0-10.553v0a7.462 7.462 0 0 1 10.553 0Z"
                          clip-rule="evenodd"
                        />
                        <path
                          stroke="#323232"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.276 6.022v0a7.462 7.462 0 0 1 0 10.553l-4.033 4.034a1.76 1.76 0 0 1-2.487 0l-4.033-4.034a7.462 7.462 0 0 1 0-10.553v0a7.462 7.462 0 0 1 10.553 0Z"
                          clip-rule="evenodd"
                        />
                        <circle
                          cx="12"
                          cy="11.299"
                          r="2.56"
                          stroke="#323232"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                      <div>
                        <div className="text-neutral-800 font-medium my-1 text-sm">
                          <span className="text-black font-semibold mr-1">
                            {address}
                          </span>
                        </div>
                        <div className="text-neutral-800 font-light text-sm flex pt-2">
                          نام و نام و خانوادگی گیرنده
                          <div className="mr-1 font-medium before:content-[':'] before:px-2">
                            {name}
                          </div>
                        </div>
                        <div className="text-neutral-800 font-light text-sm flex pt-2">
                          شماره همراه گیرنده
                          <div className="mr-1 font-medium before:content-[':'] before:px-2">
                            {mobile}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <NavLink
                        to="/profile/edit"
                        className="hover:opacity-70 relative overflow-hidden group block text-sky-500 w-auto text-sm px-4 py-2 rounded-md font-right transition-all duration-300"
                      >
                        تغییر یا ویرایش آدرس
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline rotate-180 stroke-current"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m10 16 4-4-4-4"
                          />
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <div className="flex flex-col xl:flex-row gap-12 justify-between">
                    <div className="grow mb-8 xl:w-1/2">
                      <h2 className="text-zinc-500 font-bold flex items-center mb-4">
                        <TitleIcon />
                        <span className="mr-1">نحوه پرداخت</span>
                      </h2>
                      <div class="flex flex-col sm:flex-row xl:flex-col gap-4 w-full">
                        <RadioInput
                          label="پرداخت درب منزل"
                          id="Pay-at-home"
                          name="payment"
                          className="sm:w-1/2"
                          value={HOME_DELIVERY}
                          checked={order.payMethod === HOME_DELIVERY}
                          changeHandler={(e) =>
                            setOrder({
                              ...order,
                              payMethod: e.target.value,
                            })
                          }
                        />
                        <RadioInput
                          label="پرداخت آنلاین"
                          id="online-payment"
                          name="payment"
                          className="sm:w-1/2"
                          value={WALLET}
                          checked={order.payMethod === WALLET}
                          changeHandler={(e) =>
                            setOrder({
                              ...order,
                              payMethod: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grow xl:w-1/2">
                      <h2 className="text-zinc-500 font-bold  flex items-center mb-4">
                        <TitleIcon />
                        <span className="mr-1">انتخاب نحوه ارسال</span>
                      </h2>
                      <div class="flex flex-col sm:flex-row xl:flex-col gap-4 w-full">
                        <RadioInput
                          label="ارسال عادی"
                          id="free-delivery"
                          name="delivery"
                          description="حدودا یک ساعت ونیم"
                          className="sm:w-1/2"
                          value={NORMAL}
                          checked={order.shipping === NORMAL}
                          changeHandler={(e) =>
                            setOrder({
                              ...order,
                              shipping: e.target.value,
                            })
                          }
                        />
                        <RadioInput
                          label="ارسال فوری"
                          id="Immediate-delivery"
                          name="delivery"
                          description={`${Number(
                            taxiـfare
                          ).toLocaleString()} تومان حدودا ۴۵ دقیقه`}
                          className="sm:w-1/2"
                          value={TAXI}
                          checked={order.shipping === TAXI}
                          changeHandler={(e) =>
                            setOrder({
                              ...order,
                              shipping: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/checkout/cart"
                    className="text-rose-500 text-sm underline decoration-dotted my-4 block hover:no-underline"
                  >
                    بازگشت به سبد خرید
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="bg-rose-50 text-rose-500 rounded-md p-2 font-bold">
                  جهت ثبت سفارش مراحل زیر را طی کنید :
                </div>
                <ol className="flex flex-col gap-4 mt-4 items-start justify-between">
                  <li>
                    <Link
                      className="text-blue-600 underline"
                      to="/profile/edit"
                    >
                      تکمیل اطلاعات پروفایل
                    </Link>
                  </li>
                </ol>
              </>
            )}
          </section>
          <aside className="bg-gray-50/50 border rounded-md border-gray-100 bg-white xl:col-span-2 p-3 xl:sticky top-24 mb-3">
            <div className="mb-3 pb-4">
              <p className="flex items-center justify-between mb-3">
                <span className="font-bold">
                  مبلغ کل ({productsInCart}کالا)
                </span>
                <span className="opacity-60">
                  {totalPrice.toLocaleString()} تومان
                </span>
              </p>
              <p className="flex items-center justify-between mb-3 text-sky-500">
                <span className="font-bold">سود شما از خرید</span>
                <span className="opacity-100">
                  {purchaseProfit.toLocaleString()} تومان
                </span>
              </p>
              <p className="flex items-center justify-between mb-3 border-b pb-4">
                <span className="font-bold flex items-center">
                  <span>هزینه پیک</span>
                  <div className="relative group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
                    </svg>
                    <div
                      id="popover-default"
                      role="tooltip"
                      class="absolute z-10 -left-2 invisible opacity-0 inline-block w-64 text-xs text-gray-600 font-medium transition-opacity duration-300 bg-white border border-gray-200 rounded-md shadow-sm  group-hover:visible group-hover:opacity-100"
                    >
                      <div class="px-3 py-2">
                        <p className="leading-6">
                          زمان تحویل کالا با ارسال رایگان حدودا یک ساعت نیم و
                          ارسال فوری 45 دقیقه خواهد بود.
                        </p>
                      </div>
                    </div>
                  </div>
                </span>
                <span className="opacity-60">
                  {order?.shipping === TAXI
                    ? `${taxiـfare} تومان`
                    : deliveryCost === 0
                    ? "رایگان"
                    : `${deliveryCost} تومان`}
                </span>
              </p>
              <CheckboxInput
                value={order.suggest}
                changeHandler={(e) =>
                  setOrder({
                    ...order,
                    suggest: !order.suggest,
                  })
                }
                label="درصورتی که کالایی ناموجود شد کالایی مشابه آن جایگزین شود"
              />
            </div>
            <p className="font-bold text-lg text-center mb-2">
              مبلغ قابل پرداخت :
            </p>
            <p className="font-bold text-2xl text-center text-rose-500 mb-4">
              <span>
                {order?.shipping === TAXI
                  ? (totalPrice + Number(taxiـfare)).toLocaleString()
                  : (totalPrice + Number(deliveryCost)).toLocaleString()}
              </span>
              <span className="font-medium text-sm mr-2">تومان</span>
            </p>
            {!!is_profile_complete ? (
              <button
                onClick={handleSaveOrder}
                className="relative bg-rose-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group "
              >
                <span className="bg-rose-400 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
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
                <span className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 flex items-center gap-2 -translate-y-1/2">
                  {loading ? "درحال ثبت سفارش" : "ادامه ثبت سفارش"}
                </span>
              </button>
            ) : (
              <div className="relative cursor-not-allowed bg-neutral-300 h-12 w-full text-black font-bold rounded-md overflow-hidden group ">
                <span className="bg-neutral-200 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-black"
                  >
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                  </svg>
                </span>
                <span className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 flex items-center gap-2 -translate-y-1/2">
                  ادامه ثبت سفارش
                </span>
              </div>
            )}
          </aside>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Checkout;
