import Spinner from 'components/shared/Spinner';
import image from 'assets/images/lottery.jpg';
import React from 'react';
import ModalLayout from 'components/shared/modal/ModalLayout';
import { useState } from 'react';
import LotteryWinnersModal from './LotteryWinnersModal';

const LotteryCard = () => {
  const [isShow, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
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
            // disabled={loading}
            // onClick={handleEditProfile}
            className="bg-sky-500/90  text-white w-full  py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              {loading && <Spinner />}
              <span className="mr-2">مشاهده برنده ها</span>
            </div>
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
