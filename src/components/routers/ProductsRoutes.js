import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Categories from 'pages/Categories';
import Breadcrumb from 'components/Breadcrumb';
import Products from 'pages/Products';
import ProductPage from 'pages/ProductPage';

const ProductsRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route index element={<Categories />} />
        <Route
          path=":mainErpCode/:slugMain"
          element={
            <Routes>
              <Route index element={<Products />} />
              <Route
                path=":subErpCode/:slugSub/:productErpCode/:slugProduct"
                element={<ProductPage />}
              />
            </Routes>
          }
        />
      </Routes>
    </>
  );
};

ProductsRoutes.propTypes = {};

export default ProductsRoutes;
