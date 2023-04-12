import React from 'react';
import PropTypes from 'prop-types';
import banner1 from 'assets/images/banners/banner1.jpg';
const BannerItem = ({ banners, sectionNum }) => {
  const banner = banners?.find(
    (banner) => banner.Status === sectionNum
  );
  return (
    <div className="rounded-lg overflow-hidden max-h-44">
      <img src={banner.Image} alt="banner" />
    </div>
  );
};

BannerItem.propTypes = {};

export default BannerItem;
