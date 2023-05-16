import React from 'react';
import Address from './Address';

const Addresses = ({
  addresses,
  handleUpdateAddresses,
  user,
  orderAddress,
  order,
  setOrder,
}) => {
  console.log(user);
  return (
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
          />
        </li>
      ))}
    </ul>
  );
};

export default Addresses;
