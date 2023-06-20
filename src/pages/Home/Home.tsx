// libs imports
import React from 'react';
// local imports
import { ProductsReview, AboutUs, HeroHome } from 'components';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroHome />
      <ProductsReview />
      <AboutUs />
    </>
  );
};

export default Home;
