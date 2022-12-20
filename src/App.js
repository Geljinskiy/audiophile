import { Routes, Route } from 'react-router-dom';

import { MainButton, SharedLayout } from 'components';

import { ROUTES } from 'utils';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route
            index
            element={<div style={{ fontFamily: 'ManropeBold' }}>Home page</div>}
          />
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
      <MainButton btnStyle={'dark'}>Some text</MainButton>
      <MainButton btnStyle={'light'}>Some text</MainButton>
      <MainButton btnStyle={'color'}>Some text</MainButton>
      <MainButton btnStyle={'invible'}>Some text</MainButton>
    </>
  );
}

export default App;
