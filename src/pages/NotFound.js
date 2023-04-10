import React from 'react';
import PropTypes from 'prop-types';
import error404 from 'assets/images/404-Error.svg';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className="text-center">
      <div className="max-w-xl mx-auto">
        <img src={error404} alt="error 404" />
      </div>
      <h2 className="text-black font-bold text-xl text-center">
        صفحه ای که دنبال آن بودید یافت نشد!!
      </h2>
      <Link
        to="/"
        className="bg-rose-500/90 mt-4 flex group mx-auto items-center justify-center text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300"
      >
        بازگشت به صفحه اصلی
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-current mr-2 group-hover:-translate-x-2 transition-all duration-200"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
      </Link>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
