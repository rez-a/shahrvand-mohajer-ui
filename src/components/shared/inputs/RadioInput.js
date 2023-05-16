import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({
  label,
  id,
  description,
  name,
  className,
  value,
  checked,
  changeHandler,
}) => {
  return (
    <label
      htmlFor={id}
      class={`inline-flex items-center border pl-3 cursor-pointer bg-white rounded-md border-gray-100 py-1  ${className}`}
    >
      <label
        class="relative flex cursor-pointer items-center rounded-full p-3"
        for={id}
        data-ripple-dark="true"
      >
        <input
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={changeHandler}
          type="radio"
          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-rose-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-rose-500 checked:before:bg-rose-500 hover:before:opacity-10"
        />
        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-rose-500 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
      </label>
      <label
        class="mt-px cursor-pointer select-none text-gray-700"
        for={id}
      >
        {label}
        <small className="block text-[10px] mt-1 text-zinc-400">
          {description}
        </small>
      </label>
    </label>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default RadioInput;
