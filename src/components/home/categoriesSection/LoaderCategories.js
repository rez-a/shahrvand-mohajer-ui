import React from 'react';
import PropTypes from 'prop-types';

const LoaderCategories = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className=" w-32 h-32 loading-bg"></div>
      <p className="loading-bg h-4 w-1/2"></p>
    </div>
  );
};

LoaderCategories.propTypes = {};

export default LoaderCategories;
