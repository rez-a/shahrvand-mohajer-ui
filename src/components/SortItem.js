import React from 'react';
import PropTypes from 'prop-types';

const SortItem = ({ clickHandler, querySort, type, title }) => {
  return (
    <li>
      <button
        onClick={clickHandler}
        className={`px-3 py-2  rounded-md ${
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
