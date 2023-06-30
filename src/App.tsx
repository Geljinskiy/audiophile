// libs imports
import { Routes, Route } from 'react-router-dom';
import React from 'react';
// local imports
import { SharedLayout } from 'components';
import { Checkout, Home, ProductDetails } from 'pages';
import { ROUTES } from 'utils';
import { Category } from 'pages/Category';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.category} element={<Category />} />
          <Route path={ROUTES.checkout} element={<Checkout />} />
          <Route path={ROUTES.product} element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
