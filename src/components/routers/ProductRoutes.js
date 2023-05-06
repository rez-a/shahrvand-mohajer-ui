import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import NotFound from 'pages/NotFound';

const ProductRoutes = (props) => {
  return (
    <>
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
