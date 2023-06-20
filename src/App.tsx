// libs imports
import { Routes, Route } from 'react-router-dom';
import React from 'react';
// local imports
import { SharedLayout } from 'components';
import { Home } from 'pages';
import { ROUTES } from 'utils';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path={ROUTES.headphones}
            element={<div>headphones page</div>}
          />
          <Route path={ROUTES.speakers} element={<div>speakers page</div>} />
          <Route path={ROUTES.earphones} element={<div>earphones page</div>} />
          <Route path={ROUTES.checkout} element={<div>checkout page</div>} />
          {/* <Route path={ROUTES.product} element={<div>product page</div>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
