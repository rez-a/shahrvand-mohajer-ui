import React from 'react';
import PropTypes from 'prop-types';

const TitleIcon = ({ bg = 'bg-zinc-400' }) => {
  return (
    <span className="flex items-center">
      <span
        className={`h-2 w-2 rounded-full inline-block ${bg}`}
      ></span>
      <span
        className={`h-4 w-4 mr-1 rounded-full inline-block ${bg}`}
      ></span>
    </span>
  );
};

TitleIcon.propTypes = {
  bg: PropTypes.string,
};

export default TitleIcon;
