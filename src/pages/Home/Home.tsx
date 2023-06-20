// libs imports
import React from 'react';
// local imports
import { ProductsReview, AboutUs } from 'components';

const Home:React.FC = ():JSX.Element => {
  return (
    <>
      <ProductsReview />
      <AboutUs />
    </>
  );
};

export default Home;
