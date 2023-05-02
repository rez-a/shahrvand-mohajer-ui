import React from 'react';
import PropTypes from 'prop-types';
import productImage from 'assets/images/products/products1.jpg';
import storeLogo from 'assets/images/store-logo.png';

const ProfileProductCard = ({
  Total,
  Price,
  Quantity,
  UnitName,
  Product,
}) => {
  return (
    <div className="flex items-start py-4 border-gray-100">
      <div className="h-40 w-40">
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={Product.Image}
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between leading-normal grow mr-2">
        <div>
          <div className="flex items-center mb-6 justify-between">
            <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white ">
              {Product.Name}
            </h5>
            <div className="flex items-center justify-end">
              <p className="font-bold mr-4 ">
                <span>{Price.toLocaleString()}</span>
                <span className="mr-1">تومان</span>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-6 h-6">
              <img
                src={storeLogo}
                alt="test"
                className="object-contain"
              />
            </div>
            <p className="text-sm mr-2 text-zinc-700">
              <span>فروشگاه </span>
              <span>
                {Product.IsVendor ? Product.MainGroupName : 'شهروند'}
              </span>
            </p>
          </div>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              className="fill-sky-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" />
            </svg>
            <span className="text-sm mr-2 text-zinc-700">
              موجود در انبار
            </span>
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="bg-gray-100 px-2 py-1  rounded-md border  border-gray-300/60">
              <span className="text-xl font-semibold">
                {Quantity}
              </span>
              <span className="mr-1 text-xs text-gray-500">
                {UnitName}
              </span>
            </p>
            <p className="font-bold mr-4 ">
              <span>{Total.toLocaleString()}</span>
              <span className="mr-1">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileProductCard.propTypes = {};

export default ProfileProductCard;
