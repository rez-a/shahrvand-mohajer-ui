import React from 'react';
import PropTypes from 'prop-types';

const SortItem = ({ clickHandler, querySort, type, title }) => {
  return (
    <li className="text-center xl:text-right">
      <button
        onClick={clickHandler}
        className={`px-2 py-1 rounded-md ${
          querySort === type
            ? 'bg-rose-500 text-white font-bold'
            : ' '
        }`}
      >
        {title}
      </button>
    </li>
  );
};

SortItem.propTypes = {};

export default SortItem;
