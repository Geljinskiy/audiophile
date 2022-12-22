import { Container } from 'components';
import { Outlet } from 'react-router-dom';

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
