import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = ({ Name, Image, ErpCode }) => {
  return (
    <div className="flex relative items-center bg-white p-2 rounded-md group border border-transparent hover:border-gray-200">
      <div className="w-16 h-16">
        <img src={Image} class="rounded-l-none" alt={Name} />
      </div>
      <div className="px-5 max-w-[10rem] ">
        <p className="text-sm whitespace-nowrap font-bold truncate">
          {Name}
        </p>
      </div>
      <span className="bg-sky-100 mr-auto translate-x-2 rounded-md opacity-0 group-hover:opacity-50 transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className=" "
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </span>
      <Link
        className="absolute w-full h-full top-0 left-0"
        to={`/products/${ErpCode}`}
      ></Link>
    </div>
  );
};

CategoryCard.propTypes = {
  Name: PropTypes.string,
  Image: PropTypes.string,
  ErpCode: PropTypes.string,
};

export default CategoryCard;
