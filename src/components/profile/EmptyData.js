import React from 'react';
import PropTypes from 'prop-types';

const EmptyDataProfile = ({ children, text, textClassName }) => {
  return (
    <div className="w-full grid place-items-center py-4">
      <div>{children}</div>
      <p className={textClassName}>{text}</p>
    </div>
  );
};

EmptyDataProfile.propTypes = {};

export default EmptyDataProfile;
