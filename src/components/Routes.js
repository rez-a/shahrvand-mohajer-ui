import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutHome from "./layout/LayoutHome";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
