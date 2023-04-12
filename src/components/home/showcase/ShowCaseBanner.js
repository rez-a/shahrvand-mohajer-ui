import React from 'react';
import PropTypes from 'prop-types';

const ShowCaseBanner = ({ banners, sectionNum }) => {
  const banner = banners.find(
    (banner) => banner.Status === sectionNum
  );
  return (
    <div className="rounded-xl overflow-hidden h-1/2 ">
      <img src={banner.Image} alt="image-slider" />
    </div>
  );
};

ShowCaseBanner.propTypes = {
  banners: PropTypes.array,
  sectionNum: PropTypes.string,
};

export default ShowCaseBanner;
