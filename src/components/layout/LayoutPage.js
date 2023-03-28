import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import FooterLayout from './footer/FooterLayout';

const LayoutPage = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterLayout />
    </>
  );
};

LayoutPage.propTypes = {};

export default LayoutPage;
