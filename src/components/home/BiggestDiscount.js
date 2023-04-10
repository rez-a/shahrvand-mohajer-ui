import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import ProductCartHorizontal from 'components/productCard/ProductCardHorizontal';
import productsDiscount from 'productsDiscountFake';

const BiggestDiscount = (props) => {
  return (
    <div className="my-8 mx-4">
      <header className="text-sm">
        <h2 className="font-semibold text-zinc-400 flex items-center ">
          <TitleIcon bg="bg-zinc-400" />
          <span className="mr-1"> بیشترین تخفیف ها</span>
        </h2>
      </header>
      <main className="grid grid-cols-3 gap-8 my-4">
        {[...productsDiscount.slice(0, 9)].map((product, index) => (
          <ProductCartHorizontal key={index} {...product} />
        ))}
      </main>
    </div>
  );
};

BiggestDiscount.propTypes = {};

export default BiggestDiscount;
