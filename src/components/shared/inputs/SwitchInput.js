import React from 'react';
import PropTypes from 'prop-types';

const SwitchInput = ({ label, id, checked, changeHandler }) => {
  return (
    <div class="inline-flex items-center">
      <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
        <input
          id={id}
          onChange={changeHandler}
          checked={checked}
          type="checkbox"
          class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-200 transition-colors duration-300 checked:bg-rose-500 peer-checked:border-rose-500 peer-checked:before:bg-rose-500"
        />
        <label
          for={id}
          class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-rose-500 peer-checked:before:bg-rose-500"
        >
          <div
            class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
            data-ripple-dark="true"
          ></div>
        </label>
        <label
          className="mr-12 relative bottom-1 whitespace-nowrap"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

SwitchInput.propTypes = {
  label: PropTypes.string,
};

export default SwitchInput;
