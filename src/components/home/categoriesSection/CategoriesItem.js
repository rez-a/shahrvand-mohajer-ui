import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoriesItem = ({ title, count, banner }) => {
  return (
    <div className="relative group">
      <div className="w-16 h-16 mx-auto mb-3">
        <img
          src="https://shopjozi.ir/uploads/sliders/5bcd232392ea0e0bf26ba073e44fce3b.png"
          alt="category"
        />
      </div>
      <p className="text-center text-sm font-semibold mb-2 text-zinc-500 group-hover:text-rose-500 transition-all duration-200">
        {title}
      </p>
      <p className="text-center text-xs font-semibold text-sky-500">
        <span>{count.toLocaleString()}</span>+ &zwnj; کالا
      </p>
      <Link
        to="products/MainGroupErpCode/slugMainGroupErpCode"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

CategoriesItem.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  banner: PropTypes.string,
};

export default CategoriesItem;
