import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ className = '', children }) => {
  return (
    <div className={`grid gap-4  my-8 ${className}`}>{children}</div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
