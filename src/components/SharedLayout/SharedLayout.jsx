import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div style={{ fontFamily: 'ManropeMedium' }}>Header is here</div>
      <Outlet />
      <div style={{ fontFamily: 'ManropeRegular' }}>Footer is here</div>
    </>
  );
};

export default SharedLayout;
