import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const PaginationItems = ({ page, currentPage }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  return (
    <li>
      <Link
        to={`${location.pathname}?${queryString.stringify(
          { ...params, page },
          {
            arrayFormat: 'bracket',
            skipEmptyString: true,
            skipNull: true,
          }
        )}`}
        className={` py-1 px-3 rounded-md border  hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300 ${
          page === currentPage
            ? 'border-rose-500 bg-rose-500 text-white'
            : 'bg-rose-50/50 border-rose-100 text-black'
        }`}
      >
        {page}
      </Link>
    </li>
  );
};

PaginationItems.propTypes = {};

export default PaginationItems;
