import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TitleIcon from 'components/shared/TitleIcon';
import AccordionLayout from 'components/shared/accordion/AccordionLayout';
import AccordionItem from 'components/shared/accordion/AccordionItem';
import TitleAccordionItem from 'components/shared/accordion/TitleAccordionItem';
import ContentAccordionItem from 'components/shared/accordion/ContentAccordionItem';
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
import useSWR from 'swr';
import { PRODUCTS, SUBCATEGORIES } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import LoaderProductCardVeritical from 'components/productCard/LoaderProductCardVeritical';
import queryString from 'query-string';
import useSWRMutation from 'swr/mutation';
import SortItem from 'components/SortItem';
import Breadcrumb from 'components/Breadcrumb';

const Products = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortItems = [
    { type: 'VISIT_COUNT', title: 'بیشترین بازدید' },
    { type: 'CHEAP', title: 'ارزان ترین' },
    { type: 'EXPENSIVE', title: 'گران ترین' },
    { type: 'DISCOUNT', title: 'بیشترین تخفیف' },
  ];
  const [query, setQuery] = useState(
    queryString.parse(location.search, { arrayFormat: 'bracket' })
  );
  const [price, setPrice] = useState([
    query['price[min]'] || 0,
    query['price[max]'] || 10000000,
  ]);
  const { mainErpCode } = useParams();

  const { data: products, trigger } = useSWRMutation(
    setParamsFilters(),
    fetcher
  );

  const { data: subCategories } = useSWR(
    `${SUBCATEGORIES}/${mainErpCode}`,
    fetcher
  );

  useEffect(() => {
    setLoading(true);
    setQuery(
      queryString.parse(location.search, { arrayFormat: 'bracket' })
    );
    const triggerRun = async () => {
      await trigger();
      setLoading(false);
    };
    triggerRun();
  }, [location.search]);

  const handleQueries = (queryList) => {
    setQuery(queryList);
  };

  useEffect(() => {
    console.log('change query');
  }, [query]);

  function setParamsFilters() {
    return queryString.stringifyUrl(
      {
        url: `${PRODUCTS}&category=${mainErpCode}`,
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

  const handleSubCategories = (erpCode) => {
    if (query?.subcategory) {
      query.subcategory.includes(erpCode)
        ? handleQueries({
            ...query,
            subcategory: [
              ...query.subcategory.filter((item) => item !== erpCode),
            ],
          })
        : handleQueries({
            ...query,
            subcategory: [...query.subcategory, erpCode],
          });
    } else {
      handleQueries({
        ...query,
        subcategory: [erpCode],
      });
    }
  };
  const handlePrice = (price) => {
    setPrice(price);
    setQuery({
      ...query,
      'price[min]': price[0],
      'price[max]': price[1],
    });
  };

  const handleFilters = () => {
    navigate(
      queryString.stringifyUrl(
        {
          url: location.pathname,
          query: {
            ...query,
            page: 1,
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
            page: 1,
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

  console.log(products?.data[0]);
  return (
    <>
      <Breadcrumb
        links={[
          { title: 'دسته بندی ها', toLink: '/products' },
          { title: products?.data[0].MainGroupName },
        ]}
      />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 items-start mx-4 2xl:mx-0">
        <aside className="sm:col-span-1 xl:col-span-1  border rounded-md p-4 bg-white border-gray-100 col-span-1 sm:sticky top-32">
          {!!subCategories?.data?.length && (
            <div className="mb-8">
              <h2 className="font-semibold text-zinc-400 flex items-center mb-4">
                <TitleIcon bg="bg-zinc-400" />
                <span className="mr-1"> فیلتر محصولات</span>
              </h2>
              <AccordionLayout>
                <AccordionItem defaultClassName="border rounded-md overflow-hidden">
                  <TitleAccordionItem>
                    <div className="flex items-center justify-between p-2">
                      <span>دسته بندی</span>
                      <span className="bg-zinc-200 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="28"
                          height="28"
                          className="fill-rose-500"
                        >
                          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                        </svg>
                      </span>
                    </div>
                  </TitleAccordionItem>
                  <ContentAccordionItem
                    closeClaseName="h-0"
                    openClassName="h-56 overflow-auto"
                  >
                    <ul class="text-sm font-medium text-gray-900 bg-white divide-y">
                      {subCategories?.data.map((subCategory) => (
                        <li
                          key={subCategory.Id}
                          onClick={() =>
                            handleSubCategories(subCategory.ErpCode)
                          }
                          className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70"
                        >
                          <div
                            className={`w-4 h-4 border rounded ${
                              query?.subcategory?.includes(
                                subCategory.ErpCode
                              )
                                ? 'bg-rose-500 border-rose-500'
                                : 'bg-white'
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className="fill-white"
                            >
                              <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                            </svg>
                          </div>
                          <span className="mr-2 text-xs">
                            {subCategory.Name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ContentAccordionItem>
                </AccordionItem>
              </AccordionLayout>
            </div>
          )}

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

        <div className="sm:col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:w-1/2 items-center gap-8 xl:gap-4 justify-center xl:justify-start text-xs">
            {sortItems.map((sortItem, index) => (
              <SortItem
                key={index}
                {...sortItem}
                querySort={query.sort}
                clickHandler={() => handleSort(sortItem.type)}
              />
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-8">
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
            className="flex items-center justify-center "
          />
        </div>
      </main>
    </>
  );
};

Products.propTypes = {};

export default Products;
