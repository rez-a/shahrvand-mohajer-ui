import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';

const TextAreaInput = ({
  label,
  placeholder,
  id,
  valid,
  value,
  changeHandler,
  disabled,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        <p className="flex items-center mb-3">
          <TitleIcon />
          <span
            className={`font-bold mr-2 ${
              valid ? 'text-zinc-500' : 'text-rose-500'
            }`}
          >
            {label}
          </span>
        </p>
      </label>
      <textarea
        disabled={disabled}
        value={value}
        onChange={changeHandler}
        className={`border w-full  rounded-md p-3 focus:outline-none disabled:bg-gray-100 ${className} ${
          valid
            ? 'border-gray-100 focus:border-gray-300'
            : 'border-rose-200 focus:border-rose-400'
        }`}
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
