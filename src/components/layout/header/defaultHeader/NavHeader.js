import React from 'react';
import PropTypes from 'prop-types';
import MegaMenu from '../megaMenu/MegaMenu';
import { Link } from 'react-router-dom';

const NavHeader = ({ categories, showMenuNav }) => {
  return (
    <nav
      className={`flex items-center gap-2  transition-all duration-100 ${
        showMenuNav ? 'h-auto py-2' : 'h-0 py-0 overflow-hidden'
      }`}
    >
      <div
        className={`border-l relative pl-2 group cursor-pointer font-semibold transition before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 py-3 before:-translate-x-1/2 before:top-full before:bg-rose-500  hover:before:w-full ${
          showMenuNav ? '' : 'overflow-hidden'
        }`}
      >
        {categories?.data?.length && (
          <MegaMenu categories={categories?.data} />
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
    </nav>
  );
};

NavHeader.propTypes = {};

export default NavHeader;
