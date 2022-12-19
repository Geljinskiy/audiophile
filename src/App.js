import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components';

import './index.css';
import { ROUTES } from 'utils';
import MainButton from 'components/common/MainButton';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<div>Home page</div>} />
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
      <MainButton>See propduct</MainButton>
    </>
  );
}

export default App;
