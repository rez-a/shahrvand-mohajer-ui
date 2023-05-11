import ProductSearchResultCard from 'components/productCard/ProductSearchResultCard';
import React from 'react';

const SearchResult = ({ products, loading, search }) => {
  return (
    <div className="w-full pt-1 h-72 absolute right-0 top-full bg-white border border-gray-200 z-50 shadow-lg rounded-md overflow-auto ">
      {!loading ? (
        <ul className="divide-y">
          {products.map((product, i) => (
            <li>
              <ProductSearchResultCard
                product={product}
                key={i}
                search={search}
              />
            </li>
          ))}
        </ul>
      ) : (
        [...Array(4)].map((_, i) => (
          <div className="flex items-center justify-between py-1 px-3">
            <div className="flex items-center gap-4">
              <div className="loading-bg h-20 w-20"></div>
              <p className="loading-bg h-4 w-60"></p>
            </div>
            <p className="loading-bg h-4 w-20"></p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
