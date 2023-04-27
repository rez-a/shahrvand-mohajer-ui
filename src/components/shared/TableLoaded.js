import React from 'react';
import PropTypes from 'prop-types';

const TableLoaded = ({ count }) => {
  return [...Array(count)].map((_, index) => (
    <div key={index}>
      <div className="bg-gray-100 w-100 h-10"></div>
      <div className="loading-bg w-100 h-10"></div>
    </div>
  ));
};

TableLoaded.propTypes = {};

export default TableLoaded;
