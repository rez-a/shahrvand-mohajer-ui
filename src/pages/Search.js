import React, { useEffect, useState } from 'react';
import TitleIcon from 'components/shared/TitleIcon';
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider';
import SwitchInput from 'components/shared/inputs/SwitchInput';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import PaginationLayout from 'components/pagination/PaginationLayout';
import {
  useParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { PRODUCTS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import LoaderProductCardVeritical from 'components/productCard/LoaderProductCardVeritical';
import queryString from 'query-string';
import useSWRMutation from 'swr/mutation';
import SortItem from 'components/SortItem';

const Search = (props) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sortItems = [
    { type: 'VISIT_COUNT', title: 'بیشترین بازدید' },
    { type: 'CHEAP', title: 'ارزان ترین' },
    { type: 'EXPENSIVE', title: 'گران ترین' },
    { type: 'DISCOUNT', title: 'بیشترین تخفیف' },
  ];

  const currentQueries = queryString.parse(location.search, {
    arrayFormat: 'bracket',
  });
  const [query, setQuery] = useState(
    Object.keys(currentQueries)
      .filter((queryKey) => queryKey != 'q')
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: currentQueries[key] });
      }, {})
  );
  const [price, setPrice] = useState([
    query['price[min]'] || 0,
    query['price[max]'] || 10000000,
  ]);

  const { data: products, trigger } = useSWRMutation(
    setParamsFilters(),
    fetcher
  );
  useEffect(() => {
    setLoading(true);
    setQuery(
      Object.keys(currentQueries)
        .filter((queryKey) => queryKey != 'q')
        .reduce((cur, key) => {
          return Object.assign(cur, {
            [key]: currentQueries[key],
          });
        }, {})
    );
    const triggerRun = async () => {
      await trigger();
      setLoading(false);
    };
    triggerRun();
  }, [location.search]);

  useEffect(() => {
    setQuery({});
    setPrice([0, 10000000]);
  }, [searchParams.get('q')]);

  const handleFilters = () => {
    navigate(
      queryString.stringifyUrl(
        {
          url: location.pathname,
          query: {
            ...query,
            q: searchParams.get('q'),
          },
        },
        {
          arrayFormat: 'bracket',
          skipEmptyString: true,
          skipNull: true,
        }
      )
    );
  };

  function setParamsFilters() {
    return queryString.stringifyUrl(
      {
        url: `${PRODUCTS}&q=${searchParams.get('q')}`,
        query: {
          ...query,
          page: searchParams.get('page') || 1,
        },
      },
      {
        arrayFormat: 'bracket',
        skipEmptyString: true,
        skipNull: true,
      }
    );
  }

  const handlePrice = (price) => {
    setPrice(price);
    setQuery({
      ...query,
      'price[min]': price[0],
      'price[max]': price[1],
    });
  };
  const handleSort = (type) => {
    setQuery({ ...query, sort: type });
    navigate(
      queryString.stringifyUrl(
        {
          url: location.pathname,
          query: {
            ...queryString.parse(location.search, {
              arrayFormat: 'bracket',
            }),
            sort: type,
          },
        },
        {
          arrayFormat: 'bracket',
          skipEmptyString: true,
          skipNull: true,
        }
      )
    );
  };

  return (
    <main className="grid grid-cols-5 gap-8 items-start">
      <aside className="border rounded-md p-4 bg-white border-gray-100 col-span-1 sticky top-32">
        <div>
          <h2 className="font-semibold text-zinc-400 flex items-center mb-4">
            <TitleIcon bg="bg-zinc-400" />
            <span className="mr-1"> فیلتر براساس قیمت</span>
          </h2>
          <RangeSlider
            min={0}
            max={10000000}
            defaultValue={[0, 10000000]}
            step={1}
            value={price}
            onInput={(price) => handlePrice(price)}
          />
          <p className="text-xs mt-6">
            <span>
              قیمت : {Number(price[0]).toLocaleString()} -
              {Number(price[1]).toLocaleString()} ریال
            </span>
          </p>
        </div>
        <div class="flex items-center w-full mb-12 my-8 font-base">
          <SwitchInput
            changeHandler={(e) =>
              setQuery({
                ...query,
                available: Number(!query.available),
              })
            }
            checked={Boolean(query?.available) || false}
            label="فقط کالاهای موجود"
            id="is-available"
          />
        </div>
        <button
          onClick={handleFilters}
          className="bg-sky-500/90 text-white w-full py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
        >
          فیلتر
        </button>
      </aside>

      <div className="col-span-4">
        <ul className="flex items-center space-x-6 space-x-reverse text-xs">
          {sortItems.map((sortItem, index) => (
            <SortItem
              key={index}
              {...sortItem}
              querySort={query.sort}
              clickHandler={() => handleSort(sortItem.type)}
            />
          ))}
        </ul>
        <div className="grid grid-cols-4 gap-8 my-8 min-h-screen">
          {!!products?.data && !loading
            ? products?.data?.map((product) => (
                <ProductCartVertical
                  containerClassName="border-b py-2 hover:shadow-lg transition-all duration-300 bg-white rounded-md"
                  key={product.Id}
                  product={product}
                />
              ))
            : [...Array(16)].map((_, index) => (
                <LoaderProductCardVeritical key={index} />
              ))}
        </div>

        <PaginationLayout
          totalPage={products?.meta.last_page}
          currentPage={products?.meta.current_page}
          query={query}
          className="flex items-center justify-center"
        />
      </div>
    </main>
  );
};

Search.propTypes = {};

export default Search;
