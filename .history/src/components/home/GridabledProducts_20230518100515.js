import React from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import ProductCartHorizontal from 'components/productCard/ProductCardHorizontal';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { SLIDESHOW } from 'services/endPoints';
import LoaderProductCardHorizontal from 'components/productCard/LoaderProductCardHorizontal';
import useObserved from 'hooks/useObserved';

const GridabledProducts = ({ title, section }) => {
  const { ref, view } = useObserved();

  const { data: products } = useSWR(
    view && `${SLIDESHOW}?section=${section}`,
    fetcher
  );

  return (
    <div className="my-4 mx-4 2xl:mx-0" ref={ref}>
      <header className="text-sm">
        <h2 className="font-semibold text-zinc-400 flex items-center ">
          <TitleIcon bg="bg-zinc-400" />
          <span className="mr-1"> {title}</span>
        </h2>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-4">
        {!!products?.data
          ? [...products?.data.slice(0, 9)].map((product, index) => (
              <ProductCartHorizontal key={index} product={product} />
            ))
          : [...Array(9)].map((_, index) => (
              <LoaderProductCardHorizontal key={index} />
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
