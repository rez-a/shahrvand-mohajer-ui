import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';

const TextAreaInput = ({ label, placeholder, id }) => {
  return (
    <div>
      <label htmlFor={id}>
        <p className="flex items-center mb-3">
          <TitleIcon />
          <span className="font-bold text-zinc-500 mr-2">
            {label}
          </span>
        </p>
      </label>
      <textarea
        className="border w-full border-gray-100 rounded-md p-3 focus:outline-none focus:border-gray-300"
        cols="30"
        rows="5"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

TextAreaInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default TextAreaInput;
