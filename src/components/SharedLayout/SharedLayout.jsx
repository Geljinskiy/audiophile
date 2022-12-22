import { Outlet } from 'react-router-dom';

import { Footer } from 'components';

const SharedLayout = () => {
  return (
    <>
      <div>Header is here</div>
      <Container>
        <Outlet />
      </Container>
      <div>Footer is here</div>
    </>
  );
};

export default SharedLayout;
