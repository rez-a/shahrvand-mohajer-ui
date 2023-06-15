import React from 'react';
import TitleIcon from '../TitleIcon';
import Category from './Category';

const CategoriesScrolled = ({
  title,
  categories,
  baseLinkTo,
  selected,
  className,
}) => {
  return (
    <div>
      <h2 className={`flex items-center mb-4 ${className}`}>
        <TitleIcon />
        <span className="mr-1 text-zinc-500 font-bold">{title}</span>
      </h2>
      <div
        className={`overflow-auto text-sm mb-4 bg-white p-4 rounded ${className}`}
      >
        <ul className="flex items-center py-2 space-x-3 space-x-reverse">
          {categories?.map((category) => (
            <Category
              key={category?.Id}
              {...category}
              selected={selected}
              baseLinkTo={baseLinkTo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesScrolled;
