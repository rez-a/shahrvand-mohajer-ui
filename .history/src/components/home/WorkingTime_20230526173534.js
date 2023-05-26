import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { TIMEWORK } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';

const WorkingTime = () => {
  const { data: timeWork, isLoading } = useSWR(TIMEWORK, fetcher);
  return (
    <div
      className={`w-full  bg-rose-500 overflow-hidden transition-all text-center text-xs flex flex-col md:flex-row  items-center justify-center duration-300 ${
        isLoading ? 'h-0' : 'h-20 py-2 sm:h-18 md:h-16'
      }`}
    >

      <button disabled type="button" class="py-1 px-5 mr-2 text-sm font-medium text-gray-900 bg-black/40 rounded-lg border border-black/30 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700">
      <div className="text-white ml-2">
        <span>ساعت کاری فروشگاه :</span>
      </div>
      <div className="bg-yellow-500 px-3 py-1 mt-2 text-xs md:mt-0 rounded-full">
        {timeWork?.data}
      </div>
</button>

    </div>
  );
};

WorkingTime.propTypes = {};

export default WorkingTime;
