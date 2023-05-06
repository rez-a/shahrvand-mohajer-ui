import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import ProductPage from 'pages/ProductPage';
import NotFound from 'pages/NotFound';

const ProductRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route
          path=":mainErpCode/:sideErpCode/:erpCode"
          element={<ProductPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

ProductRoutes.propTypes = {};

export default ProductRoutes;
