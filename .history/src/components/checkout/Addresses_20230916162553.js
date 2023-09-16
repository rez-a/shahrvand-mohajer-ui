import React from "react";
import Address from "./Address";
import { ADDRESSES } from "services/endPoints";
import useSWR from "swr";
import { fetcher } from "services/swr/fetcher";
import AddAddress from "./AddAddress";
import TitleIcon from 'components/shared/TitleIcon';

const Addresses = ({ user, orderAddress, order, setOrder, setEditAddress, editAddress }) => {
  const { data, mutate, isLoading } = useSWR(ADDRESSES, fetcher);
  const addresses = !!data && data.data;
  return (
    <>
      <div className="mb-12">
        <div className="flex items-center mb-4 justify-between">
          <h2 className="text-zinc-500 font-bold flex items-center">
            <TitleIcon />
            <span className="mr-1">انتخاب آدرس تحویل سفارش</span>
          </h2>
          {editAddress && (
            <button
              onClick={() => setEditAddress(false)}
              className="bg-gray-100 p-1 rounded-full hover:bg-gray-200/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
              </svg>
            </button>
          )}
        </div>
        {!editAddress ? (
          <div className="border-r-2 border-r-rose-500 pr-2">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-8 mb-6 md:mb-2">
                <p className="text-zinc-500 text-sm">
                  نام و نام و خانوادگی گیرنده: 
                  <span className="text-black font-semibold mr-1">{user.name}</span>
                </p>
              </div>
              <button
                onClick={() => setEditAddress(true)}
                className="relative overflow-hidden group block text-white w-auto text-sm px-4 py-2 rounded-md font-bold shadow-lg  transition-all duration-300 bg-sky-500  hover:bg-sky-500 bg-sky-500/90 shadow-sky-500/50"
              >
                تغییر آدرس ارسال
              </button>
            </div>
            <p className="text-zinc-500 my-1 text-sm">
              شماره همراه :
              <span className="text-black font-semibold mr-1">{user.mobile}</span>
            </p>
            {addresses && (
            <p className="text-zinc-500 my-1 text-sm">
              آدرس پیش فرض شما:
              <span className="text-black font-semibold mr-1">{addresses[0].address_full ?? null}</span>
            </p> )}
          </div>
        ) : (
          <div>
            <AddAddress addresses={addresses} />
            {addresses && (
              <div className="max-h-96 overflow-auto p-2">
                <ul>
                  {addresses.map((address, i) => (
                    <li key={i}>
                      <Address
                        addresses={addresses}
                        address={address}
                        orderAddress={orderAddress}
                        index={address.machine_key}
                        user={user}
                        order={order}
                        setOrder={setOrder}
                        setEditAddress={setEditAddress}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Addresses;
