import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Category from './Category';
import { UserContext } from 'contexts/UserProvider';
import ProfileAccessLink from './ProfileAccessLink';
import { useState } from 'react';

const Navigations = ({ categories, showNav, setShowNav }) => {
  const [showProfileAccess, setShowProfileAccess] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (showNav) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add(
        'fixed',
        'inset-x-0',
        'overflow-hidden'
      );
    } else {
      document.body.style.paddingRight = null;
      document.body.classList.remove(
        'fixed',
        'inset-x-0',
        'overflow-hidden'
      );
    }
  }, [showNav]);

  useEffect(() => {
    setShowProfileAccess(false);
  }, [location]);

  return (
    <nav
      className={`fixed  h-screen top-0 bg-white w-5/6 sm:w-1/2 p-4 overflow-auto transition-all duration-300 delay-200 ${
        showNav ? 'right-0' : '-right-full'
      }`}
    >
      <div className="pb-4 mb-4 flex items-center justify-between border-b border-b-gray-200">
        <Link to="/" className="grow">
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
        <button
          onClick={() => setShowNav(false)}
          className="bg-neutral-200 p-0.5 rounded-full"
        >
          <svg
            className="fill-neutral-600 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
          </svg>
        </button>
      </div>
      <div className="pb-4  border-b border-b-gray-200">
        {!!user ? (
          <>
            <button
              onClick={() => setShowProfileAccess(!showProfileAccess)}
              className="flex items-center text-sm font-bold w-full"
            >
              <svg
                className="inline ml-1 fill-black group-hover:fill-rose-500"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
              </svg>
              <div>
                <h2 className="mb-1 text-base">
                  {!!user.name ? user.name : 'نام کاربری'}
                </h2>
                <p className="text-xs text-zinc-400">{user.mobile}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-black group-hover:fill-black mr-auto"
              >
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
              </svg>
            </button>
            {showProfileAccess && (
              <ProfileAccessLink
                user={user}
                setShowProfileAccess={setShowProfileAccess}
              />
            )}
          </>
        ) : (
          <Link
            to="/login"
            className="border rounded text-xs py-2 px-2 flex items-center justify-center bg-gray-50 border-gray-100 hover:bg-zinc-100 text-zinc-500 transition mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-zinc-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="px-2 border-l">ورود</span>
            <span className="px-2 ">ثبت نام</span>
          </Link>
        )}
      </div>
      <ul className="flex flex-col items-start gap-4 py-4 mb-4 border-b border-b-gray-200">
        <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
          <Link to="/products/section/SLIDER2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-1 fill-zinc-500 group-hover:fill-rose-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z" />
            </svg>
            جدیدترین محصولات
          </Link>
        </li>
        <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
          <Link to="/products/section/SLIDER6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-1 fill-zinc-500 group-hover:fill-rose-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
            </svg>
            تخفیف ها و پیشنهادها
          </Link>
        </li>
        <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
          <Link to="/lottery">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-1 fill-zinc-500 group-hover:fill-rose-500"
            >
              <path d="M15.0049 2.00293C17.214 2.00293 19.0049 3.79379 19.0049 6.00293C19.0049 6.73196 18.8098 7.41544 18.4691 8.00404L23.0049 8.00293V10.0029H21.0049V20.0029C21.0049 20.5552 20.5572 21.0029 20.0049 21.0029H4.00488C3.4526 21.0029 3.00488 20.5552 3.00488 20.0029V10.0029H1.00488V8.00293L5.54065 8.00404C5.19992 7.41544 5.00488 6.73196 5.00488 6.00293C5.00488 3.79379 6.79574 2.00293 9.00488 2.00293C10.2001 2.00293 11.2729 2.52714 12.0058 3.35819C12.7369 2.52714 13.8097 2.00293 15.0049 2.00293ZM11.0049 10.0029H5.00488V19.0029H11.0049V10.0029ZM19.0049 10.0029H13.0049V19.0029H19.0049V10.0029ZM9.00488 4.00293C7.90031 4.00293 7.00488 4.89836 7.00488 6.00293C7.00488 7.05729 7.82076 7.92109 8.85562 7.99744L9.00488 8.00293H11.0049V6.00293C11.0049 5.00129 10.2686 4.17162 9.30766 4.0257L9.15415 4.00842L9.00488 4.00293ZM15.0049 4.00293C13.9505 4.00293 13.0867 4.81881 13.0104 5.85367L13.0049 6.00293V8.00293H15.0049C16.0592 8.00293 16.923 7.18705 16.9994 6.15219L17.0049 6.00293C17.0049 4.89836 16.1095 4.00293 15.0049 4.00293Z"></path>
            </svg>
            قرعه کشی ها
          </Link>
        </li>
        <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
          <Link to="/about-us">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-1 fill-zinc-500 group-hover:fill-rose-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.72V4H1V2h22v2h-2zM5 4v13.745l7 3.1 7-3.1V4H5zm3 4h8v2H8V8zm0 4h8v2H8v-2z" />
            </svg>
            درباره ما
          </Link>
        </li>
        <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
          <Link to="/faq">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-1 fill-zinc-500 group-hover:fill-rose-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
            </svg>
            سوالی دارید؟
          </Link>
        </li>
      </ul>
      <div>
        <h2 className="font-bold mb-6">دسته بندی کالاها</h2>
        {!!categories?.data.length && (
          <ul className="divide-y">
            {categories?.data.map((category) => (
              <Category key={category.Id} category={category} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

Navigations.propTypes = {};

export default Navigations;
