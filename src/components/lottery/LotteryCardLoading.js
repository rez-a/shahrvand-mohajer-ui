import React from 'react';

const LotteryCardLoading = () => {
  return (
    <>
      <div class=" bg-white  rounded-xl shadow-xl py-1 relative pt-28">
        <div className=" h-32 loading-bg absolute mb-4 shadow-xl rounded-xl overflow-hidden w-11/12 mx-auto left-1/2 -translate-x-1/2 -top-10"></div>
        <div class="px-3">
          <h5 class="mb-2 text-base font-bold loading-bg w-1/2 h-6"></h5>
          <p class="mb-3 font-normal text-gray-700 text-sm border-b pb-3 loading-bg h-14"></p>
          <div className="text-neutral-500 text-xs flex items-center gap-1 h-4 w-1/2 loading-bg"></div>
          <div className="text-neutral-500 text-xs flex items-center gap-1 my-2 h-4 w-1/2 loading-bg"></div>
        </div>
      </div>
    </>
  );
};

export default LotteryCardLoading;
