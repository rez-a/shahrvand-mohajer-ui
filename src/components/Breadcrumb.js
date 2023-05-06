import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ links = [] }) => {
  return (
    <nav
      class=" py-4 px-4 mb-4 text-gray-700 border border-gray-100 rounded-md mt-2 bg-white mx-4 2xl:mx-0 hidden sm:flex"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center">
        <li class="inline-flex items-center">
          <Link
            to="/"
            class="inline-flex items-center text-xs text-gray-500 hover:text-rose-600 "
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4  fill-current ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            شهروند
          </Link>
        </li>
        {links.map((link, index) =>
          !link.toLink ? (
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left stroke-gray-500"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span class="ml-1 text-xs text-gray-500 ">
                  {link.title}
                </span>
              </div>
            </li>
          ) : (
            <li i key={index}>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left stroke-gray-500"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <Link
                  to={link.toLink}
                  class="ml-1 text-xs text-gray-500 hover:text-rose-600  "
                >
                  {link.title}
                </Link>
              </div>
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  links: PropTypes.array,
};

export default Breadcrumb;
