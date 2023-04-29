import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';

const TextInput = ({
  label,
  placeholder,
  id,
  valid,
  value,
  changeHandler,
  disabled,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id}>
        <p className="flex items-center mb-2">
          <TitleIcon />
          <span
            className={`font-bold  mr-2 ${
              valid ? 'text-zinc-500' : 'text-rose-500'
            }`}
          >
            {label}
          </span>
        </p>
      </label>
      <input
        className={`border w-full rounded-md p-2 focus:outline-none ${
          disabled ? 'bg-gray-100' : ''
        } ${
          valid
            ? 'border-gray-100 focus:border-gray-300'
            : 'border-rose-200 focus:border-rose-400'
        }`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        disabled={disabled}
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
