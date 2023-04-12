import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugConverter from '../../../utilities/slugConverter';

const CategoriesItem = ({ ErpCode, Image, Name, TimeWork }) => {
  return (
    <div className="relative group">
      <div className="w-32 h-32 mx-auto mb-3">
        <img src={Image} alt={Name} />
      </div>
      <p className="text-center text-sm font-semibold mb-2 text-zinc-500 group-hover:text-rose-500 transition-all duration-200">
        {Name}
      </p>
      <p className="text-center text-xs font-semibold text-sky-500">
        {TimeWork}
      </p>
      <Link
        to={`products/${ErpCode}/${slugConverter(Name)}`}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

CategoriesItem.propTypes = {
  ErpCode: PropTypes.string,
  Image: PropTypes.number,
  banner: PropTypes.string,
};

export default CategoriesItem;
