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
        <h2 className="font-semibold text-neutral-900 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.311 21.445a9.984 9.984 0 0 0 3.209-1.865c.512-.442.409-1.268-.176-1.607l-2.841-1.64a1 1 0 0 0-1.501.867v3.29c0 .679.668 1.181 1.309.955ZM8.69 2.555A9.96 9.96 0 0 0 5.48 4.42c-.512.442-.409 1.268.177 1.606l2.841 1.64a1 1 0 0 0 1.5-.866V3.51c0-.68-.668-1.181-1.308-.955Zm13.145 11.301a9.984 9.984 0 0 0-.011-3.712c-.127-.665-.894-.989-1.48-.65l-2.841 1.64a1 1 0 0 0 0 1.733l2.849 1.645c.589.34 1.358.011 1.483-.656Zm-19.67-3.712a9.984 9.984 0 0 0 .011 3.712c.127.665.894.989 1.48.65l2.841-1.64a1 1 0 0 0 0-1.733l-2.85-1.645c-.588-.339-1.357-.011-1.482.656Zm16.36-5.734a9.976 9.976 0 0 0-3.22-1.847c-.639-.222-1.303.28-1.303.956v3.28c0 .77.834 1.252 1.501.867l2.849-1.645c.588-.339.688-1.169.173-1.611v0ZM5.475 19.59a9.976 9.976 0 0 0 3.22 1.847c.639.222 1.303-.28 1.303-.956v-3.28c0-.77-.834-1.252-1.501-.867L5.648 17.98c-.588.34-.688 1.17-.173 1.611v0Z" clip-rule="evenodd"/>
</svg>
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
