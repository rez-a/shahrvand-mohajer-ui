import React from 'react';
import PropTypes from 'prop-types';

const MainCategory = ({
  Name,
  Image,
  ErpCode,
  setCategoryFocused,
  categoryFocused,
}) => {
  return (
    <div className="w-full">
      <input
        id={ErpCode}
        type="radio"
        name="category"
        className="peer appearance-none hidden"
      />
      <label
        htmlFor={ErpCode}
        onClick={() => setCategoryFocused(ErpCode)}
        className={`flex items-center  text-slate-900 font-medium transition p-1 gap-2 rounded-xl border  peer-checked:bg-white peer-checked:border-rose-300 peer-checked:text-black cursor-pointer  hover:bg-white hover:text-black hover:border-rose-300 ${
          categoryFocused === ErpCode
            ? 'border-rose-300'
            : 'border-gray-50'
        }`}
      >
        <div className="w-16 h-16">
          <img src={Image} className="rounded-l-none" alt={Name} />
        </div>
        <div className="gap-2 px-5">
          <p className="text-sm whitespace-nowrap">{Name}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="mr-auto translate-x-2"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </label>
    </div>
  );
};

MainCategory.propTypes = {
  Name: PropTypes.string,
  Image: PropTypes.string,
  ErpCode: PropTypes.string,
};

export default MainCategory;
