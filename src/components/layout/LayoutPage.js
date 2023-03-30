import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import FooterLayout from './footer/FooterLayout';
import Breadcrumb from 'components/Breadcrumb';

const LayoutPage = (props) => {
  return (
    <>
      <Header />
      <main className="2xl:container mx-4">
        <Breadcrumb />
        <Outlet />
      </main>
      <FooterLayout />
    </>
  );
};

LayoutPage.propTypes = {};

export default LayoutPage;
