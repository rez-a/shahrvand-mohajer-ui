import { LogoutContext } from 'contexts/LogoutHandlerProvider';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProfileAccessLink = ({ user, setShowProfileAccess }) => {
  const { logoutHandler } = useContext(LogoutContext);

  const logout = () => {
    logoutHandler();
    setShowProfileAccess(false);
  };
  return (
    <ul className="bg-gray-50/30 mt-2 divide-y divide-gray-50">
      <li className="border-b border-gray-100">
        <Link
          to="/profile/wallet"
          className="flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
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
              {!!user?.wallet_balance
                ? Number(user.wallet_balance).toLocaleString()
                : 0}
              <span className="text-xs font-light mr-1">تومان</span>
            </div>
          </div>
        </Link>
        <Link
          to="/profile/wallet"
          className="flex items-center text-neutral-800 hover:bg-gray-50 overflow-hidden"
        >
          <div className="flex items-start ml-1 px-4 pl-1 py-3 after:border-gray-300 after:border-b after:w-5 after:mr-1 after:h-2 after:inline-flex ">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className=" border-gray-100  font-bold py-3 w-full">
            <span>امتیاز سفارش</span>
          </div>
          <div className="mr-auto">
            <div className="pr-2 font-bold px-4 py-3 w-full">
              {!!user?.score_order
                ? Number(user.score_order).toLocaleString()
                : 0}
              <span className="text-xs font-light mr-1">امتیاز</span>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/profile/main"
          className={
            'hover:bg-gray-100 text-sm flex items-center group transition-all duration-300 text-[#1a2947] p-4'
          }
        >
          <span className="ml-3  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-current"
            >
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
            </svg>
          </span>
          <span>پروفایل</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile/edit"
          className={
            'hover:bg-gray-100 text-sm flex items-center group transition-all duration-300 text-[#1a2947] p-4'
          }
        >
          <span className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-current"
            >
              <path d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </span>
          <span>ویرایش اطلاعات</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile/orders"
          className={
            'hover:bg-gray-100 text-sm flex items-center group transition-all duration-300 text-[#1a2947] p-4'
          }
        >
          <span className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-current"
            >
              <path d="M17 3.99986V2.06738C17 1.79124 17.2239 1.56738 17.5 1.56738C17.617 1.56738 17.7302 1.60839 17.8201 1.68327L21.9391 5.11575C22.1512 5.29253 22.1799 5.60782 22.0031 5.81995C21.9081 5.93395 21.7674 5.99986 21.619 5.99986H2V3.99986H17ZM2 17.9999H22V19.9999H2V17.9999ZM2 10.9999H22V12.9999H2V10.9999Z"></path>
            </svg>
          </span>
          <span>سفارش ها</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile/payments"
          className={
            'hover:bg-gray-100 text-sm flex items-center group transition-all duration-300 text-[#1a2947] p-4'
          }
        >
          <span className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM20.0049 12H4.00488V19H20.0049V12ZM20.0049 8V5H4.00488V8H20.0049Z"></path>
            </svg>
          </span>
          <span>پرداخت ها</span>
        </Link>
      </li>
      <li>
        <button
          onClick={logout}
          className={
            'hover:bg-gray-100 text-sm flex items-center group w-full transition-all duration-300 text-[#1a2947] p-4'
          }
        >
          <span className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-current"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
            </svg>
          </span>
          <span>خروج از حساب کاربری</span>
        </button>
      </li>
    </ul>
  );
};

export default ProfileAccessLink;
