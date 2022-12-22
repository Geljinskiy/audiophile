import { Outlet } from 'react-router-dom';

import { Container, Footer } from 'components';

const SharedLayout = () => {
  return (
    <>
      <header>Header is here</header>
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
