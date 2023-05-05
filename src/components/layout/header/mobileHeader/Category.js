import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import queryString from 'query-string';

const Category = ({ category }) => {
  const [showSubCategory, setShow] = useState(false);

  return (
    <li onClick={() => setShow(!showSubCategory)}>
      <div className="flex items-center justify-between">
        <p className="block py-4">{category.Name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className=""
        >
          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
        </svg>
      </div>
      {showSubCategory && (
        <ul className="w-full bg-gray-200 text-sm  divide-y divide-black/10">
          {category.Subcategories.map((subCategory) => (
            <li key={subCategory.Id}>
              <Link
                className="block p-3 px-4"
                to={`/products/${
                  category.ErpCode
                }?${queryString.stringify(
                  {
                    subcategory: [subCategory.ErpCode],
                  },
                  { arrayFormat: 'bracket' }
                )}`}
              >
                {subCategory.Name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

Category.propTypes = {};

export default Category;
