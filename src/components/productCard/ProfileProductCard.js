import React from 'react';

const ProfileProductCard = ({
  Total,
  Price,
  Quantity,
  UnitName,
  Product,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start py-4 border-gray-100">
      <div className=" w-full md:w-1/2 lg:w-40">
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={Product.Image}
          alt=""
        />
      </div>
      <div class="flex flex-col w-full justify-between leading-normal grow mr-0 md:mr-2">
        <div>
          <div className="flex flex-col items-start sm:flex-row sm:items-center my-4 gap-4 justify-between">
            <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white ">
              {Product.Name}
            </h5>
            <div className="flex items-center justify-end">
              <p className="font-bold sm:mr-4">
                <span>{Price.toLocaleString()}</span>
                <span className="mr-1">تومان</span>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-rose-500"
              >
                <path d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
              </svg>
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
          <div className="flex w-full items-center justify-between mt-3">
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
