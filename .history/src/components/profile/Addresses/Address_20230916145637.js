import React from 'react';
import Spinner from 'components/shared/Spinner';
import { useState } from 'react';
import { ADDRESSES } from 'services/endPoints';
import { handleRequest } from 'services';
import Toast from 'utilities/sweetAlert';
import { mutate } from 'swr';

const Address = ({
  address,
  index,
  checkLengthAddresses,
}) => {

  const [isLoadingSpinner, setLoadingSpinner] = useState();

  const handleRemoveAddress = async (id) => {
    const response = await handleRequest({
      url : `${ADDRESSES}/${id}`,
      method: 'delete',
    });
    Toast.fire({
      icon: "success",
      title: response,
    });
    await mutate();
  };

  return (
    <div
      key={index}
      className="border border-gray-100 flex items-center justify-between"
    >
      <div className="flex items-center">
        <div className="font-bold border-l px-4 py-5 w-10">
          {address.id}
        </div>
        <div className="text-sm px-4">
          {address.address_full}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between px-4">
        <div className="flex gap-1">
          {checkLengthAddresses && (
            <button
            onClick={()=>handleRemoveAddress(address.id)}
              class="text-white border border-rose-700 hover:border-rose-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 "
            >
              {isLoadingSpinner ? (
                <Spinner />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-rose-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Address.propTypes = {};

export default Address;
