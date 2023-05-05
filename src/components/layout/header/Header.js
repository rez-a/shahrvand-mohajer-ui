import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { CATEGORIES } from 'services/endPoints';
import DefaultHeader from './defaultHeader/DefaultHeader';
import MobileHeader from './mobileHeader/MobileHeader';

const Header = () => {
  const { data: categories } = useSWR(CATEGORIES, fetcher);

  return (
    <>
      {/* default header */}
      <DefaultHeader categories={categories} />
      {/* mobile header */}
      <MobileHeader categories={categories} />
    </>
  );
};

Header.propTypes = {};

export default Header;
