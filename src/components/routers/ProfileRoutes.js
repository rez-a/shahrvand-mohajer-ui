import React from 'react';
import PropTypes from 'prop-types';
import MainProfile from '../profile/MainProfile';
import EditProfile from '../profile/EditProfile';
import Addresses from '../profile/Addresses/Addresses';
import Orders from '../profile/Orders';
import Payments from '../profile/Payments';
import OrderDetails from '../profile/OrderDetails';
import PaymentDetails from '../profile/PaymentDetails';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Wallet from 'components/profile/Wallet';

const ProfileRoutes = (props) => {
  return (
    <div className="grid xl:col-span-5 gap-y-4">
      <Routes>
        <Route path="main" element={<MainProfile />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="orders">
          <Route index element={<Orders />} />
          <Route path="details/:orderId" element={<OrderDetails />} />
        </Route>
        <Route path="payments">
          <Route index element={<Payments />} />
          {/* <Route
            path="details/:paymentId"
            element={<PaymentDetails />}
          /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

ProfileRoutes.propTypes = {};

export default ProfileRoutes;
