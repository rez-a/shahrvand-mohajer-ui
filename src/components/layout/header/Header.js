import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/logo.svg';
import MegaMenu from './megaMenu/MegaMenu';
import ProfileSummary from './ProfileSummary';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { CATEGORIES } from 'services/endPoints';

const Header = () => {
  const navLink = useRef();
  const [showMenuNav, setShowMenuNav] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', controllerNavMenu);
  }, []);
  const controllerNavMenu = () => {
    window.scrollY > navLink.current.getBoundingClientRect().height
      ? setShowMenuNav(false)
      : setShowMenuNav(true);
  };

  const { data: categories, isLoading } = useSWR(CATEGORIES, fetcher);

  return (
    <header
      ref={navLink}
      className="shadow bg-white sticky top-0 z-10"
    >
      <div className="content 2xl:container">
        <nav className="flex items-center  py-4 ">
          <Link to="/" className="h-8 w-32">
            {/* <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 228.61 40.07"
            >
              <g id="Layer_1-2" data-name="Layer 1">
                <rect
                  class="cls-1"
                  x="20.73"
                  y="31.15"
                  width="6.32"
                  height="6.32"
                />
                <path
                  class="cls-1"
                  d="M40.04,10.59c-.1,0-.21-.03-.35-.08l-8.73-4.08c-1.22-.65-2.52-.98-3.87-.98-1.17,0-2.34,.24-3.51,.71-1.17,.48-2.19,1.23-3.06,2.26l-4.28,5.22,5.22,4.57,4.24-4.69c.49-.43,.98-.65,1.47-.65,.24,0,.54,.08,.9,.24l4.69,2.28-3.22,2.86c-1.31,1.14-2.88,1.71-4.73,1.71H14.04c-.27,0-.48-.08-.63-.24s-.22-.38-.22-.65v-7.75H5.68v14.28c0,1.52-.09,2.62-.27,3.3-.18,.68-.65,1.37-1.41,2.08s-2.09,1.63-4,2.77l2.81,6.28c2.86-1.42,5.02-2.77,6.48-4.06,1.47-1.29,2.48-2.73,3.04-4.3,.38-1.08,.62-2.38,.74-3.88,.31,.04,.61,.09,.95,.09h9.75c1.79,0,3.55-.32,5.26-.96s3.25-1.57,4.61-2.79l6.61-6.2h5.02v-7.34h-5.02s-.11,0-.21,0Z"
                />
                <path
                  class="cls-1"
                  d="M98.3,10.53c-1.47-.78-3.07-1.16-4.81-1.16h-11.62v7.5h2.61v2.19c0,.27-.08,.49-.22,.65-.15,.16-.36,.24-.63,.24h-4.77c-.38,0-.76,.03-1.12,.07,.09-.51,.14-1.04,.14-1.58,0-1.74-.43-3.34-1.28-4.79-.86-1.45-2.02-2.62-3.49-3.49-1.47-.87-3.07-1.31-4.81-1.31s-3.26,.43-4.63,1.29c-1.37,.86-2.45,2.02-3.22,3.49-.78,1.47-1.16,3.07-1.16,4.81v1.51h-3.63c-.24,0-.44-.08-.59-.23s-.22-.36-.22-.63V0h-7.5V19.58c0,1.5,.37,2.88,1.1,4.14s1.73,2.27,2.98,3.02,2.64,1.12,4.16,1.12h3.71v1.06c0,1.68,.43,3.25,1.29,4.69,.86,1.44,2,2.59,3.45,3.45,1.44,.86,2.99,1.28,4.65,1.28h10.48v-7.42h-2.45v-1.39c0-.52,.13-.92,.39-1.22s.63-.45,1.12-.45h5.43c1.92,0,3.41-.59,4.53-1.71,.23,.18,.46,.35,.71,.51,1.37,.86,2.92,1.29,4.63,1.29s3.34-.44,4.81-1.31,2.63-2.03,3.49-3.49c.86-1.45,1.29-3.05,1.29-4.79s-.43-3.26-1.29-4.63c-.9-1.35-2.06-2.42-3.53-3.2Zm-31.6,7.94c0-.49,.14-.89,.43-1.2s.67-.47,1.16-.47c.52,0,.92,.16,1.22,.47s.45,.71,.45,1.2c0,.46-.15,.83-.45,1.1-.3,.27-.71,.41-1.22,.41h-1.59s0-1.51,0-1.51Zm2.04,12.48c-.54,0-1.01-.2-1.39-.59s-.57-.86-.57-1.41v-1.06h1.51c.6,0,1.18-.07,1.75-.17-.1,.6-.16,1.21-.16,1.84v1.39h-1.14Zm25.98-11.36c-.3,.31-.71,.47-1.22,.47s-.88-.16-1.16-.47c-.29-.31-.43-.71-.43-1.2v-1.51h1.59c.52,0,.92,.14,1.22,.41s.45,.64,.45,1.1c0,.48-.16,.89-.45,1.2Z"
                />
                <rect
                  class="cls-1"
                  x="135.99"
                  y=".6"
                  width="6.32"
                  height="6.32"
                />
                <path
                  class="cls-1"
                  d="M135.46,19.12c0,.24-.08,.45-.24,.61s-.35,.24-.57,.24h-2.41c-.41,0-.71-.1-.9-.29s-.37-.49-.53-.9l-5.3-14.6-7.14,2.65,4.08,11.01c.16,.55,.24,.87,.24,.98,0,.76-.48,1.14-1.43,1.14h-10.03v7.91h10.03c1.33,0,2.38-.12,3.14-.35,.76-.23,1.64-.73,2.65-1.49,.46,.49,1.1,.92,1.92,1.28,.82,.37,1.77,.55,2.86,.55h2.9c1.52,0,2.91-.37,4.16-1.12s2.24-1.75,2.98-3.02c.73-1.26,1.1-2.64,1.1-4.14V10.16h-7.51v8.96Z"
                />
                <path
                  class="cls-1"
                  d="M163.6,18.87c0-1.74-.39-3.35-1.16-4.81s-1.85-2.63-3.22-3.49-2.92-1.29-4.63-1.29-3.34,.43-4.79,1.29-2.62,2.02-3.49,3.49c-.87,1.47-1.31,3.07-1.31,4.81s.43,3.26,1.28,4.63c.86,1.37,2.02,2.45,3.49,3.22s3.07,1.16,4.81,1.16h1.51c0,.54-.18,1.04-.53,1.49-.35,.45-1.1,.99-2.24,1.63s-2.87,1.45-5.18,2.43l2.32,6.61c3.59-1.52,6.29-2.94,8.12-4.24,1.82-1.31,3.11-2.81,3.87-4.51s1.14-3.95,1.14-6.75v-5.67h.01Zm-7.5,1.59h-1.51c-.49,0-.89-.14-1.2-.43s-.47-.67-.47-1.16c0-.52,.16-.92,.47-1.22s.71-.45,1.2-.45c.46,0,.83,.15,1.1,.45s.41,.71,.41,1.22v1.59h0Z"
                />
                <path
                  class="cls-1"
                  d="M221.07,10.19v9.79h-.73c-.24,0-.44-.08-.59-.24s-.22-.38-.22-.65v-7.75h-7.51v7.83c0,.27-.08,.49-.22,.65-.15,.16-.36,.24-.63,.24s-.48-.08-.63-.24c-.15-.16-.22-.38-.22-.65v-7.83h-7.51v7.75c0,.27-.08,.49-.22,.65-.15,.16-.36,.24-.63,.24h-3.47c-.38,0-.76,.03-1.12,.07,.09-.51,.14-1.04,.14-1.58,0-1.74-.43-3.34-1.28-4.79-.86-1.45-2.02-2.62-3.49-3.49-1.47-.87-3.07-1.31-4.81-1.31s-3.26,.43-4.63,1.29c-1.37,.86-2.45,2.02-3.22,3.49-.78,1.47-1.16,3.07-1.16,4.81v1.51h-2.77c-.27,0-.48-.08-.63-.24-.15-.16-.22-.38-.22-.65v-7.75h-7.5v14.28c0,1.49-.08,2.64-.24,3.45-.16,.8-.56,1.61-1.18,2.43-.63,.82-1.65,1.85-3.06,3.1l4.2,5.47c2.09-1.66,3.68-3.12,4.75-4.38,1.07-1.27,1.85-2.67,2.32-4.2,.32-1.03,.52-2.26,.63-3.66,.31,.04,.6,.09,.94,.09h2.77v1.06c0,1.68,.43,3.25,1.29,4.69s2,2.59,3.45,3.45c1.44,.86,2.99,1.28,4.65,1.28h10.48v-7.42h-2.45v-1.39c0-.52,.13-.92,.39-1.22s.63-.45,1.12-.45h4.12c1.94,0,3.44-.61,4.57-1.75,1.13,1.2,2.66,1.83,4.65,1.83s3.52-.64,4.65-1.84c1.12,1.15,2.61,1.76,4.52,1.76h8.24V10.22h-7.54v-.03Zm-34.75,8.28c0-.49,.14-.89,.43-1.2s.67-.47,1.16-.47c.52,0,.92,.16,1.22,.47s.45,.71,.45,1.2c0,.46-.15,.83-.45,1.1s-.71,.41-1.22,.41h-1.59v-1.51Zm2.04,12.48c-.54,0-1.01-.2-1.39-.59s-.57-.86-.57-1.41v-1.06h1.51c.6,0,1.18-.07,1.75-.17-.1,.6-.16,1.21-.16,1.84v1.39h-1.14Z"
                />
              </g>
            </svg> */}
          </Link>
          <div className="w-1/2 relative h-full mr-2">
            <input
              className="bg-zinc-100 outline-none focus-visible:outline-none text-xs border border-white transition focus:border-zinc-200 text-zinc-400 p-2 pr-12 rounded w-full"
              type="text"
              placeholder="نام کالا ، برند و یا دسته مورد نظر خود را جستجو کنید..."
            />
            <button className="absolute right-1 hover:bg-rose-600 top-1/2 bg-rose-500 -translate-y-1/2 px-2 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </button>
          </div>
          <div className="mr-auto flex items-center">
            <ProfileSummary />
            <Link
              to="checkout/cart"
              className="border-r relative mr-2 px-2 group border-zinc-300"
            >
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
              <span className="bg-rose-500 rounded-full text-white w-5 h-5 flex items-center justify-center p-1 text-xs absolute -top-2 right-0">
                2
              </span>
            </Link>
          </div>
        </nav>
        <nav
          className={`flex items-center gap-2  transition-all duration-100 ${
            showMenuNav ? 'h-auto py-2' : 'h-0 py-0 overflow-hidden'
          }`}
        >
          <div
            className={`border-l relative pl-2 group cursor-pointer font-semibold transition before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full ${
              showMenuNav ? '' : 'overflow-hidden'
            }`}
          >
            {categories?.length && (
              <MegaMenu categories={categories} />
            )}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="inline ml-2 group-hover:fill-rose-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
            <span className="group-hover:text-rose-500 transition text-sm">
              دسته بندی کالا ها
            </span>
          </div>
          <ul className="flex items-center gap-4">
            <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
              <a href="#">
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
                پرفروش ترین ها
              </a>
            </li>
            <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
              <a href="#">
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
              </a>
            </li>
            <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
              <a href="#">
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
              </a>
            </li>
            <li className="group text-xs text-zinc-500  group relative transition hover:text-rose-500 before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
              <a href="#">
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
