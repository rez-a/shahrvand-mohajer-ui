import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import FooterLayout from './footer/FooterLayout';
import useControllerScroll from 'hooks/useControllerScroll';

const LayoutPage = (props) => {
  useControllerScroll();

  return (
    <>
      <Header />
      <main className="2xl:container mx-4">
        <Outlet />
      </main>
      <FooterLayout />
    </>
  );
};

LayoutPage.propTypes = {};

export default LayoutPage;
