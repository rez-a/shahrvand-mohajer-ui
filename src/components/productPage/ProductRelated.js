import React from 'react';
import PropTypes from 'prop-types';
import useObserved from 'hooks/useObserved';
import useSWR from 'swr';
import { PRODUCTS_MAINCATEGORY } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import Slider from 'components/shared/Slider';

const ProductRelated = ({ title, mainCategory, className }) => {
  const { ref, view } = useObserved();

  const { data: products } = useSWR(
    view && `${PRODUCTS_MAINCATEGORY}/${mainCategory}`,
    fetcher
  );

  return (
    <div
      className={`border border-gray-100 rounded-lg p-4 pb-0 bullet-active-rose bg-white my-8 ${className}`}
      ref={ref}
    >
      <Slider products={products?.data} title={title} />
    </div>
  );
};

ProductRelated.propTypes = {};

export default ProductRelated;
