import ProductSearchResultCard from 'components/productCard/ProductSearchResultCard';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  function closeSearchResult(e) {
    if (!resultRef?.current.contains(e.target)) {
      setShowResult(false);
      setShowDimmer(false);
      setLoading(false);

      if (!location.pathname.includes('search')) setSearch('');
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
