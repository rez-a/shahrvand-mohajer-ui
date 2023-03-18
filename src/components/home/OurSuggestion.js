import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import ProductCartHorizontal from 'components/productCart/ProductCartHorizontal';
import products from 'productsFake';

const OurSuggestion = (props) => {
  return (
    <div className="my-8 mx-4">
      <header className="text-sm">
        <h2 className="font-semibold text-zinc-400 flex items-center ">
          <TitleIcon bg="bg-zinc-400" />
          <span className="mr-1"> پیشنهاد ما</span>
        </h2>
      </header>
      <main className="grid grid-cols-3 gap-8 my-4">
        {[...products.slice(0, 9)].map((product, index) => (
          <ProductCartHorizontal
            key={index}
            {...product}
            containerClassName="border-b p-3 pr-0"
          />
        ))}
      </main>
    </div>
  );
};

OurSuggestion.propTypes = {};

export default OurSuggestion;
