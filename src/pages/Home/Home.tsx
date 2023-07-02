// libs imports
import React from 'react';
// local imports
import { ProductsReview, AboutUs, HeroHome, ShopLinks } from 'components';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroHome />
      <ShopLinks />
      <ProductsReview />
      <AboutUs />
    </>
  );
};

export default Home;