import React from "react";
import PropTypes from "prop-types";
import PeriodicDiscountBanner from "assets/images/banners/periodic-discount.jpg";

const PeriodicDiscount = () => {
  return (
    <div className="w-full h-20">
      <img src={PeriodicDiscountBanner} alt="PeriodicDiscountBanner" />
    </div>
  );
};

PeriodicDiscount.propTypes = {};

export default PeriodicDiscount;
