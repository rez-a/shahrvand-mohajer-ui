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
      <div>
        <div>
          آدرس ثبت شده:
        </div>
        {address} 
      </div>
    </div>
  );
};

Address.propTypes = {};

export default Address;
