import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/shared/Spinner';
import { LOGIN } from 'services/endPoints';
import Toast from 'utilities/sweetAlert';
import dispatcher from 'services/dispatcher';

const PhoneNumber = ({
  setSendVerifyCode,
  phoneNumber,
  setPhoneNumber,
}) => {
  const phoneNumberRegex = new RegExp('^(\\+98|0)?9\\d{9}$');

  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [loading, setLoading] = useState(false);

  const labelRef = useRef(null);

  const handleSendVerifyCode = async () => {
    setValidPhoneNumber(true);
    if (phoneNumberRegex.test(phoneNumber)) {
      setLoading(true);
      try {
        const response = await dispatcher(LOGIN, {
          mobile: phoneNumber,
        });
        if (response?.status === 'Success') {
          setSendVerifyCode(true);
        }
      } catch (err) {
        Toast.fire({
          title: 'بعد از 2 دقیقه مجددا تلاش کنید',
          icon: 'error',
        });
      }
      setLoading(false);
    } else {
      labelRef.current.style.animation =
        'buzz 0.5s linear forwards alternate';
      setValidPhoneNumber(false);
    }
  };

  const handlePhoneNumber = (phoneNumber) =>
    setPhoneNumber(phoneNumber);

  return (
    <form className="w-full px-6">
      <div>
        <label
          ref={labelRef}
          id="label"
          onAnimationEnd={(e) => {
            e.target.style = '';
          }}
          className={`text-sm font-semibold block mb-2 relative ${
            validPhoneNumber ? 'text-black' : 'text-rose-400'
          }`}
          htmlFor="phone-number"
        >
          شماره موبایل
        </label>
        <input
          value={phoneNumber}
          onChange={(e) => handlePhoneNumber(e.target.value)}
          className={`w-full placeholder:text-xs px-3 py-2 h-12 mb-3 rounded-md border outline-none  ${
            validPhoneNumber
              ? 'focus:border-gray-400'
              : 'border-rose-300 focus:border-rose-400'
          }`}
          maxLength={11}
          type="text"
          id="phone-number"
          placeholder="شماره موبایل خود را وارد کنید"
        />
      </div>
      <button
        type="button"
        disabled={false}
        onClick={handleSendVerifyCode}
        className="relative bg-rose-500 h-12 w-full text-white font-bold rounded-md overflow-hidden group"
      >
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
        <span className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap flex ">
          {loading && <Spinner />}
          <span className="mr-2">ارسال کد احراز هویت</span>
        </span>
      </button>
    </form>
  );
};

PhoneNumber.propTypes = {
  setSendVerifyCode: PropTypes.bool,
  phoneNumber: PropTypes.string,
  setPhoneNumber: PropTypes.func,
};

export default PhoneNumber;
