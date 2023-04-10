import React, { useState } from 'react';
import PropTypes from 'prop-types';
import products from 'productsFake';
import ProductCartVertical from 'components/productCard/ProductCardVertical';
import TitleIcon from 'components/shared/TitleIcon';
import AccordionLayout from 'components/shared/accordion/AccordionLayout';
import AccordionItem from 'components/shared/accordion/AccordionItem';
import TitleAccordionItem from 'components/shared/accordion/TitleAccordionItem';
import ContentAccordionItem from 'components/shared/accordion/ContentAccordionItem';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import PaginationLayout from 'components/pagination/PaginationLayout';
import SwitchInput from './inputs/SwitchInput';

const Products = (props) => {
  const [price, setPrice] = useState([25, 75]);
  return (
    <main className="grid grid-cols-5 gap-12 items-start">
      <aside className="border rounded-md p-4 bg-white border-gray-100">
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
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        true
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
                    <span className="mr-2 text-xs">دسته یندی 1</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        true
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
                    <span className="mr-2 text-xs">دسته یندی 2</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 3</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 4</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                  <li className="p-1 px-3 flex items-center py-3 hover:cursor-pointer hover:bg-zinc-100/70">
                    <div
                      className={`w-4 h-4 border rounded ${
                        0 ? 'bg-rose-500 border-rose-500' : 'bg-white'
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
                    <span className="mr-2 text-xs">دسته یندی 5</span>
                  </li>
                </ul>
              </ContentAccordionItem>
            </AccordionItem>
          </AccordionLayout>
        </div>
        <div>
          <h2 className="font-semibold text-zinc-400 flex items-center mb-4">
            <TitleIcon bg="bg-zinc-400" />
            <span className="mr-1"> فیلتر براساس قیمت</span>
          </h2>
          <RangeSlider
            min={0}
            max={100}
            defaultValue={[25, 75]}
            step={1}
            value={price}
            onInput={(price) => setPrice(price)}
          />
          <p className="text-xs mt-6">
            <span>
              قیمت : {price[0]} - {price[1]} تومان
            </span>
          </p>
        </div>
        <div class="flex items-center w-full mb-12 my-8">
          <SwitchInput label="فقط کالاهای موجود" id="is-available" />
        </div>
        <button className="bg-sky-500/90 text-white w-full py-2 rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
          فیلتر
        </button>
      </aside>
      <main className="col-span-4 ">
        <div>
          <ul className="flex items-center space-x-6 space-x-reverse text-xs">
            <li>
              <button className="bg-rose-500 text-white px-3 py-2 font-bold rounded-md">
                پربازدید ترین
              </button>
            </li>
            <li>
              <button>قدیمی ترین</button>
            </li>
            <li>
              <button>جدید ترین</button>
            </li>
            <li>
              <button>ارزان ترین</button>
            </li>
            <li>
              <button>گران ترین</button>
            </li>
          </ul>
          <div className="grid grid-cols-4 gap-8 my-8">
            {products.map((product) => (
              <ProductCartVertical
                containerClassName="border-b py-2 hover:shadow-lg transition-all duration-300 bg-white rounded-md"
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
        <PaginationLayout />
      </main>
    </main>
  );
};

Products.propTypes = {};

export default Products;
