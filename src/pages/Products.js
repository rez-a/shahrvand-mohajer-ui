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
  Link,
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

  return (
    <>
      {!!products?.data.length && !loading && (
        <Breadcrumb
          links={[
            { title: 'دسته بندی ها', toLink: '/products' },
            { title: products?.data[0].MainGroupName },
          ]}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 items-start relative mx-4 2xl:mx-0 min-h-screen">
        {!!products?.data && !loading ? (
          !!products.data.length && (
            <aside className="sm:col-span-1 xl:col-span-1  border rounded-md p-4 bg-white border-gray-100 col-span-1 sm:sticky top-32 order-2 sm:order-1 ">
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
                                handleSubCategories(
                                  subCategory.ErpCode
                                )
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
              <button
                onClick={handleFilters}
                className="bg-sky-500/90 text-white w-full mt-5 py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
              >
                فیلتر
              </button>
            </aside>
          )
        ) : (
          <aside className="sm:col-span-1 xl:col-span-1  border rounded-md p-4 loading-bg col-span-1 sm:sticky top-32 h-72"></aside>
        )}
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-4 order-1 sm:order-2">
          {!!products?.data.length && !loading && (
            <ul className="grid grid-cols-2 md:grid-cols-4 xl:w-1/2 items-center gap-2 xl:gap-4 justify-center xl:justify-start text-xs">
              {sortItems.map((sortItem, index) => (
                <SortItem
                  key={index}
                  {...sortItem}
                  querySort={query.sort}
                  clickHandler={() => handleSort(sortItem.type)}
                />
              ))}
            </ul>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-8">
            {!!products?.data && !loading ? (
              products.data.length ? (
                products?.data?.map((product) => (
                  <ProductCartVertical
                    containerClassName="border-b py-2 hover:shadow-lg transition-all duration-300 bg-white rounded-md"
                    key={product.Id}
                    product={product}
                  />
                ))
              ) : (
                <div className="absolute w-full h-full ">
                  <div className="sm:w-1/3 h-1/3 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 709.53268 558.59384"
                      className="w-full h-auto"
                    >
                      <rect
                        x="0.27492"
                        y="0.36501"
                        width="643.86162"
                        height="412.35762"
                        fill="#e6e6e6"
                      />
                      <rect
                        x="18.68599"
                        y="52.08494"
                        width="607.03947"
                        height="336.24257"
                        fill="#fff"
                      />
                      <rect
                        width="643.86163"
                        height="27.3536"
                        fill="#f43f5e"
                      />
                      <circle
                        cx="20.327"
                        cy="13.98461"
                        r="5.06978"
                        fill="#fff"
                      />
                      <circle
                        cx="39.57061"
                        cy="13.98461"
                        r="5.06978"
                        fill="#fff"
                      />
                      <circle
                        cx="58.81422"
                        cy="13.98461"
                        r="5.06978"
                        fill="#fff"
                      />
                      <rect
                        x="73.84385"
                        y="86.97284"
                        width="155.98055"
                        height="266.46677"
                        fill="#e6e6e6"
                      />
                      <rect
                        x="256.7496"
                        y="86.97284"
                        width="129.9838"
                        height="73.34799"
                        fill="#f43f5e"
                      />
                      <rect
                        x="256.7496"
                        y="180.74686"
                        width="129.9838"
                        height="78.91873"
                        fill="#e6e6e6"
                      />
                      <rect
                        x="256.7496"
                        y="280.09161"
                        width="129.9838"
                        height="73.34799"
                        fill="#e6e6e6"
                      />
                      <rect
                        x="414.58707"
                        y="86.97284"
                        width="155.98056"
                        height="116.12476"
                        fill="#e6e6e6"
                      />
                      <rect
                        x="414.58707"
                        y="237.31485"
                        width="155.98056"
                        height="116.12476"
                        fill="#e6e6e6"
                      />
                      <path
                        d="M755.71223,382.14309v-25a33.5,33.5,0,1,1,67,0v25a4.50508,4.50508,0,0,1-4.5,4.5h-58A4.50508,4.50508,0,0,1,755.71223,382.14309Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <polygon
                        points="593.514 536.786 581.698 540.056 563.462 496.038 580.901 491.212 593.514 536.786"
                        fill="#ffb8b8"
                      />
                      <path
                        d="M819.38459,708.28158h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H804.49773a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,819.38459,708.28158Z"
                        transform="translate(-406.29299 74.94457) rotate(-15.46951)"
                        fill="#2f2e41"
                      />
                      <polygon
                        points="470.328 545.875 458.068 545.875 452.235 498.587 470.33 498.587 470.328 545.875"
                        fill="#ffb8b8"
                      />
                      <path
                        d="M449.31065,542.37161h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H434.42379a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,449.31065,542.37161Z"
                        fill="#2f2e41"
                      />
                      <path
                        d="M700.77825,452.301a10.0558,10.0558,0,0,0,15.392.91737l32.59018,14.65807L745.796,449.54488l-30.4937-11.10914a10.11028,10.11028,0,0,0-14.524,13.86524Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#ffb8b8"
                      />
                      <path
                        d="M768.49246,562.53911c-10.23925,0-20.83911-1.52539-29.74878-6.06152a38.41551,38.41551,0,0,1-19.70874-23.56543c-4.64233-14.69922,1.21094-29.14014,6.87134-43.105,3.50757-8.65381,6.82056-16.82715,7.68018-24.88379l.30029-2.86036c1.33887-12.84765,2.49512-23.94335,8.897-28.105,3.31836-2.15722,7.77979-2.28027,13.64063-.377l55.04492,17.88135-2.02393,104.49023-.33447.11182C808.82279,556.16118,789.41824,562.53911,768.49246,562.53911Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M755.46218,401.05127s27-8,48-5c0,0-12,66-8,88s-69.5,8.5-54.5-12.5l5-25s-10-10-1-22Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#f43f5e"
                      />
                      <path
                        d="M742.18192,560.55815l-33.27637-6.23926,11.61768-89.40673c.78125-2.4961,18.77807-59.14307,26.95166-62.208a139.51716,139.51716,0,0,1,18.16626-5.04688l1.18383-.23681-6.67236,10.00879-26.56445,63.65429Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M724.84329,705.62163l-42.99487-7.16553,24.12817-98.52392,35.90332-134.73731.35425,2.39258c.02808.17822,3.38208,17.77978,53.15064,9.96973l.43774-.06836.12085.42627,60.1521,212.53759-48.99048,8.165L762.42215,543.55083Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M784.43558,577.2896l.02685-.75635c.03-.83984,2.988-84.37256,2-117.96729-.99145-33.709,9.92188-62.90087,10.03223-63.19189l.08887-.23438.24121-.06933c14.11963-4.03369,26.3689,8.00537,26.491,8.12744l.17211.17188-4.02124,33.17626,17.21607,120.64161Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <circle
                        cx="537.09466"
                        cy="190.79701"
                        r="24.56103"
                        fill="#ffb8b8"
                      />
                      <path
                        d="M747.78694,359.14309a26.53,26.53,0,0,1,26.5-26.5h5.00024a26.52977,26.52977,0,0,1,26.49976,26.5v.5H795.22029l-3.604-10.09179-.7207,10.09179h-5.46094l-1.81836-5.09179-.36377,5.09179H747.78694Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M779.91118,389.45438a4.43341,4.43341,0,0,1-.3523-4.707c5.29859-10.07813,12.71729-28.7002,2.87012-40.18457l-.70776-.8252h28.5874V386.6575l-25.96948,4.582a4.59632,4.59632,0,0,1-.79639.07032A4.48193,4.48193,0,0,1,779.91118,389.45438Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M664.81368,212.24945a135.01972,135.01972,0,1,0,7.65509,199.4028L838.08687,551.4a12.44209,12.44209,0,0,0,16.06592-19.00287l-.01831-.01544L688.51631,392.63391A135.02729,135.02729,0,0,0,664.81368,212.24945ZM654.13692,379.17712a101.15765,101.15765,0,1,1-12.0766-142.54788l.00006,0A101.15764,101.15764,0,0,1,654.13692,379.17712Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#3f3d56"
                      />
                      <path
                        d="M511.589,391.25375a101.16315,101.16315,0,0,1-17.16559-135.989q-2.90121,2.92177-5.60938,6.1199A101.15767,101.15767,0,1,0,643.43849,391.85605q2.702-3.20224,5.089-6.559A101.163,101.163,0,0,1,511.589,391.25375Z"
                        transform="translate(-245.23366 -170.70308)"
                        opacity="0.3"
                      />
                      <path
                        d="M790.214,495.239a10.05578,10.05578,0,0,0,12.42386-9.13254l34.433-9.55748L823.074,464.34553l-30.55233,10.94686A10.11027,10.11027,0,0,0,790.214,495.239Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#ffb8b8"
                      />
                      <path
                        d="M804.52567,490.18022,802.43021,470.274l28.76245-15.86914-18.75244-22.70019L815.5,406.20512l7.61987-3.26562.23707.30469c3.593,4.62011,35.10522,45.28076,35.10522,50.30713,0,5.16259-6.02856,20.32324-14.27637,24.44726-7.95581,3.978-37.83081,11.70947-39.09863,12.03711Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#2f2e41"
                      />
                      <path
                        d="M953.76634,729.29692h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z"
                        transform="translate(-245.23366 -170.70308)"
                        fill="#ccc"
                      />
                    </svg>
                    <h2 className="text-black font-bold text-sm sm:text-base md:text-xl text-center my-5">
                      هیچ محصولی یافت نشد!!
                    </h2>
                    <Link
                      to="/"
                      className="bg-rose-500/90 max-w-full sm:mt-4 text-xs sm:text-base flex group mx-auto items-center justify-center text-white w-60 py-2 rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300"
                    >
                      بازگشت به فروشگاه
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-current mr-2 group-hover:-translate-x-2 transition-all duration-200"
                      >
                        <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            ) : (
              [...Array(16)].map((_, index) => (
                <LoaderProductCardVeritical key={index} />
              ))
            )}
          </div>

          <PaginationLayout
            totalPage={products?.meta.last_page}
            currentPage={products?.meta.current_page}
            query={query}
            className="flex items-center justify-center "
          />
        </div>
      </div>
    </>
  );
};

Products.propTypes = {};

export default Products;
