import React from 'react';

const Address = ({
  orderAddress,
  address,
  index,
  user,
  order,
  setOrder,
  setEditAddress,
}) => {
  const handleSetAddress = () => {
    setOrder({ ...order, address: { text: address, index } });
    setEditAddress(false);
  };
  return (
    <>
      <div
        onClick={handleSetAddress}
        className={`border p-4 rounded-md mb-3 cursor-pointer ${
          orderAddress.index === index
            ? 'border-sky-400 bg-sky-50/50'
            : 'border-gray-400 bg-gray-50/50 hover:bg-gray-100'
        }`}
      >
        <p>{address}</p>
      </div>
    </>
  );
};

export default Address;
