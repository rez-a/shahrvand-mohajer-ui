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
    <div key={index} className="border border-gray-100 flex items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold border-l px-4 py-5">{index + 1}</div>
        <div className="text-sm px-4">
          <div className="font-bold">
          آدرس ثبت شده:
          </div>
          {address}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between px-4">
        <div className="flex gap-3">
          <button onClick={handleShowEditModal} class="text-white border border-blue-700 hover:border-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg"  class="w-5 h-5 fill-blue-700"  viewBox="0 0 24 24"><path d="M12.6844 4.02535C12.4588 4.00633 12.2306 3.99658 12 3.99658C7.58172 3.99658 4 7.5783 4 11.9966C4 16.4149 7.58172 19.9966 12 19.9966C16.4183 19.9966 20 16.4149 20 11.9966C20 11.766 19.9902 11.5378 19.9711 11.3122C19.8996 10.4644 19.6953 9.64408 19.368 8.87332L20.8682 7.37102C21.2031 8.01179 21.4706 8.69338 21.6613 9.40637C21.8213 10.0062 21.9258 10.6221 21.9723 11.2479C21.9907 11.4951 22 11.7447 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C12.2518 1.99658 12.5015 2.00589 12.7487 2.02419C13.3745 2.07069 13.9904 2.17529 14.5898 2.33568C15.3032 2.52597 15.9848 2.79347 16.6256 3.12837L15.1247 4.62922C14.3525 4.30131 13.5321 4.09695 12.6844 4.02535ZM20.4853 2.09709L21.8995 3.5113L12.7071 12.7037L11.2954 12.7062L11.2929 11.2895L20.4853 2.09709Z"></path></svg>
</button>

          <button onClick={handleRemove} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {removeLoading ? <Spinner /> : "حذف"}
</button>
          
        </div>
      </div>
    </div>
  );
};

Address.propTypes = {};

export default Address;
