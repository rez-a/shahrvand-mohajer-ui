import React from 'react';
import PropTypes from 'prop-types';

const LoaderProductCardVeritical = (props) => {
  return (
    <div className="bg-white rounded flex flex-col gap-4 p-4 py-8">
      <div className="loading-bg w-full h-40"></div>
      <p className="loading-bg w-full h-4"></p>
      <span className="loading-bg w-1/3 h-4"></span>
      <span className="loading-bg w-1/3 h-4"></span>
    </div>
  );
};

LoaderProductCardVeritical.propTypes = {};

export default LoaderProductCardVeritical;
