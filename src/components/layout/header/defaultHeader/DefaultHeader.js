import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import TopHeader from './TopHeader';
import NavHeader from './NavHeader';
import { useEffect } from 'react';
import { useState } from 'react';

const DefaultHeader = ({ categories }) => {
  const [showMenuNav, setShowMenuNav] = useState(true);
  const navLink = useRef();
  const controllerNavMenu = () => {
    window.scrollY > navLink.current?.getBoundingClientRect()?.height
      ? setShowMenuNav(false)
      : setShowMenuNav(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', controllerNavMenu);
  }, []);
  return (
    <header
      ref={navLink}
      className="shadow bg-white sticky top-0 z-10 mb-6 hidden lg:block"
    >
      <div className="content relative 2xl:container">
        <TopHeader />
        <NavHeader
          categories={categories}
          showMenuNav={showMenuNav}
        />
      </div>
    </header>
  );
};

DefaultHeader.propTypes = {};

export default DefaultHeader;
