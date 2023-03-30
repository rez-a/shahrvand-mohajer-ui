import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/logo.svg';
import MegaMenu from './MegaMenu';

const Header = () => {
  return (
    <header className="shadow">
      <div className="content 2xl:container">
        <nav className="flex items-center py-4">
          <div className="h-8 w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="115"
              height="30"
              viewBox="0 0 115 30"
              className="w-full h-full"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#EE384E">
                  <g>
                    <g>
                      <path
                        d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27 0-.525.119-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z"
                        transform="translate(-1235 -19) translate(-238) translate(1473 19)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
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
            <button className="border rounded text-xs py-1 px-2 flex items-center bg-gray-50 border-gray-100 hover:bg-zinc-100 transition">
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
              <span className="px-2">ثبت نام</span>
            </button>
            <button className="border-r mr-2 px-2 group border-zinc-300">
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
            </button>
          </div>
        </nav>
        <nav className="flex items-center gap-2 py-2">
          <div className="border-l relative pl-2 group cursor-pointer font-semibold transition before:absolute before:w-0 before:h-[1px] before:transition-all before:duration-200 before:left-1/2 before:-translate-x-1/2 before:top-full before:bg-rose-500 py-1 hover:before:w-full">
            <MegaMenu />
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
