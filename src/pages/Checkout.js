import CheckboxInput from 'components/shared/inputs/CheckboxInput';
import RadioInput from 'components/shared/inputs/RadioInput';
import TextAreaInput from 'components/shared/inputs/TextAreaInput';
import ModalLayout from 'components/shared/modal/ModalLayout';
import TitleIcon from 'components/shared/TitleIcon';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [editAddress, setEditAddress] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  return (
    <>
      <main className="grid grid-cols-1 xl:grid-cols-7 gap-4 items-start mx-4 2xl:mx-0">
        <section className="col-span-1 xl:col-span-5">
          <div className="mb-12">
            <div className="flex items-center mb-4 justify-between">
              <h2 className="text-zinc-500 font-bold flex items-center">
                <TitleIcon />
                <span className="mr-1">انتخاب آدرس تحویل سفارش</span>
              </h2>
              {editAddress && (
                <button
                  onClick={() => setEditAddress(false)}
                  className="bg-gray-100 p-1 rounded-full hover:bg-gray-200/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current"
                  >
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                  </svg>
                </button>
              )}
            </div>
            {!editAddress ? (
              <div className="border-r-2 border-r-rose-500 pr-2">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-8 mb-6 md:mb-2">
                    <p className="text-zinc-500">
                      گیرنده :
                      <span className="text-black font-semibold mr-1">
                        جلال بهرامی راد
                      </span>
                    </p>
                    <button
                      onClick={() => setShowModalEdit(true)}
                      className="text-xs text-rose-500 underline decoration-dotted"
                    >
                      اصلاح این آدرس
                    </button>
                  </div>
                  <button
                    onClick={() => setEditAddress(true)}
                    className="border rounded py-1 px-2 flex items-center bg-white border-gray-100 hover:bg-gray-50/50 text-zinc-500 transition"
                  >
                    تغییر آدرس ارسال
                  </button>
                </div>
                <p className="text-zinc-500 my-3 text-sm">
                  شماره تماس :
                  <span className="text-black font-semibold mr-1">
                    09302582971
                  </span>
                </p>
                <p>
                  استان خراسان شمالی ، ‌شهر بجنورد ، خراسان
                  شمالی-بجنورد
                </p>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setShowModalCreate(true)}
                  className="border w-full border-dashed bg-white text-center text-sm text-zinc-400 rounded-md py-4 mb-3"
                >
                  <span>ایجاد آدرس جدید</span>
                </button>
                <div className="border border-sky-400 bg-sky-50/50 p-4 rounded-md mb-3">
                  <div className="flex flex-col items-start gap-4 justify-between">
                    <div className="flex items-center gap-8">
                      <p className="text-zinc-500">
                        گیرنده :
                        <span className="text-black font-semibold mr-1">
                          جلال بهرامی راد
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowModalEdit(true)}
                        className="border  rounded py-1 px-2 flex items-center bg-white text-xs border-gray-200 hover:bg-gray-50/50 text-zinc-500 transition-all duration-300"
                      >
                        ویرایش
                      </button>
                      <button className="border  rounded py-1 px-2 flex items-center bg-white text-xs border-gray-200 hover:bg-gray-50/50 text-zinc-500 transition-all duration-300">
                        حذف
                      </button>
                    </div>
                  </div>
                  <p className="text-zinc-500 my-3 text-sm">
                    شماره تماس :
                    <span className="text-black font-semibold mr-1">
                      09302582971
                    </span>
                  </p>
                  <p>
                    استان خراسان شمالی ، ‌شهر بجنورد ، خراسان
                    شمالی-بجنورد
                  </p>
                </div>
                <div className="border border-gray-100 bg-white p-4 rounded-md mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <p className="text-zinc-500">
                        گیرنده :
                        <span className="text-black font-semibold mr-1">
                          جلال بهرامی راد
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowModalEdit(true)}
                        className="border  rounded py-1 px-2 flex items-center bg-white text-xs border-gray-200 hover:bg-gray-50/50 text-zinc-500 transition-all duration-300"
                      >
                        ویرایش
                      </button>
                      <button className="border  rounded py-1 px-2 flex items-center bg-white text-xs border-gray-200 hover:bg-gray-50/50 text-zinc-500 transition-all duration-300">
                        حذف
                      </button>
                    </div>
                  </div>
                  <p className="text-zinc-500 my-3 text-sm">
                    شماره تماس :
                    <span className="text-black font-semibold mr-1">
                      09302582971
                    </span>
                  </p>
                  <p>
                    استان خراسان شمالی ، ‌شهر بجنورد ، خراسان
                    شمالی-بجنورد
                  </p>
                </div>
              </div>
            )}
          </div>
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
                />
                <RadioInput
                  label="پرداخت آنلاین"
                  id="online-payment"
                  name="payment"
                  className="sm:w-1/2"
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
                  label="ارسال رایگان"
                  id="free-delivery"
                  name="delivery"
                  description="حدودا یک ساعت"
                  className="sm:w-1/2"
                />
                <RadioInput
                  label="ارسال فوری"
                  id="Immediate-delivery"
                  name="delivery"
                  description="7,000 تومان حدودا 30 دقیقه"
                  className="sm:w-1/2"
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
        </section>
        <aside className="bg-gray-50/50 border rounded-md border-gray-100 bg-white xl:col-span-2 p-3 xl:sticky top-24 mb-3">
          <div className="mb-3 border-b pb-4">
            <p className="flex items-center justify-between mb-3">
              <span className="font-bold">مبلغ کل (2کالا)</span>
              <span className="opacity-60">16,879,000 تومان</span>
            </p>
            <p className="flex items-center justify-between mb-3 text-sky-500">
              <span className="font-bold">سود شما از خرید</span>
              <span className="opacity-100">16,879,000 تومان</span>
            </p>
            <p className="flex items-center justify-between mb-3">
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
                        ارسال رایگان با خرید بالای 60,000 تومان
                      </p>
                    </div>
                  </div>
                </div>
              </span>
              <span className="opacity-60">وابسته به نحوه ارسال</span>
            </p>
            <CheckboxInput label="درصورتی که کالایی ناموجود شد کالایی مشابه آن جایگزین شود" />
          </div>
          <p className="font-bold text-lg text-center mb-2">
            مبلغ قابل پرداخت :
          </p>
          <p className="font-bold text-2xl text-center text-rose-500 mb-4">
            <span>16,879,000</span>
            <span className="font-medium text-sm mr-2">تومان</span>
          </p>
          <button className="relative bg-rose-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group">
            <span className="bg-rose-400 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-white"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </span>
            <span className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              ثبت سفارش
            </span>
          </button>
        </aside>
      </main>
      <ModalLayout
        isShow={showModalCreate}
        setShow={() => setShowModalCreate(false)}
      >
        <div className="relative flex flex-col rounded-md bg-clip-border text-gray-700 shadow-none bg-white max-w-lg w-full  ">
          <h4 className="text-xl font-semibold text-center border-b mx-4 py-3">
            ایجاد آدرس جدید
          </h4>

          <form className="mt-8 mb-2 px-4 py-3">
            <TextAreaInput
              label="آدرس"
              placeholder="آدرس"
              id="address"
            />
            <button
              className="mt-6 w-full  rounded-md bg-rose-500 py-3 px-6 text-center  text-sm font-bold  text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 duration-300"
              type="button"
            >
              افزودن
            </button>
          </form>
        </div>
      </ModalLayout>
      <ModalLayout
        isShow={showModalEdit}
        setShow={() => setShowModalEdit(false)}
      >
        <div className="relative flex flex-col rounded-md bg-clip-border text-gray-700 shadow-none bg-white max-w-lg w-full  ">
          <h4 className="text-xl font-semibold text-center border-b mx-4 py-3">
            ویرایش آدرس
          </h4>

          <form className="mt-8 mb-2 px-4 py-3">
            <TextAreaInput
              label="آدرس"
              placeholder="آدرس"
              id="address"
            />
            <button
              className="mt-6 w-full  rounded-md bg-rose-500 py-3 px-6 text-center  text-sm font-bold  text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 duration-300"
              type="button"
            >
              ویرایش
            </button>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};

export default Checkout;
