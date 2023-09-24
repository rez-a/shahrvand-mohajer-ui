import React from "react";
import Address from "./Address";
import { ADDRESSES } from "services/endPoints";
import useSWR from "swr";
import { fetcher } from "services/swr/fetcher";
import AddAddress from "./AddAddress";
import TitleIcon from "components/shared/TitleIcon";

const Addresses = ({
  user,
  orderAddress,
  order,
  setOrder,
  setEditAddress,
  editAddress,
}) => {
  const { data, mutate, isLoading } = useSWR(ADDRESSES, fetcher);
  const addresses = !!data && data.data;

  return (
    <>
      <div className="mb-12">
        <div className="flex items-center mb-4 justify-between">
          <h2 className="text-neutral-800 font-bold flex items-center">
            <span className="mr-1">آدرس تحویل سفارش</span>
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
          <div className="pr-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.276 6.022v0a7.462 7.462 0 0 1 0 10.553l-4.033 4.034a1.76 1.76 0 0 1-2.487 0l-4.033-4.034a7.462 7.462 0 0 1 0-10.553v0a7.462 7.462 0 0 1 10.553 0Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.276 6.022v0a7.462 7.462 0 0 1 0 10.553l-4.033 4.034a1.76 1.76 0 0 1-2.487 0l-4.033-4.034a7.462 7.462 0 0 1 0-10.553v0a7.462 7.462 0 0 1 10.553 0Z"
                  clip-rule="evenodd"
                />
                <circle
                  cx="12"
                  cy="11.299"
                  r="2.56"
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              <div>
                {addresses && (
                  <div className="text-neutral-800 font-medium my-1 text-base">
                    <span className="text-black font-semibold mr-1">
                      {addresses[0].address_full ?? null}
                    </span>
                  </div>
                )}
                <p className="text-neutral-800 font-light text-base flex">
                  نام و نام و خانوادگی گیرنده
                  <div className="mr-1">{user.name}</div>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={() => setEditAddress(true)}
                className="hover:opacity-70 relative overflow-hidden group block text-neutral-800 w-auto text-sm px-4 py-2 rounded-md font-right transition-all duration-300"
              >
                تغییر یا ویرایش آدرس
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline rotate-180"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#323232"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m10 16 4-4-4-4"
                  />
                </svg>
              </button>
            </div>
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
                        index={address.id}
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
