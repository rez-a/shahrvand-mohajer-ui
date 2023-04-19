import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { useParams } from 'react-router-dom';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import LoaderProductCardVeritical from 'components/productCard/LoaderProductCardVeritical';
import { SLIDESHOW } from 'services/endPoints';

const ProductsSlide = (props) => {
  const { section } = useParams();
  const { data: products } = useSWR(
    `${SLIDESHOW}?section=${section}`,
    fetcher
  );
  return (
    <main className="grid grid-cols-5 gap-8 items-start">
      {!!products
        ? products?.map((product) => (
            <ProductCartVertical
              containerClassName="border-b py-2 hover:shadow-lg transition-all duration-300 bg-white rounded-md"
              key={product.Id}
              product={product}
            />
          ))
        : [...Array(16)].map((_, index) => (
            <LoaderProductCardVeritical key={index} />
          ))}
    </main>
  );
};

ProductsSlide.propTypes = {};

export default ProductsSlide;
