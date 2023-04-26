import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/shared/Spinner';
import Timer from 'components/shared/Timer';

const VerifyCode = ({ setSendVerifyCode, phoneNumber }) => {
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <form className="w-full px-6">
      <div>
        <div className="w-full flex items-center justify-between mb-3">
          <div>
            <button
              onClick={() => setSendVerifyCode(false)}
              className="text-xs text-gray-400 pl-2 hover:text-black transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="inline fill-current"
                width={18}
                height={18}
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="mr-1">ویرایش</span>
            </button>
            <label
              className="text-sm font-semibold mb-2 border-r border-r-gray-300 pr-2"
              htmlFor="phone-number"
            >
              کد ارسالی به {phoneNumber}
            </label>
          </div>
          <Timer initialMinute={2} />
        </div>
        <input
          className="w-full placeholder:text-xs px-3 py-2 h-12 mb-3 rounded-md border outline-none focus:border-gray-400"
          maxLength={11}
          type="text"
          id="phone-number"
          placeholder="کد ارسال شده را وارد کنید"
        />
      </div>
      <button
        type="button"
        onClick={handleLogin}
        disabled={false}
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
          {false && <Spinner />}
          <span className="mr-2">ورود</span>
        </span>
      </button>
    </form>
  );
};

VerifyCode.propTypes = {
  setSendVerifyCode: PropTypes.bool,
  phoneNumber: PropTypes.string,
};

export default VerifyCode;
