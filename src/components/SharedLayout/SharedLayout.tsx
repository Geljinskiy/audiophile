// libs imports
import React from 'react';
import { useLocation } from 'react-router-dom';
// local imports
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import { ROUTES } from 'utils';

const SharedLayout: React.FC = (): JSX.Element => {
  const loc = useLocation();
  const isHomePage = loc.pathname === '/';

  return (
    <>
      <Header type={isHomePage ? 'transparent' : 'solid'} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
