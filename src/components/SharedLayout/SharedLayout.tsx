// libs imports
import React from 'react';
import { useLocation } from 'react-router-dom';
// local imports
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import css from './SharedLayout.module.scss';

const SharedLayout: React.FC = (): JSX.Element => {
  const loc = useLocation();
  const isHomePage = loc.pathname === '/';
  const isCheckoutPage = loc.pathname === '/checkout';
  return (
    <>
      <Header type={isHomePage ? 'transparent' : 'solid'} />
      <main className={isCheckoutPage ? css.checkoutBg : ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
