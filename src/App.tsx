// libs imports
import { Routes, Route } from 'react-router-dom';
import React from 'react';
// local imports
import { SharedLayout } from 'components';
import { Checkout, Home } from 'pages';
import { ROUTES } from 'utils';
import { Category } from 'pages/Category';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path={ROUTES.category}
            element={<Category category="headphones" />}
          />
          <Route
            path={ROUTES.category}
            element={<Category category="speakers" />}
          />
          <Route
            path={ROUTES.category}
            element={<Category category="earphones" />}
          />
          <Route path={ROUTES.checkout} element={<Checkout />} />
          {/* <Route path={ROUTES.product} element={<div>product page</div>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
