import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainCategory from './MainCategory';
import SubCategories from './SubCategories';

const MegaMenu = ({ categories }) => {
  const [categoryFocused, setCategoryFocused] = useState(
    categories[0].ErpCode
  );
  return (
    <div className="absolute top-[105%] max-h-80 right-0 w-[70vw] z-20 bg-white shadow-2xl rounded-xl  grid-cols-3  hidden group-hover:grid overflow-hidden">
      <div className="col-span-1 grid  max-h-80 h-full overflow-auto overflow-x-hidden  gap-2 px-2 py-1 border-l pt-4">
        {categories.map((category) => (
          <MainCategory
            key={category.Id}
            {...category}
            categoryFocused={categoryFocused}
            setCategoryFocused={setCategoryFocused}
          />
        ))}
      </div>
      <div className="flex col-span-2 bg-rose-500 flex-col justify-between ">
        {categories.map((category) => (
          <div
            className={`max-h-80 overflow-auto p-4 ${
              categoryFocused === category.ErpCode
                ? 'block'
                : 'hidden'
            }`}
          >
            <ul className="mb-2 grid grid-cols-2">
              {category.Subcategories.map((subCategory) => (
                <SubCategories
                  key={subCategory.Id}
                  {...subCategory}
                  mainErpCode={category.ErpCode}
                  mainName={category.Name}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

MegaMenu.propTypes = {
  categories: PropTypes.array,
};

export default MegaMenu;
