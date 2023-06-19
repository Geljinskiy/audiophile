// libs imports
import React from 'react';
// local imports
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header } from 'components';

const SharedLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
