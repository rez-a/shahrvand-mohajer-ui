import React from 'react';
import Address from './Address';
import { ADDRESSES } from "services/endPoints";
import useSWR from "swr";
import { fetcher } from "services/swr/fetcher";

const Addresses = ({
  handleUpdateAddresses,
  user,
  orderAddress,
  order,
  setOrder,
  setEditAddress,
}) => {
  const { data, mutate, isLoading } = useSWR(ADDRESSES, fetcher);
  const addresses = !!data && data.data;
  return (
    <div className="max-h-96 overflow-auto border rounded p-2">
      <ul>
        {addresses.map((address, i) => (
          <li key={i}>
            <Address
              addresses={addresses}
              address={address}
              orderAddress={orderAddress}
              index={i}
              user={user}
              order={order}
              setOrder={setOrder}
              setEditAddress={setEditAddress}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addresses;
