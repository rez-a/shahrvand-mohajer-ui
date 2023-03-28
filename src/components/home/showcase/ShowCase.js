import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseSlider from './ShowcaseSlider';
import ShowCaseBanner from './ShowCaseBanner';
import banner1 from 'assets/images/banners/showcase-banner1.jpg';
import banner2 from 'assets/images/banners/showcase-banner2.jpg';

const ShowCase = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 mx-4 my-8">
      <div className="col-span-2 rounded-xl overflow-hidden h-full">
        <ShowcaseSlider />
      </div>
      <div className="space-y-4 ">
        <ShowCaseBanner bannerUrl={banner1} />
        <ShowCaseBanner bannerUrl={banner2} />
      </div>
    </div>
  );
};

ShowCase.propTypes = {};

export default ShowCase;
