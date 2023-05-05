import React from 'react';
import PropTypes from 'prop-types';
import WorkingTime from 'components/home/WorkingTime';
import Header from 'components/layout/header/Header';
import FooterLayout from 'components/layout/footer/FooterLayout';
import { Outlet, useLocation } from 'react-router-dom';
import useControllerScroll from 'hooks/useControllerScroll';

const LayoutHome = () => {
  useControllerScroll();

  return (
    <>
      {/* <WorkingTime />
      <Header /> */}
      <Outlet />
      {/* <FooterLayout /> */}
    </>
  );
};

LayoutHome.propTypes = {};

export default LayoutHome;
