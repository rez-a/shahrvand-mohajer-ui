import React from 'react';
import PropTypes from 'prop-types';
import Services from './Services';
import Footer from './Footer';
import Trust from './Trust';
import Copyright from './Copyright';

const FooterLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="border-t p-2 bg-white mt-5">
      <div className="py-4">
        <button
          onClick={scrollToTop}
          type="button"
          className="flex items-center mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="bg-zinc-100 rounded-full w-8 h-8 p-1 fill-rose-500"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
          </svg>
          <span className="text-zinc-500 font-semibold mr-1">
            برگشت به بالا
          </span>
        </button>
      </div>
      <div className="container mx-auto">
        <Services />
        <Footer />
        <Trust />
        <Copyright />
      </div>
    </div>
  );
};

FooterLayout.propTypes = {};

export default FooterLayout;
