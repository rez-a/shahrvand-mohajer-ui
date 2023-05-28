import React, { useEffect, useState } from 'react';

const Callback = () => {
  const [status, setStatus] = useState(false);
  const [style, setStyle] = useState(createStyle(status));

  useEffect(() => {
    setStyle(createStyle(status));
  }, [status]);

  function createStyle(status) {
    return {
      border: status ? `border-sky-500` : `border-rose-500`,
      bg: status ? `bg-sky-100` : `bg-rose-100`,
      fill: status ? `fill-sky-500` : `fill-rose-500`,
      text: status ? `text-sky-700` : `text-rose-700`,
      buttonClass: status
        ? `bg-sky-500  hover:bg-sky-500 bg-sky-500/90 shadow-sky-500/50`
        : `bg-rose-500  hover:bg-rose-500 bg-rose-500/90 shadow-rose-500/50`,
    };
  }

  return (
    <main className="container mx-auto ">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative border rounded-md  mx-auto p-8 pb-32 ${style.bg} ${style.border}`}
        >
          {false ? (
            <svg
              className={`w-32 h-32 mx-auto ${style.fill}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-32 h-32 mx-auto ${style.fill}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
            </svg>
          )}

          <h2
            className={`text-2xl font-bold text-center ${style.text} mt-4`}
          >
            {status
              ? 'پرداخت با موفقیت انجام شد'
              : 'پرداخت انجام نشد'}
          </h2>
        </div>
        <div className="bg-white w-[calc(100%_-_1rem)]  md:w-2/3 relative -top-20 mx-auto p-4 rounded-lg">
          <ul className="divide-y">
            <li className="flex items-center justify-between py-4">
              <p className="text-sm text-gray-500">کد رهگیری</p>
              <p className={`font-semibold ${style.text}`}>
                0123456789
              </p>
            </li>
            <li className="flex items-center justify-between py-4">
              <p className="text-sm text-gray-500">تراکنش</p>
              <p className={`font-semibold ${style.text}`}>
                <span className={` px-3 py-1 rounded-md ${style.bg}`}>
                  {status ? 'موفق' : 'ناموفق'}
                </span>
              </p>
            </li>
            <li className="flex items-center justify-between py-4">
              <p className="text-sm text-gray-500">مبلغ پرداختی</p>
              <p className={`font-semibold ${style.text}`}>
                <span>12,000</span>
                <span className="text-xs font-light mr-1">تومان</span>
              </p>
            </li>
            <li className="flex items-center justify-between py-4">
              <p className="text-sm text-gray-500">تاریخ تراکنش</p>
              <p className={`font-semibold ${style.text}`}>
                1401/02/03
              </p>
            </li>
          </ul>
          <button
            className={`relative  h-12 overflow-hidden group block text-white w-full py-2 rounded-md font-bold shadow-lg  transition-all duration-300 ${style.buttonClass}`}
          >
            <span className="z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
              بازگشت به صفحه اصلی
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Callback;
