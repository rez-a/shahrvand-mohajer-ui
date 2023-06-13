import React from 'react';
import Copyright from './Copyright';

const FooterInnerPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="border-t p-2 bg-white mt-5">
      <div className="py-4">
        <button
          onClick={scrollToTop}
          type="button"
          className="flex items-center mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="bg-zinc-100 rounded-full w-8 h-8 p-1 fill-rose-500"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
          </svg>
          <span className="text-zinc-500 font-semibold mr-1">
            برگشت به بالا
          </span>
        </button>
      </div>
      <div className="container mx-auto ">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center border-t pt-8 ">
          <div className="flex mb-4 flex-col md:flex-row items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
              </svg>
              <p className="font-semibold ml-2 whitespace-nowrap">
                تماس با پشتیبانی :
              </p>
            </div>
            <p className="text-gray-600">08638624080</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
              </svg>
              <p className="font-semibold  ml-2 whitespace-nowrap">
                آدرس فروشگاه :
              </p>
            </div>
            <p className="text-gray-600">
              مهاجران گلستان ششم بن بست گلها
            </p>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

FooterInnerPage.propTypes = {};

export default FooterInnerPage;
