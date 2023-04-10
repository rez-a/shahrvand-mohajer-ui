import React from 'react';
import PropTypes from 'prop-types';
import iconStore from 'assets/images/Group-2.png';
import { Link } from 'react-router-dom';
import SHR_white from 'assets/images/SHM-White-Bold.svg';

const MegaMenu = () => {
  return (
    <div className="absolute top-[105%] right-0 w-[70vw] z-20 bg-white shadow-xl rounded-xl grid grid-cols-4  gap-2 visible group-hover:visible overflow-hidden">
      <div className="col-span-1 grid max-h-80 overflow-auto gap-2 p-4">
        <div>
          <input
            id="test1"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test1"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test2"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test2"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test3"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test3"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test4"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test4"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test5"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test5"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test6"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test6"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test7"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test7"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test8"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test8"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test9"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test9"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
        <div>
          <input
            id="test10"
            type="radio"
            name="category"
            className="peer appearance-none hidden"
          />
          <label
            htmlFor="test10"
            className="flex items-center text-zinc-500 transition gap-2 px-4  py-2 rounded bg-white border border-zinc-100 peer-checked:bg-sky-50/50 peer-checked:border-sky-100 peer-checked:text-black cursor-pointer  hover:bg-sky-50/50 hover:text-black hover:border-sky-100 group/item"
          >
            <div className="w-8 h-8">
              <img src={iconStore} alt="category" />
            </div>
            <p className="text-sm whitespace-nowrap">غذاپزی قاصدک</p>
          </label>
        </div>
      </div>
      <div className="border-r px-2 flex col-span-2 flex-col justify-between p-4">
        <div className="max-h-80 overflow-auto">
          <ul className="mb-2 grid grid-cols-2 ">
            {[...Array(20)].map((link) => (
              <li>
                <Link
                  className="text-sm p-2 rounded hover:bg-sky-50/50 border flex items-center transition border-white hover:border-sky-100 group w-full group/link"
                  to="products/MainGroupErpCode/slugMainGroupErpCode/SideGroupErpCode/slugSideGroupErpCode"
                >
                  ابزار آلات برقی
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="inline mr-auto opacity-0 transition-all duration-200 translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-rose-500 col-span-1  h-full w-full flex items-center justify-center">
        <svg
          version="1.1"
          id="Layer_1"
          className="fill-white block w-72 h-72"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 235.21 170.32"
        >
          <circle class="st0" cx="98.22" cy="55.52" r="4.3" />
          <path
            class="st0"
            d="M141.87,54.14c-3.62-2.22-8.12-2.22-11.74,0c-1.12,0.69-1.47,2.15-0.79,3.28c0.45,0.73,1.23,1.14,2.03,1.14
	c0.42,0,0.85-0.11,1.24-0.35c2.05-1.26,4.71-1.26,6.76,0c1.12,0.69,2.59,0.33,3.28-0.79C143.34,56.3,142.99,54.83,141.87,54.14z"
          />
          <path
            class="st0"
            d="M136,65.65c-1.32,0-2.38,1.07-2.38,2.38c0,9.1-7.4,16.5-16.5,16.5c-9.1,0-16.5-7.4-16.5-16.5
	c0-1.32-1.07-2.38-2.38-2.38s-2.38,1.07-2.38,2.38c0,11.73,9.54,21.27,21.27,21.27c11.73,0,21.27-9.54,21.27-21.27
	C138.38,66.72,137.31,65.65,136,65.65z"
          />
          <path
            class="st0"
            d="M161.79,93.04l-6.09-58.62c-0.86-8.27-7.78-14.51-16.09-14.51h-5.86v-0.64c0-9.18-7.47-16.64-16.64-16.64
	s-16.64,7.47-16.64,16.64v0.64h-4.91c-8.32,0-15.24,6.24-16.09,14.51l-6.09,58.62c-0.47,4.55,1.01,9.11,4.08,12.51
	c3.06,3.4,7.44,5.35,12.02,5.35h56.23c4.57,0,8.95-1.95,12.02-5.35C160.78,102.14,162.26,97.59,161.79,93.04z M105.23,19.27
	c0-6.55,5.33-11.88,11.88-11.88s11.88,5.33,11.88,11.88v0.64h-23.75V19.27z M154.17,102.35c-2.16,2.4-5.25,3.77-8.48,3.77H89.47
	c-3.23,0-6.32-1.37-8.48-3.77c-2.16-2.4-3.21-5.61-2.88-8.82l6.09-58.62c0.61-5.84,5.49-10.24,11.35-10.24h4.91v4.77h-0.26
	c-1.32,0-2.38,1.07-2.38,2.38c0,1.32,1.07,2.38,2.38,2.38h5.28c1.32,0,2.38-1.07,2.38-2.38c0-1.32-1.07-2.38-2.38-2.38h-0.26v-4.77
	h23.75v4.77h-0.26c-1.32,0-2.38,1.07-2.38,2.38c0,1.32,1.07,2.38,2.38,2.38h5.28c1.32,0,2.38-1.07,2.38-2.38
	c0-1.32-1.07-2.38-2.38-2.38h-0.26v-4.77h5.86c5.87,0,10.75,4.4,11.35,10.24l6.09,58.62C157.38,96.74,156.33,99.95,154.17,102.35z"
          />
        </svg>
      </div>
    </div>
  );
};

MegaMenu.propTypes = {};

export default MegaMenu;
