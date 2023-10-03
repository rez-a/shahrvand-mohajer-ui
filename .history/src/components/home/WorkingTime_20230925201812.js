import React from "react";
import PropTypes from "prop-types";
import useSWR from "swr";
import { TIMEWORK } from "services/endPoints";
import { fetcher } from "services/swr/fetcher";
import { Link } from "react-router-dom";

const WorkingTime = () => {
  const { data: timeWork, isLoading } = useSWR(TIMEWORK, fetcher);
  return (
    <div
      className={`w-full  bg-rose-500 overflow-hidden transition-all text-center text-xs flex flex-col md:flex-row  items-center justify-center duration-300 ${
        isLoading ? "h-0" : "h-40 py-2 sm:h-18 md:h-16"
      }`}
    >
      <div className="bg-yellow-500 text-black border border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        ساعت کاری فروشگاه :
        <span className="bg-yellow-500 mr-1">{timeWork?.data}</span>
      </div>

      <Link
        to="tel:+989163986608"
        className=" text-white border border-blue-800 bg-blue-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-neutral-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-5 h-5 ml-2 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
        </svg>
        تماس با مدیریت
      </Link>
      <Link
        to="/contact-us"
        className=" text-white border border-neutral-800 bg-neutral-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-neutral-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-5 h-5 ml-2 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M20.22 8.771 13.216 3.41a2 2 0 0 0-2.433 0L3.78 8.77a2 2 0 0 0-.785 1.59v8.642a2 2 0 0 0 2.001 2.001h14.006a2 2 0 0 0 2-2V10.36a2 2 0 0 0-.784-1.588Z"
            clip-rule="evenodd"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m3.184 9.516 5.318 4.073A2 2 0 0 0 9.72 14h4.56c.44 0 .868-.145 1.217-.412l5.32-4.073M3.17 19.823l5.288-5.242c.375-.372.88-.58 1.409-.58h4.27a2 2 0 0 1 1.409.58l5.283 5.24"
          />
        </svg>
        انتقاد و پیشنهاد
      </Link>
    </div>
  );
};

WorkingTime.propTypes = {};

export default WorkingTime;
