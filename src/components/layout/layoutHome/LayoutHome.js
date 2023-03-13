import React from "react";
import PropTypes from "prop-types";
import PeriodicDiscount from "./PeriodicDiscount";
import Header from "components/layout/header/Header";
import Footer from "components/layout/Footer";
import { Outlet } from "react-router-dom";

const LayoutHome = () => {
  return (
    <div>
      <PeriodicDiscount />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

LayoutHome.propTypes = {};

export default LayoutHome;
