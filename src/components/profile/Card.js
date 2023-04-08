import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';

const Card = ({ title, children }) => {
  return (
    <div className="col-span-5 bg-white rounded-3xl shadow-sm border border-gray-200/70 overflow-hidden">
      <div>
        <h2 className="flex text-slate-700 font-bold px-4 py-5">
          <TitleIcon /> <span className="mr-2">{title}</span>
        </h2>
      </div>
      <section className="">{children}</section>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
