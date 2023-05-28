import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import FooterLayout from './footer/FooterLayout';
import useControllerScroll from 'hooks/useControllerScroll';
import { DimmerContext } from 'contexts/DimmerProvider';
import { useContext } from 'react';
import FooterInnerPage from './footer/FooterInnerPage';

const LayoutPage = (props) => {
  const { showDimmer } = useContext(DimmerContext);
  useControllerScroll();

  return (
    <>
      <Header />
      <div className="relative py-0 md:py-6">
        <main className="2xl:container mx-auto min-h-[400px]">
          <Outlet />
        </main>
        <div
          className={`dimmer absolute top-0 left-0 w-full h-full transition-all duration-150  z-[1] ${
            showDimmer
              ? 'bg-black/50 visible '
              : 'bg-black/0 invisible'
          }`}
        />
      </div>
      <FooterInnerPage />
    </>
  );
};

LayoutPage.propTypes = {};

export default LayoutPage;
