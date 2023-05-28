import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { TIMEWORK } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import { Link } from 'react-router-dom';

const WorkingTime = () => {
  const { data: timeWork, isLoading } = useSWR(TIMEWORK, fetcher);
  return (
    <div
      className={`w-full  bg-rose-500 overflow-hidden transition-all text-center text-xs flex flex-col md:flex-row  items-center justify-center duration-300 ${
        isLoading ? 'h-0' : 'h-20 py-2 sm:h-18 md:h-16'
      }`}
    >
      <span className="text-white ml-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="fill-white inline ml-1"
        >
          <path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
        </svg>

        <span>ساعت کاری فروشگاه :</span>
      </span>
      <span className="bg-yellow-500 px-3 py-1 mt-2 md:mt-0 rounded-full">
        {timeWork?.data}
      </span>
      <Link to="tel:+989163986608"
      class="text-neutral-800 hover:text-white border border-nutext-neutral-800 hover:bg-nutext-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className='inline w-5 h-5' viewBox="0 0 24 24"><path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path></svg>
      تماس با مدیریت
      </Link>
    </div>
  );
};

WorkingTime.propTypes = {};

export default WorkingTime;
