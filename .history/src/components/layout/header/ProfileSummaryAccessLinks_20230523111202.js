import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LogoutContext } from 'contexts/LogoutHandlerProvider';
import { UserContext } from 'contexts/UserProvider';

const ProfileSummaryAccessLinks = ({
  setShowProfileLinks,
  closeHandler,
}) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    window.document.addEventListener('click', closeHandler);

    return () =>
      window.document.removeEventListener('click', closeHandler);
  });

  const { logoutHandler } = useContext(LogoutContext);

  return (
    <div className="absolute border border-gray-200 bg-white sm:w-72 w-40 left-0 top-full rounded-lg text-sm mt-1 shadow-lg">
      <ul
        className="divide-y divide-gray-100"
        onClick={() => setShowProfileLinks(false)}
      >
        <li>
          <Link
            to="/profile/wallet"
            className="flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 495 495"
                className="w-6 h-6"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      className="fill-[#FF9811]"
                      d="M85,455h330v-45H40C40,434.81,60.19,455,85,455z"
                    ></path>
                    <path
                      className="fill-[#FFB655]"
                      d="M85,365c-24.81,0-45,20.19-45,45h375v-45H85z"
                    ></path>
                    <rect
                      x="247.5"
                      className="fill-[#FF5023]"
                      width="247.5"
                      height="90.25"
                    ></rect>
                    <path
                      className="fill-[#FF6243]"
                      d="M85,325h162.5V0H85C38.13,0,0,38.13,0,85v325C0,363.13,38.13,325,85,325z"
                    ></path>
                    <path
                      className="fill-[#FF5023]"
                      d="M247.5,325H85c-46.87,0-85,38.13-85,85s38.13,85,85,85h370V365h40v-90.25H247.5V325z M415,455H85 c-24.81,0-45-20.19-45-45s20.19-45,45-45h330V455z"
                    ></path>
                    <path
                      className="fill-[#FF7956]"
                      d="M247.5,274.75H495V90.25H247.5V274.75z M339.75,152.5c16.542,0,30,13.458,30,30s-13.458,30-30,30 s-30-13.458-30-30S323.208,152.5,339.75,152.5z"
                    ></path>
                    <path
                      className="fill-[#FFFFFF]"
                      d="M339.75,212.5c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30 S323.208,212.5,339.75,212.5z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>کیف پول</div>
            <div className="mr-auto">
              <div>
                {Number(user.wallet_balance).toLocaleString()}
              </div>
              <div className="text-xs font-light mr-1">تومان</div>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/main"
            className="flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
              </svg>
            </div>
            <div>پروفایل</div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/edit"
            className=" flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
              </svg>
            </div>
            <div>ویرایش اطلاعات</div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/addresses"
            className=" flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </div>
            <div>آدرس ها</div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/orders"
            className=" flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M17 3.99986V2.06738C17 1.79124 17.2239 1.56738 17.5 1.56738C17.617 1.56738 17.7302 1.60839 17.8201 1.68327L21.9391 5.11575C22.1512 5.29253 22.1799 5.60782 22.0031 5.81995C21.9081 5.93395 21.7674 5.99986 21.619 5.99986H2V3.99986H17ZM2 17.9999H22V19.9999H2V17.9999ZM2 10.9999H22V12.9999H2V10.9999Z"></path>
              </svg>
            </div>
            <div>سفارش ها</div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile/payments"
            className=" flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM20.0049 12H4.00488V19H20.0049V12ZM20.0049 8V5H4.00488V8H20.0049Z"></path>
              </svg>
            </div>
            <div>پرداخت ها</div>
          </Link>
        </li>
        <li>
          <button
            onClick={() => logoutHandler()}
            className=" flex items-center text-neutral-800 font-medium hover:bg-gray-50"
          >
            <div className="ml-1 p-5 px-4 bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
              </svg>
            </div>
            <div>خروج از حساب کاربری</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

ProfileSummaryAccessLinks.propTypes = {};

export default ProfileSummaryAccessLinks;
