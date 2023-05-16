import React from 'react';
import Address from './Address';

const Addresses = ({
  addresses,
  handleUpdateAddresses,
  user,
  orderAddress,
  order,
  setOrder,
  setEditAddress,
}) => {
  return (
    <div className="max-h-96 overflow-auto border rounded p-2">
      <ul>
        {addresses.map((address, i) => (
          <li key={i}>
            <Address
              handleUpdateAddresses={handleUpdateAddresses}
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
