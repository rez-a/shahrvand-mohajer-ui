import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubCategories = ({ Name, ErpCode, mainErpCode }) => {
  return (
    <li>
      <Link
        className="text-sm font-normal px-2 py-2.5 hover:underline	 text-white  flex items-center transition group w-full"
        to={`/products/${mainErpCode}/${ErpCode}`}
      >
        {Name} 
      </Link>
    </li>
  );
};

SubCategories.propTypes = {
  Name: PropTypes.string,
  ErpCode: PropTypes.string,
  mainErpCode: PropTypes.string,
  mainName: PropTypes.string,
};

export default SubCategories;
