import { Container } from 'components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div style={{ fontFamily: 'ManropeMedium' }}>Header is here</div>
      <Container>
        <Outlet />
      </Container>
      <div style={{ fontFamily: 'ManropeRegular' }}>Footer is here</div>
    </>
  );
};

export default SharedLayout;
