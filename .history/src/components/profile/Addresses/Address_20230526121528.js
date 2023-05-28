import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import { useState } from 'react';

const Address = ({
  user,
  address,
  index,
  handleShowEditModal,
  handleRemoveAddress,
}) => {
  const [removeLoading, setRemoveLoading] = useState(false);
  const handleRemove = async () => {
    setRemoveLoading(true);
    await handleRemoveAddress();
    removeLoading(false);
  };
  return (
    <div
      key={index}
      className="border border-gray-100 bg-gray-50/50 p-4 mb-3"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div className="flex items-center gap-8">
          <p className="text-zinc-500">
            گیرنده :
            <span className="text-black font-semibold mr-1">
              {!!user.name ? (
                user.name
              ) : (
                <Link
                  to="/profile/edit"
                  className="text-rose-500 text-xs underline decoration-dotted"
                >
                  نام کاربری خود را تعیین کنید
                </Link>
              )}
            </span>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleShowEditModal}
            className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300"
          >
            ویرایش
          </button>
          <button
            onClick={handleRemove}
            className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300"
          >
            {removeLoading ? <Spinner /> : 'حذف'}
          </button>
        </div>
      </div>
      <p className="text-zinc-500 my-3 text-sm">
        شماره تماس :
        <span className="text-black font-semibold mr-1">
          {user.mobile}
        </span>
      </p>
      <p>{address} </p>
    </div>
  );
};

Address.propTypes = {};

export default Address;
