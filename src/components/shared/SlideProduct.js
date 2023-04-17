import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { SLIDESHOW } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';

import useObserved from 'hooks/useObserved';
import Slider from './Slider';
import slugConverter from 'utilities/slugConverter';

const SlideProduct = ({
  title,
  section,
  className,
  linkTo = false,
  isPagination,
  viewCount,
}) => {
  const { ref, view } = useObserved();

  const { data: products } = useSWR(
    view && `${SLIDESHOW}?section=${section}`,
    fetcher
  );

  return (
    <div
      className={`border border-gray-100 rounded-lg p-4 pb-0 bullet-active-rose bg-white my-8 ${className}`}
      ref={ref}
    >
      <Slider
        linkTo={
          linkTo
            ? `/products/${products?.[0]?.MainGroupErpCode}/${
                !!products &&
                slugConverter(products?.[0]?.MainGroupName)
              }`
            : false
        }
        products={
          !!viewCount ? products?.slice(0, viewCount - 1) : products
        }
        title={title}
        isPagination={isPagination}
      />
    </div>
  );
};

SlideProduct.propTypes = {};

export default SlideProduct;
