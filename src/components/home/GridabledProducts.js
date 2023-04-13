import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import ProductCartHorizontal from 'components/productCard/ProductCardHorizontal';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { SLIDESHOW } from 'services/endPoints';

const GridabledProducts = ({ title, section }) => {
  const { data: products, isLoading } = useSWR(
    `${SLIDESHOW}?section=${section}`,
    fetcher
  );
  return (
    <div className="my-8 mx-4">
      <header className="text-sm">
        <h2 className="font-semibold text-zinc-400 flex items-center ">
          <TitleIcon bg="bg-zinc-400" />
          <span className="mr-1"> {title}</span>
        </h2>
      </header>
      <main className="grid grid-cols-3 gap-8 my-4">
        {!isLoading &&
          [...products.slice(0, 9)].map((product, index) => (
            <ProductCartHorizontal key={index} {...product} />
          ))}
      </main>
    </div>
  );
};

GridabledProducts.propTypes = {
  title: PropTypes.string,
  section: PropTypes.string,
};

export default GridabledProducts;
