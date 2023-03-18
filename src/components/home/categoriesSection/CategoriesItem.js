import React from 'react';
import PropTypes from 'prop-types';

const CategoriesItem = ({ title, count, banner }) => {
  return (
    <div>
      <div className="w-16 h-16 mx-auto mb-3">
        <img
          src="https://shopjozi.ir/uploads/sliders/5bcd232392ea0e0bf26ba073e44fce3b.png"
          alt="category"
        />
      </div>
      <p className="text-center text-sm font-semibold mb-2 text-zinc-500">
        {title}
      </p>
      <p className="text-center text-xs font-semibold text-sky-500">
        <span>{count.toLocaleString()}</span>+ &zwnj; کالا
      </p>
    </div>
  );
};

CategoriesItem.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  banner: PropTypes.string,
};

export default CategoriesItem;
