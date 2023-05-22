import Spinner from 'components/shared/Spinner';
import image from 'assets/images/lottery.jpg';
import React from 'react';
import ModalLayout from 'components/shared/modal/ModalLayout';
import { useState } from 'react';
import LotteryWinnersModal from './LotteryWinnersModal';

const LotteryCard = () => {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <div class=" bg-white  rounded-xl shadow-xl pb-4">
        <div className=" h-48 relative -mt-10 mb-4 shadow-xl rounded-xl overflow-hidden w-11/12 mx-auto">
          <img src={image} alt="" />
        </div>

        <div class="px-3">
          <h5 class="mb-2 text-base font-bold text-gray-900">
            عنوان قرعه کشی
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            توضیحات قرعه کشی توضیحات قرعه کشی توضیحات قرعه کشی توضیحات
            قرعه کشی توضیحات قرعه کشی توضیحات قرعه کشی
          </p>
          <div className="text-neutral-500 text-xs flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
            </svg>
            <p>تاریخ شروع : </p>
            <p>1401/02/01</p>
          </div>
          <div className="text-neutral-500 text-xs flex items-center gap-1 my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
            </svg>
            <p>تاریخ پایان : </p>
            <p>1401/02/01</p>
          </div>
          <button
            onClick={() => setShow(true)}
            className="relative bg-sky-500 h-10 w-full text-white font-bold rounded-md overflow-hidden group block"
          >
            <span className="bg-sky-400 h-full flex items-center w-12 px-3 z-0 rounded-l-full absolute right-0 top-0 group-hover:w-full group-hover:rounded-l-none transition-all duration-300">
              {false ? (
                <Spinner />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-white"
                >
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              )}
            </span>
            <span className="z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
              مشاهده برندگان
            </span>
          </button>
        </div>
      </div>
      <ModalLayout isShow={isShow} setShow={setShow}>
        <LotteryWinnersModal />
      </ModalLayout>
    </>
  );
};

export default LotteryCard;
