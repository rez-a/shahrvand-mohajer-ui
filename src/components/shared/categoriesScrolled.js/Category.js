import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ Id, ErpCode, Name, baseLinkTo, selected }) => {
  return (
    <li key={Id}>
      <Link
        className={`border py-1 px-4 rounded whitespace-nowrap hover:bg-rose-50/50 hover:border-rose-600 hover:text-rose-600 transition-all duration-200 ${
          ErpCode === selected
            ? 'border-rose-600 text-rose-600 bg-rose-50/50 '
            : 'border-neutral-300 bg-neutral-50 text-neutral-500'
        }`}
        to={`${baseLinkTo}/${ErpCode}`}
      >
        {Name}
      </Link>
    </li>
  );
};

export default Category;
