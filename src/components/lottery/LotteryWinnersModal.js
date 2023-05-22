import TitleIcon from 'components/shared/TitleIcon';
import React from 'react';

const LotteryWinnersModal = () => {
  return (
    <div className="rounded bg-clip-border overflow-hidden text-gray-700 shadow-none bg-white max-w-2xl w-full">
      <div className="p-4">
        <div className=" flex items-center mb-4">
          <TitleIcon />
          <h2 className="mr-2 text-zinc-500 font-bold">
            عنوان قرعه کشی
          </h2>
        </div>
        <div className="flex items-center gap-4">
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
        </div>
        <p className="text-justify text-sm text-neutral-500">
          در صورتی که نام شما درمیان برندگان است ، بزودی پشتیبان
          فروشگاه شهروند با شما تماس خواهند گرفت.
        </p>
      </div>

      <div className="p-4 flex items-center">
        <TitleIcon />
        <h2 className="mr-2 text-zinc-500 font-bold">لیست برندگان</h2>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="table w-full table-fixed">
              <th class="px-6 py-3 text-base">کاربر</th>
              <th class="px-6 py-3 text-base">جایزه</th>
            </tr>
          </thead>
          <tbody className="max-h-52 overflow-auto block ">
            {[...Array(5)].map((winner) => (
              <tr class="bg-white border-b table w-full table-fixed">
                <th class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="bg-zinc-200 p-2 rounded-full ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                    </svg>
                  </div>
                  <div class="pl-3">
                    <div class="text-sm font-semibold">رضا حسنی</div>
                    <div class="font-normal text-xs text-gray-500 ">
                      2971***0930
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">لپ تاپ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LotteryWinnersModal;
