import React from 'react';
import Address from './Address';
import { ADDRESSES } from "services/endPoints";
import useSWR from "swr";
import { fetcher } from "services/swr/fetcher";
import AddAddress from './AddAddress';

const Addresses = ({
  user,
  orderAddress,
  order,
  setOrder,
  setEditAddress,
}) => {
  const { data, mutate, isLoading } = useSWR(ADDRESSES, fetcher);
  const addresses = !!data && data.data;
  return (
    <>
    <AddAddress addresses={addresses}/>
    {  addresses && (
    <div className="max-h-96 overflow-auto border rounded p-2">
      <ul>
        {addresses.map((address, i) => (
          <p>fff</p>
        ))}
      </ul>
    </div>
    )}
    </>
  );
};

export default Addresses;
