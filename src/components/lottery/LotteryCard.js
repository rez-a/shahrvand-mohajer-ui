import image from 'assets/images/lottery.jpg';
import React from 'react';

const LotteryCard = ({ lottery, setLottery }) => {
  const { Name, Description, EndAt, StartAt, ImageUrl } = lottery;
  return (
    <>
      <div class=" bg-white  rounded-xl shadow-xl py-1 relative pt-28 group">
        <div className=" h-32 absolute mb-4 shadow-xl rounded-xl overflow-hidden w-11/12 mx-auto left-1/2 -translate-x-1/2 -top-10">
          <img
            className="bg-gray-200 group-hover:scale-110 transition-all duration-200"
            src={ImageUrl}
            alt="lottery"
          />
        </div>

        <div class="px-3">
          <h5 class="mb-4 text-base font-bold text-gray-900 truncate group-hover:text-rose-600 transition-all duration-200">
            {Name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm border-b pb-3 flex items-center gap-2">
            <span className="truncate block">{Description}</span>
          </p>
          <div className="text-neutral-500 text-xs flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#fi-rr-calendar__a)" fill="#9CA3AF">
                <path d="M12.667 1.333H12V.667a.666.666 0 1 0-1.333 0v.666H5.333V.667A.667.667 0 1 0 4 .667v.666h-.667A3.337 3.337 0 0 0 0 4.667v8A3.337 3.337 0 0 0 3.333 16h9.334A3.337 3.337 0 0 0 16 12.667v-8a3.338 3.338 0 0 0-3.333-3.334ZM1.333 4.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v.666H1.333v-.666Zm11.334 10H3.333a2 2 0 0 1-2-2v-6h13.334v6a2 2 0 0 1-2 2Z" />
                <path d="M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3.333 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.667 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </g>
              <defs>
                <clipPath id="fi-rr-calendar__a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
            <p>تاریخ شروع : </p>
            <p>{StartAt}</p>
          </div>
          <div className="text-neutral-500 text-xs flex items-center gap-1 my-2">
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#fi-rr-calendar__a)" fill="#9CA3AF">
                <path d="M12.667 1.333H12V.667a.666.666 0 1 0-1.333 0v.666H5.333V.667A.667.667 0 1 0 4 .667v.666h-.667A3.337 3.337 0 0 0 0 4.667v8A3.337 3.337 0 0 0 3.333 16h9.334A3.337 3.337 0 0 0 16 12.667v-8a3.338 3.338 0 0 0-3.333-3.334ZM1.333 4.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v.666H1.333v-.666Zm11.334 10H3.333a2 2 0 0 1-2-2v-6h13.334v6a2 2 0 0 1-2 2Z" />
                <path d="M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3.333 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.667 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </g>
              <defs>
                <clipPath id="fi-rr-calendar__a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
            <p>تاریخ پایان : </p>
            <p>{EndAt}</p>
          </div>
        </div>
        <button
          onClick={() => setLottery(lottery)}
          className="absolute w-full h-full top-0 left-0"
        ></button>
      </div>
    </>
  );
};

export default LotteryCard;
