import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { TIMEWORK } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';

const WorkingTime = () => {
  const { data: timeWork, isLoading } = useSWR(TIMEWORK, fetcher);
  return (
    <div
      className={`w-full  bg-rose-500 overflow-hidden transition-all text-center font-bold flex flex-col md:flex-row   items-center justify-center duration-300 ${
        isLoading ? 'h-0' : 'h-20 py-2 sm:h-16'
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
          <path d="M17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681ZM12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20ZM11 8H13V14H11V8ZM8 1H16V3H8V1Z"></path>
        </svg>
        <span>ساعت کاری فروشگاه :</span>
      </span>
      <span className="bg-yellow-500 px-3 py-1 mt-2 md:mt-0 rounded-full">
        {timeWork?.data}
      </span>
    </div>
  );
};

WorkingTime.propTypes = {};

export default WorkingTime;
