import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ProfileSummary from '../ProfileSummary';
import { useContext } from 'react';
import { CartContext } from 'contexts/CartProvider';
import { useState } from 'react';
import Navigations from './Navigations';
import SearchBox from './serchBox/SearchBox';

const MobileHeader = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigaion = useNavigate();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [showNav, setShowNav] = useState(false);
  const [bottomHeader, setShowBottomHeader] = useState(true);
  const {
    state: { cart },
  } = useContext(CartContext);
  const productsInCart = cart.reduce(
    (totalProducts, vendor) => totalProducts + vendor.products.length,
    0
  );
  const handleSearch = () => {
    !!search && navigaion(`/search?q=${search}`);
  };

  const handleCloseNav = (e) => {
    e.target.id === 'backdrop' && setShowNav(false);
  };

  const navLink = useRef();
  const controllerNavMenu = () => {
    window.scrollY > navLink.current?.getBoundingClientRect()?.height
      ? setShowBottomHeader(false)
      : setShowBottomHeader(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', controllerNavMenu);
  }, []);

  return (
    <header className="shadow bg-white sticky top-0 z-10 mb-4 block lg:hidden">
      <div className="flex items-center justify-between border-b border-b-gray-200 py-4 mx-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="inline ml-2 group-hover:fill-rose-500"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </button>
        <Link to="/" className="h-8 w-32">
          <svg
            width="55.861481mm"
            height="10.45898mm"
            viewBox="0 0 55.861481 10.45898"
            version="1.1"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-32 fill-rose-500"
          >
            <defs id="defs2" />
            <g
              id="g760"
              transform="matrix(0.26458333,0,0,0.26458333,-1.2170833,-32.46702)"
            >
              <rect
                x="24.99"
                y="154.73"
                className="st0"
                width="4.8000002"
                height="4.8299999"
                id="rect720"
              />
              <path
                className="st0"
                d="m 40.48,137.13 -8.12,-3.78 c -0.5,-0.25 -1,-0.46 -1.49,-0.62 -0.49,-0.16 -1.09,-0.24 -1.79,-0.24 -1.01,0 -1.99,0.21 -2.96,0.62 -0.97,0.42 -1.82,1.04 -2.55,1.87 l -3.47,4.23 3.78,3.32 3.47,-3.85 c 0.23,-0.25 0.5,-0.45 0.81,-0.6 0.31,-0.15 0.64,-0.23 0.96,-0.23 0.25,0 0.63,0.1 1.13,0.3 l 5.25,2.53 -3.66,3.32 c -1.31,1.21 -2.94,1.81 -4.91,1.81 h -7.86 -1.59 c -0.5,0 -0.92,-0.17 -1.25,-0.51 -0.33,-0.34 -0.49,-0.76 -0.49,-1.27 v -6.61 H 11.93 10.3 v 12.54 c 0,1.39 -0.13,2.44 -0.38,3.17 -0.25,0.73 -0.76,1.41 -1.51,2.04 -0.75,0.63 -2.03,1.46 -3.81,2.49 l 2.04,4.57 c 2.44,-1.21 4.31,-2.35 5.59,-3.42 1.28,-1.07 2.19,-2.28 2.72,-3.64 0.42,-1.07 0.66,-2.39 0.75,-3.93 0.54,0.16 1.12,0.26 1.78,0.26 h 1.59 7.06 c 1.61,0 3.17,-0.28 4.68,-0.83 1.51,-0.55 2.84,-1.37 4,-2.46 l 6.12,-5.7 h 4.19 v -5.29 h -4.04 c -0.25,0.03 -0.45,-0.01 -0.6,-0.09 z"
                id="path722"
              />
              <path
                className="st0"
                d="m 94.4,136.49 c -1.26,-0.68 -2.64,-1.02 -4.15,-1.02 h -10.2 v 5.4 h 2.34 v 0.75 1.7 0.72 c 0,0.5 -0.17,0.93 -0.51,1.27 -0.34,0.34 -0.75,0.51 -1.23,0.51 H 78.16 76.5 c -0.7,0 -1.36,0.09 -1.99,0.25 0.3,-0.85 0.47,-1.75 0.47,-2.7 0,-1.49 -0.37,-2.86 -1.11,-4.14 -0.74,-1.27 -1.76,-2.28 -3.04,-3.02 -1.28,-0.74 -2.67,-1.11 -4.15,-1.11 -1.49,0 -2.83,0.37 -4.02,1.11 -1.2,0.74 -2.13,1.74 -2.81,3 -0.68,1.26 -1.02,2.64 -1.02,4.15 v 2.45 h -1.59 -2.08 c -0.48,0 -0.88,-0.17 -1.21,-0.51 -0.33,-0.34 -0.49,-0.76 -0.49,-1.27 v -17.97 h -5.44 v 18.31 c 0,1.28 0.31,2.47 0.94,3.57 0.63,1.09 1.49,1.96 2.57,2.61 1.08,0.64 2.28,0.96 3.59,0.96 h 2.11 1.59 v 1.47 c 0,1.41 0.36,2.72 1.08,3.93 0.72,1.21 1.68,2.16 2.89,2.87 1.21,0.71 2.52,1.06 3.93,1.06 h 9.44 v -5.36 h -2.49 v -1.4 c 0,-0.75 0.22,-1.37 0.66,-1.85 0.44,-0.48 1.03,-0.72 1.76,-0.72 h 2.08 2.49 c 1.87,0 3.33,-0.66 4.4,-1.94 0.36,0.33 0.74,0.64 1.17,0.91 1.2,0.74 2.53,1.11 4.02,1.11 1.49,0 2.86,-0.37 4.14,-1.11 1.27,-0.74 2.28,-1.75 3.02,-3.02 0.74,-1.27 1.11,-2.65 1.11,-4.13 0,-1.48 -0.37,-2.83 -1.11,-4.02 -0.75,-1.2 -1.75,-2.14 -3.01,-2.82 z m -30.21,6.87 c 0,-0.73 0.24,-1.33 0.72,-1.81 0.48,-0.48 1.07,-0.72 1.78,-0.72 0.73,0 1.34,0.24 1.83,0.72 0.49,0.48 0.74,1.08 0.74,1.81 0,0.71 -0.24,1.29 -0.74,1.76 -0.49,0.47 -1.1,0.7 -1.83,0.7 H 64.2 v -2.46 z m 2.57,12.13 c -0.68,0 -1.27,-0.24 -1.76,-0.74 -0.49,-0.49 -0.74,-1.08 -0.74,-1.76 v -1.47 h 2.42 c 0.88,0 1.72,-0.14 2.52,-0.39 -0.31,0.93 -0.48,1.91 -0.48,2.96 v 1.4 z m 25.3,-10.33 c -0.48,0.49 -1.08,0.74 -1.81,0.74 -0.73,0 -1.33,-0.24 -1.79,-0.74 -0.47,-0.49 -0.7,-1.1 -0.7,-1.83 v -2.45 h 2.49 c 0.73,0 1.33,0.23 1.81,0.7 0.48,0.47 0.72,1.05 0.72,1.76 0,0.72 -0.24,1.33 -0.72,1.82 z"
                id="path724"
              />
              <path
                className="st0"
                d="m 130.81,144.04 c 0,0.48 -0.17,0.89 -0.51,1.25 -0.34,0.35 -0.75,0.53 -1.23,0.53 h -2.04 -0.23 c -0.93,0 -1.61,-0.52 -2.04,-1.55 l -4.64,-12.88 -5.14,1.92 3.59,9.74 c 0.15,0.5 0.23,0.83 0.23,0.98 0,0.55 -0.19,0.99 -0.57,1.3 -0.38,0.32 -0.84,0.47 -1.4,0.47 h -8.99 v 5.7 h 8.99 c 1.16,0 2.1,-0.15 2.83,-0.45 0.73,-0.3 1.5,-0.85 2.3,-1.66 0.4,0.6 1.01,1.11 1.81,1.51 0.81,0.4 1.72,0.6 2.76,0.6 h 0.49 2.08 c 1.31,0 2.51,-0.32 3.59,-0.96 1.08,-0.64 1.94,-1.51 2.57,-2.61 0.63,-1.09 0.94,-2.28 0.94,-3.57 v -8.08 h -5.4 v 7.76 z"
                id="path726"
              />
              <rect
                x="130.92"
                y="128.22"
                className="st0"
                width="4.8299999"
                height="4.8699999"
                id="rect728"
              />
              <path
                className="st0"
                d="m 151.35,136.51 c -1.21,-0.74 -2.54,-1.11 -4,-1.11 -1.51,0 -2.9,0.37 -4.15,1.11 -1.26,0.74 -2.26,1.74 -3,3 -0.74,1.26 -1.11,2.64 -1.11,4.15 0,1.49 0.37,2.83 1.11,4.02 0.74,1.2 1.74,2.13 3,2.81 1.26,0.68 2.64,1.02 4.15,1.02 h 2.45 c 0,0.73 -0.2,1.36 -0.6,1.89 -0.4,0.53 -1.15,1.09 -2.25,1.7 -1.1,0.6 -2.76,1.38 -5,2.34 l 1.7,4.8 c 3.07,-1.33 5.41,-2.54 7.01,-3.61 1.6,-1.07 2.76,-2.33 3.47,-3.78 0.72,-1.45 1.08,-3.34 1.08,-5.68 v -5.51 c 0,-1.51 -0.34,-2.89 -1.02,-4.15 -0.69,-1.26 -1.63,-2.26 -2.84,-3 z m -1.55,9.65 h -2.45 c -0.73,0 -1.34,-0.24 -1.83,-0.72 -0.49,-0.48 -0.74,-1.08 -0.74,-1.81 0,-0.73 0.24,-1.33 0.74,-1.81 0.49,-0.48 1.1,-0.72 1.83,-0.72 0.7,0 1.29,0.24 1.76,0.72 0.47,0.48 0.7,1.08 0.7,1.81 v 2.53 z"
                id="path730"
              />
              <rect
                x="205.42"
                y="129.50999"
                className="st0"
                width="4.8699999"
                height="4.8299999"
                id="rect732"
              />
              <rect
                x="202.06"
                y="122.71"
                className="st0"
                width="4.8299999"
                height="4.8699999"
                id="rect734"
              />
              <rect
                x="198.63"
                y="129.50999"
                className="st0"
                width="4.8299999"
                height="4.8299999"
                id="rect736"
              />
              <path
                className="st0"
                d="m 210.26,136.3 v 9.52 h -1.36 c -0.48,0 -0.88,-0.17 -1.21,-0.51 -0.33,-0.34 -0.49,-0.76 -0.49,-1.27 v -6.61 h -1.09 -3.25 -1.09 v 6.68 c 0,0.5 -0.16,0.93 -0.49,1.27 -0.33,0.34 -0.74,0.51 -1.25,0.51 -0.5,0 -0.92,-0.17 -1.25,-0.51 -0.33,-0.34 -0.49,-0.76 -0.49,-1.27 v -6.68 h -1.06 -3.28 -1.06 v 6.61 c 0,0.5 -0.17,0.93 -0.51,1.27 -0.34,0.34 -0.76,0.51 -1.26,0.51 h -1.58 v 0 h -1.66 c -0.7,0 -1.36,0.09 -1.99,0.25 0.3,-0.85 0.47,-1.75 0.47,-2.7 0,-1.49 -0.37,-2.86 -1.11,-4.14 -0.74,-1.27 -1.76,-2.28 -3.04,-3.02 -1.28,-0.74 -2.67,-1.11 -4.15,-1.11 -1.48,0 -2.83,0.37 -4.02,1.11 -1.2,0.74 -2.13,1.74 -2.81,3 -0.68,1.26 -1.02,2.64 -1.02,4.15 v 2.45 H 168.62 167 c -0.5,0 -0.92,-0.17 -1.25,-0.51 -0.33,-0.34 -0.49,-0.76 -0.49,-1.27 v -6.61 h -3.78 -1.62 v 12.54 c 0,1.41 -0.09,2.51 -0.26,3.29 -0.18,0.78 -0.56,1.55 -1.15,2.3 -0.59,0.76 -1.56,1.66 -2.89,2.72 l 3.02,3.96 c 1.81,-1.36 3.18,-2.58 4.12,-3.66 0.93,-1.08 1.59,-2.28 1.98,-3.59 0.3,-1.02 0.49,-2.27 0.55,-3.74 0.54,0.16 1.11,0.27 1.77,0.27 h 1.62 1.59 v 1.47 c 0,1.41 0.36,2.72 1.08,3.93 0.72,1.21 1.68,2.16 2.89,2.87 1.21,0.71 2.52,1.06 3.93,1.06 h 9.44 v -5.36 h -2.49 v -1.4 c 0,-0.75 0.22,-1.37 0.66,-1.85 0.44,-0.48 1.03,-0.72 1.76,-0.72 h 2.08 v 0 h 1.58 c 1.9,0 3.37,-0.66 4.44,-1.94 v 0 c 1.07,1.35 2.56,2.02 4.47,2.02 1.91,0 3.4,-0.67 4.48,-2.02 0,0 0,-0.01 0.01,-0.01 1.05,1.3 2.51,1.96 4.39,1.96 h 6.8 V 136.3 Z m -34.71,7.06 c 0,-0.73 0.24,-1.33 0.72,-1.81 0.48,-0.48 1.07,-0.72 1.78,-0.72 0.73,0 1.34,0.24 1.83,0.72 0.49,0.48 0.74,1.08 0.74,1.81 0,0.71 -0.24,1.29 -0.74,1.76 -0.49,0.47 -1.1,0.7 -1.83,0.7 h -2.49 v -2.46 z m 2.57,12.13 c -0.68,0 -1.27,-0.24 -1.76,-0.74 -0.49,-0.49 -0.74,-1.08 -0.74,-1.76 v -1.47 h 2.42 c 0.88,0 1.72,-0.14 2.52,-0.39 -0.31,0.93 -0.48,1.91 -0.48,2.96 v 1.4 z"
                id="path738"
              />
            </g>
          </svg>
        </Link>
        <div className="flex">
          <Link to="/checkout/cart" className="relative mr-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-zinc-400 group-hover:fill-slate-500 transition"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
            {!!cart.length && (
              <span className="bg-rose-500 rounded-full text-white w-5 h-5 flex items-center justify-center p-1 text-xs absolute -top-2 -right-2">
                {productsInCart}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div
        ref={navLink}
        className={` flex items-center gap-1 sm:gap-8 transition-all duration-200 ${
          bottomHeader ? 'p-4 h-auto' : 'h-0 py-0 overflow-hidden'
        }`}
      >
        {/* <div className="relative h-full grow">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-whit outline-none focus-visible:outline-none text-base border border-slate-200 shadow-sm transition-all duration-200 focus:border-slate-300 text-slate-800 p-2 sm:pr-5 rounded-md w-full placeholder:w-3/4 truncate focus:shadow-sm placeholder:text-xs sm:placeholder:text-sm"
            type="text"
            placeholder="نام کالا ، برند و یا دسته مورد نظر خود را جستجو کنید..."
          />
          <button
            onClick={handleSearch}
            className="absolute left-0 top-0 h-full bg-white border pl-4 rounded-l-md flex items-center justify-center"
          >
            <span className="h-full w-0.5 border-r border-slate-200 pl-4"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="fill-gray-700 inline-flex"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
          </button>
        </div> */}
        <SearchBox />
        <ProfileSummary />
      </div>
      <div
        id="backdrop"
        onClick={handleCloseNav}
        className={
          showNav
            ? 'fixed top-0 z-50 visible opacity-100 w-screen bg-black/50 h-screen transition-all duration-200'
            : 'invisible opacity-0'
        }
      >
        <Navigations categories={categories} showNav={showNav} />
      </div>
    </header>
  );
};

export default MobileHeader;
