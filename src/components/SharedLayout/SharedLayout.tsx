// libs imports
import React from 'react';
// local imports
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

const SharedLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
