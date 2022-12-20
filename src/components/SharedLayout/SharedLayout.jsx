import { Container } from 'components';
import Header from 'components/common/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div style={{ fontFamily: 'ManropeMedium' }}><Header/></div>
      <Container>
        <Outlet />
      </Container>
      <div style={{ fontFamily: 'ManropeRegular' }}>Footer is here</div>
    </>
  );
};

export default SharedLayout;
