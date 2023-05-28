import React from 'react';
import PropTypes from 'prop-types';

const SortItem = ({ clickHandler, querySort, type, title }) => {
  return (
    <li className="text-center xl:text-right w-1/3 sm:w-auto">
      <button
        onClick={clickHandler}
        className={`px-3 py-1 rounded-md border border-transparent transition-all duration-200 ${
          querySort === type
            ? 'bg-rose-500 text-white  font-bold'
            : ' bg-rose-50 text-rose-500 hover:border-rose-400'
        }`}
      >
        {title}
      </button>
    </li>
  );
};

SortItem.propTypes = {};

export default SortItem;
