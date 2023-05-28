import React from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchResult from './SearchResult';
import { useEffect } from 'react';
import { PRODUCTS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import Spinner from 'components/shared/Spinner';
import { useContext } from 'react';
import { DimmerContext } from 'contexts/DimmerProvider';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const navigaion = useNavigate();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  console.log(search);

  const handleSearch = () => {
    !!search && navigaion(`/search?q=${search}`);
  };
  const { setShowDimmer } = useContext(DimmerContext);

  const trigger = async () => {
    const response = await fetcher(`${PRODUCTS}&q=${search}`);
    setProducts(response.data);
    setLoading(false);
  };

  console.log(search);

  const handleKeyDown = (e) => e.key === 'Enter' && handleSearch();

  useEffect(() => {
    if (!searchParams.get('q')) {
      if (search.trim().length >= 3) {
        setLoading(true);
        setShowDimmer(true);
        setShowResult(true);
        trigger();
      } else {
        setLoading(false);
        setShowDimmer(false);
        setShowResult(false);
      }
    } else {
      setShowDimmer(false);
    }
  }, [search]);

  return (
    <div className="w-1/2 relative h-full mr-5">
      <input
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-whit outline-none focus-visible:outline-none text-base border border-slate-200 shadow-sm transition-all duration-200 focus:border-slate-300 text-slate-800 p-2 pr-5 rounded-md w-full placeholder:text-sm focus:shadow-sm"
        type="text"
        placeholder="نام کالا ، برند و یا دسته مورد نظر خود را جستجو کنید..."
      />
      <button
        onClick={handleSearch}
        className="absolute left-0 top-0 h-full pl-4 rounded-l-md flex items-center justify-center"
      >
        <span className="h-full w-0.5 border-r border-slate-200 pl-4"></span>
        {!loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="fill-gray-700 inline-flex"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
          </svg>
        ) : (
          <Spinner width="w-5" height="h-5" fill="fill-blue-700" />
        )}
      </button>
      {showResult && (
        <SearchResult
          products={products}
          loading={loading}
          search={search}
          setShowResult={setShowResult}
          setShowDimmer={setShowDimmer}
          setLoading={setLoading}
          setSearch={setSearch}
        />
      )}
    </div>
  );
};

export default SearchBox;
