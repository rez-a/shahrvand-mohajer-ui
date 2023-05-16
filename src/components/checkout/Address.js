import React from 'react';

const Address = ({
  orderAddress,
  address,
  index,
  user,
  order,
  setOrder,
}) => {
  const handleSetAddress = () => {
    setOrder({ ...order, address: { text: address, index } });
  };
  return (
    <>
      <div
        onClick={handleSetAddress}
        className={`border p-4 rounded-md mb-3 cursor-pointer ${
          orderAddress.index === index
            ? 'border-sky-400 bg-sky-50/50'
            : 'border-gray-400 bg-gray-50/50'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start gap-4 justify-between">
          <div className="flex items-center gap-8">
            <p className="text-zinc-500">
              گیرنده :
              <span className="text-black font-semibold mr-1">
                {user.name}
              </span>
            </p>
          </div>
        </div>
        <p className="text-zinc-500 my-3 text-sm">
          شماره تماس :
          <span className="text-black font-semibold mr-1">
            {user.mobile}
          </span>
        </p>
        <p>{address}</p>
      </div>
    </>
  );
};

export default Address;
