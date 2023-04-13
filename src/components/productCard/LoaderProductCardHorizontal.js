import React from 'react';
import PropTypes from 'prop-types';

const LoaderProductCardHorizontal = (props) => {
  return (
    <div className="bg-white rounded flex gap-4 p-4 py-8 items-center">
      <div className="loading-bg w-20 h-20"></div>
      <div className="flex flex-col gap-4 grow">
        <p className="loading-bg w-full h-4"></p>
        <p className="loading-bg w-1/3 h-4"></p>
        <p className="loading-bg w-1/3 h-4"></p>
      </div>
      <span className="loading-bg w-1/3 h-8"></span>
    </div>
  );
};

LoaderProductCardHorizontal.propTypes = {};

export default LoaderProductCardHorizontal;
