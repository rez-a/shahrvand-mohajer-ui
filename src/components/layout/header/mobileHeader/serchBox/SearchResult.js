import ProductSearchResultCard from 'components/productCard/ProductSearchResultCard';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const SearchResult = ({
  products,
  loading,
  search,
  setShowResult,
  setShowDimmer,
  setLoading,
  setSearch,
}) => {
  const resultRef = useRef();
  function closeSearchResult(e) {
    if (!resultRef?.current.contains(e.target)) {
      setShowResult(false);
      setShowDimmer(false);
      setLoading(false);
      setSearch('');
    }
  }

  useEffect(() => {
    window.document.addEventListener('click', closeSearchResult);

    return () =>
      window.document.removeEventListener('click', closeSearchResult);
  });
  return (
    <div
      ref={resultRef}
      id="search-result"
      className="w-full pt-1 h-72 absolute right-0 top-full bg-white border border-gray-200 z-50 shadow-lg rounded-md overflow-auto "
    >
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
        <div className="divide-y">
          {[...Array(4)].map((_, i) => (
            <div className="flex items-start sm:items-center flex-col sm:flex-row justify-between py-1 px-3">
              <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                <div className="loading-bg h-20 w-20"></div>
                <p className="loading-bg h-4 w-40 my-2 sm:my-0 sm:w-60"></p>
              </div>
              <p className="loading-bg h-4 w-20"></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
