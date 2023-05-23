import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogoutContext } from "contexts/LogoutHandlerProvider";
import { UserContext } from "contexts/UserProvider";

const ProfileSummaryAccessLinks = ({ setShowProfileLinks, closeHandler }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    window.document.addEventListener("click", closeHandler);

    return () => window.document.removeEventListener("click", closeHandler);
  });

  const { logoutHandler } = useContext(LogoutContext);

  return (
    <div className="absolute border border-gray-200 bg-white sm:w-72 w-40 left-0 top-full rounded-lg text-sm mt-1 shadow-lg">
      <ul className="" onClick={() => setShowProfileLinks(false)}>
        <li>
          <Link
            to="/profile/wallet"
            className="flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden border-b border-gray-100"
          >
            <div className="flex items-start ml-1 px-4 pl-1 py-3 after:border-gray-300 after:border-b after:w-5 after:mr-1 after:h-2 after:inline-flex ">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
            <div className=" border-gray-100  font-bold py-3 w-full">
              <span>کیف پول</span>
            </div>
            <div className="mr-auto">
              <div className="pr-2 font-bold px-4 py-3 w-full">
                {Number(user.wallet_balance).toLocaleString()}
                <span className="text-xs font-light mr-1">
                تومان
                </span>
              </div>
            </div>
          </Link>
          <Link
            to="/profile/wallet"
            className="flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden border-b border-gray-100"
          >
            <div className="flex items-start ml-1 px-4 pl-1 py-3 after:border-gray-300 after:border-b after:w-5 after:mr-1 after:h-2 after:inline-flex ">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
            <div className=" border-gray-100  font-bold py-3 w-full">
              <span>
              امتیاز سفارش
              </span>
            </div>
            <div className="mr-auto">
              <div className="pr-2 font-bold px-4 py-3 w-full">
                {Number(user.wallet_balance).toLocaleString()}
                <span className="text-xs font-light mr-1">امتیاز</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/main"
            className="flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.307 19.257C16.923 17.417 14.705 16 12 16c-2.705 0-4.923 1.417-5.307 3.257m7.428-11.378A3 3 0 1 1 9.88 12.12a3 3 0 0 1 4.24-4.24"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>پروفایل</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/edit"
            className=" flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12.586 21.004H10v-2.587a1 1 0 0 1 .293-.708l4.002-4.001a1 1 0 0 1 1.415 0l1.586 1.586a1 1 0 0 1 0 1.415l-4.002 4.002a1 1 0 0 1-.707.293Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.002 21.004h1a3.001 3.001 0 0 0 3.002-3.002v-7.336a3 3 0 0 0-1.159-2.368L13.843 3.63a3.001 3.001 0 0 0-3.686 0L4.155 8.298a3.001 3.001 0 0 0-1.159 2.368v7.337a3.001 3.001 0 0 0 3.001 3h1"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>ویرایش اطلاعات</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/addresses"
            className=" flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.997 13.153c-1.837.825-3 2.017-3 3.349 0 2.486 4.03 4.502 9.003 4.502s9.004-2.016 9.004-4.502c0-1.332-1.164-2.524-3.002-3.349"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.653 17.002a6.217 6.217 0 0 1-3.653 1 6.217 6.217 0 0 1-3.654-1M14.2 3.91a3.118 3.118 0 1 1-4.409 4.41 3.118 3.118 0 0 1 4.41-4.41M12 9.23v5.771"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>آدرس ها</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/orders"
            className=" flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18 21H6a3 3 0 0 1-2.995-3.166l.614-11.056A4 4 0 0 1 7.613 3h8.775a4 4 0 0 1 3.994 3.778l.614 11.055A3.001 3.001 0 0 1 18 21Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16 7.75a4 4 0 0 1-8 0"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>سفارش ها</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/payments"
            className=" flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.003 16.002H3.997a1 1 0 0 1-1-1V4.996a1 1 0 0 1 1-1h16.006a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 16.002v5.002m0-13.006V12M7.998 8.999v3m8.004-2v2m-7.003 9.005H15m-3-17.1v-.908"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>پرداخت ها</span>
            </div>
          </Link>
        </li>
        <li>
          <button
            onClick={() => logoutHandler()}
            className=" flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
          >
            <div className="ml-1 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.004 5.497h-4.002A4.002 4.002 0 0 0 13 9.5V11"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m18.503 2.996 2.5 2.501-2.5 2.501M21.004 12A9.004 9.004 0 1 1 12 2.996"
                />
              </svg>
            </div>
            <div className="border-b border-gray-100 pr-2 font-bold px-4 py-3 w-full">
              <span>خروج از حساب کاربری</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

ProfileSummaryAccessLinks.propTypes = {};

export default ProfileSummaryAccessLinks;
