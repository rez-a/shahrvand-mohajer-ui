import React from 'react';
import PropTypes from 'prop-types';
import WorkingTime from 'components/home/WorkingTime';
import Header from 'components/layout/header/Header';
import FooterLayout from 'components/layout/footer/FooterLayout';
import { Outlet, useLocation } from 'react-router-dom';
import useControllerScroll from 'hooks/useControllerScroll';
import { DimmerContext } from 'contexts/DimmerProvider';
import { useContext } from 'react';

const LayoutHome = () => {
  const { showDimmer } = useContext(DimmerContext);
  useControllerScroll();

  return (
    <>
      <WorkingTime />
      <Header />
      <div className="relative py-6">
        <Outlet />
        <div
          className={`dimmer absolute top-0 left-0 w-full h-full transition-all duration-150  z-[1] ${
            showDimmer
              ? 'bg-black/50 visible '
              : 'bg-black/0 invisible'
          }`}
        />
      </div>
      <FooterLayout />
    </>
  );
};

LayoutHome.propTypes = {};

export default LayoutHome;
