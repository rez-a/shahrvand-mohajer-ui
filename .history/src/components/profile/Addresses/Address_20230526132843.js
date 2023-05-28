import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "components/shared/Spinner";
import { useState } from "react";

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
    <div key={index} className="border border-gray-100 flex items-center justify-between px-4 py-5">
      <div className="flex items-center">
        <div className="font-bold">{index + 1}</div>
        <div className="text-sm font-bold pb-2">آدرس ثبت شده:</div>
        {address}
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
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
            {removeLoading ? <Spinner /> : "حذف"}
          </button>
        </div>
      </div>
    </div>
  );
};

Address.propTypes = {};

export default Address;
