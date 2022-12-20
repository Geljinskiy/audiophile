import { Container } from 'components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>Header is here</div>
      <Outlet />
      <div>Footer is here</div>
    </>
  );
};

export default SharedLayout;
