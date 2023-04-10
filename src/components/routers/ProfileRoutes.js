import React from 'react';
import PropTypes from 'prop-types';
import MainProfile from '../profile/MainProfile';
import EditProfile from '../profile/EditProfile';
import Addresses from '../profile/Addresses';
import Orders from '../profile/Orders';
import Payments from '../profile/Payments';
import OrderDetails from '../profile/OrderDetails';
import PaymentDetails from '../profile/PaymentDetails';
import { Route, Routes } from 'react-router-dom';

const ProfileRoutes = (props) => {
  return (
    <Routes>
      <Route index element={<MainProfile />} />
      <Route path="edit" element={<EditProfile />} />
      <Route path="addresses" element={<Addresses />} />
      <Route path="orders">
        <Route index element={<Orders />} />
        <Route path="details/:orderId" element={<OrderDetails />} />
      </Route>
      <Route path="payments">
        <Route index element={<Payments />} />
        <Route
          path="details/:paymentId"
          element={<PaymentDetails />}
        />
      </Route>
    </Routes>
  );
};

ProfileRoutes.propTypes = {};

export default ProfileRoutes;
