import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InitAlert = ({ message }) => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={` flex items-center px-4 justify-center top-0 left-0 right-0 z-40 w-full  overflow-x-hidden overflow-y-auto inset-0 h-full bg-black/10 backdrop-blur-sm ${
        show ? 'fixed' : 'hidden'
      }`}
    >
      <div className="bg-white max-w-xl w-96 rounded-xl text-center">
        <div className="py-5 border-b font-bold  ">
          پیام مدیریت به مشتریان
        </div>
        <div className="leading-8 px-7 py-6 text-center">
          به هایپر مارکت آنلاین شهروند خوش آمدید
          <br />
          {message.data}
        </div>
        <button
          onClick={() => setShow(false)}
          className="bg-blue-600 w-full hover:opacity-80 text-white py-5 text-sm font-semibold rounded-b-xl transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 fill-current ml-2 inline"
            viewBox="0 0 24 24"
          >
            <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
          </svg>
          بــــاشـــــه
        </button>
      </div>
    </div>
  );
};

InitAlert.propTypes = { message: PropTypes.object };

export default InitAlert;
