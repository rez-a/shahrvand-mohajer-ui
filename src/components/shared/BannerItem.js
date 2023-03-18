import React from 'react';
import PropTypes from 'prop-types';

const BannerItem = ({ children }) => {
  return <div className="rounded-lg overflow-hidden">{children}</div>;
};

BannerItem.propTypes = {};

export default BannerItem;
