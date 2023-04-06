import React from 'react';
import PropTypes from 'prop-types';

const PaginationLayout = (props) => {
  return (
    <div>
      <ul className="flex items-center space-x-4 space-x-reverse my-20 justify-center">
        <li className="inline-flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="hover:fill-rose-500 transition-all duration-300"
            >
              <path d="M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z"></path>
            </svg>
          </button>
        </li>
        <li>
          <button className="bg-rose-50/50 py-1 px-3 rounded-md border border-rose-100 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300">
            1
          </button>
        </li>
        <li>
          <button className=" py-1 px-3 rounded-md border bg-rose-500 border-rose-500 text-white transition-all duration-300">
            2
          </button>
        </li>
        <li>
          <button className="bg-rose-50/50 py-1 px-3 rounded-md border border-rose-100 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300">
            3
          </button>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              fill="#000"
            ></path>
          </svg>
        </li>
        <li>
          <button className="bg-rose-50/50 py-1 px-3 rounded-md border border-rose-100 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300">
            7
          </button>
        </li>
        <li className="inline-flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="hover:fill-rose-500 transition-all duration-300"
            >
              <path d="M4.83594 12.0001L11.043 18.2072L12.4573 16.793L7.66436 12.0001L12.4573 7.20718L11.043 5.79297L4.83594 12.0001ZM10.4858 12.0001L16.6929 18.2072L18.1072 16.793L13.3143 12.0001L18.1072 7.20718L16.6929 5.79297L10.4858 12.0001Z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

PaginationLayout.propTypes = {};

export default PaginationLayout;
