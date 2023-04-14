import React from 'react';
import PropTypes from 'prop-types';

const LoaderCategoryCard = (props) => {
  return (
    <div className="bg-white rounded flex items-center justify-between p-2 h-20 ">
      <div className="loading-bg w-16 h-16"> </div>
    </div>
  );
};

LoaderCategoryCard.propTypes = {};

export default LoaderCategoryCard;
