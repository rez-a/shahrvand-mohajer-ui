import React from 'react';
import PropTypes from 'prop-types';
import PeriodicDiscount from 'components/home/PeriodicDiscount';
import Header from 'components/layout/header/Header';
import FooterLayout from 'components/layout/footer/FooterLayout';
import { Outlet, useLocation } from 'react-router-dom';
import useControllerScroll from 'hooks/useControllerScroll';

const LayoutHome = () => {
  useControllerScroll();

  return (
    <>
      <PeriodicDiscount />
      <Header />
      <Outlet />
      <FooterLayout />
    </>
  );
};

LayoutHome.propTypes = {};

export default LayoutHome;
