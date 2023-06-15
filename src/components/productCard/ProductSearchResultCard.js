import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

const ProductSearchResultCard = ({ product, search }) => {
  const {
    Name,
    ErpCode,
    MainGroupErpCode,
    SideGroupErpCode,
    SellPrice,
    LastBuyPrice,
    Image,
  } = product;

  return (
    <div class={`flex flex-col relative hover:bg-slate-50`}>
      <div className="flex items-start sm:items-center rounded-md p-2">
        <div class="w-10 h-10 lg:h-20 lg:w-20 text-center overflow-hidden rounded-lg bg-gray-50">
          <img src={Image} alt={Name} />
        </div>
        <div className="flex flex-col lg:flex-row grow">
          <div class="sm:pr-2 w-full flex flex-col justify-between leading-normal grow ">
            <div class="text-gray-900 w-full lg:w-5/6 truncate whitespace-nowrap hover:text-rose-500 transition-all duration-200 mb-2 sm:my-0">
              <Highlighter
                highlightClassName="text-rose-500 font-bold"
                searchWords={[...search.split(' ')]}
                autoEscape={true}
                className="text-xs md:text-sm lg:text-base"
                textToHighlight={Name}
              />
            </div>
          </div>
          <div className="text-xs md:text-sm lg:text-base font-bold">
            <span
              className={` relative ${
                SellPrice !== LastBuyPrice
                  ? 'opacity-30  before:absolute before:w-[110%] before:h-[1px] before:bg-black before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-6'
                  : 'opacity-100 text-black'
              }`}
            >
              <span className="whitespace-nowrap">
                {SellPrice.toLocaleString()}
              </span>
              تومان
            </span>
            {SellPrice !== LastBuyPrice && (
              <span className="mr-4 text-rose-500 whitespace-nowrap">
                <span>{LastBuyPrice.toLocaleString()}</span>
                تومان
              </span>
            )}
          </div>
        </div>
      </div>
      <Link
        to={`/product/${MainGroupErpCode}/${SideGroupErpCode}/${ErpCode}`}
        className="absolute w-full h-full top-0 right-0"
      ></Link>
    </div>
  );
};

export default ProductSearchResultCard;
