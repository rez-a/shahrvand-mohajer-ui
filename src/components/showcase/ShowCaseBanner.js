import React from "react";
import PropTypes from "prop-types";

const ShowCaseBanner = ({ bannerUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden ">
      <img src={bannerUrl} alt="image-slider" />
    </div>
  );
};

ShowCaseBanner.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
};

export default ShowCaseBanner;
