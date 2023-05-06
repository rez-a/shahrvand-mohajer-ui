import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ className = '', children }) => {
  return (
    <div className={`grid gap-4 mx-4 2xl:mx-0 my-8 ${className}`}>
      {children}
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
