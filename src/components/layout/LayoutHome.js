import React from 'react';
import PropTypes from 'prop-types';
import PeriodicDiscount from 'components/home/PeriodicDiscount';
import Header from 'components/layout/header/Header';
import FooterLayout from 'components/layout/footer/FooterLayout';
import { Outlet } from 'react-router-dom';

const LayoutHome = () => {
  return (
    <div>
      <PeriodicDiscount />
      <Header />
      <Outlet />
      <FooterLayout />
    </div>
  );
};

LayoutHome.propTypes = {};

export default LayoutHome;
