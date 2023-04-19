import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import ProductPage from 'pages/ProductPage';

const ProductRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route
          path=":mainErpCode/:sideErpCode/:erpCode"
          element={<ProductPage />}
        />
      </Routes>
    </>
  );
};

ProductRoutes.propTypes = {};

export default ProductRoutes;
