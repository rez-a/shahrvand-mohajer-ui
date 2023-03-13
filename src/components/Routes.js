import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LayoutHome from "./layout/layoutHome/LayoutHome";

const Routes = () => {
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

export default Routes;
