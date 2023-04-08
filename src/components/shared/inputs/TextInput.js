import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';

const TextInput = ({ label, placeholder, id }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id}>
        <p className="flex items-center mb-2">
          <TitleIcon />
          <span className="font-bold text-zinc-500 mr-2">
            {label}
          </span>
        </p>
      </label>
      <input
        className="border w-full border-gray-100 rounded-md p-2 focus:outline-none focus:border-gray-300"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default TextInput;
