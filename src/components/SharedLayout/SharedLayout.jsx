import { Outlet } from 'react-router-dom';

import { Footer } from 'components';

const SharedLayout = () => {
  return (
    <>
      <div>Header is here</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
