// libs imports
import React from 'react';
import { useParams } from 'react-router-dom';
// local imports
import { HeroCategory, ProductLinks, ShopLinks, AboutUs } from 'components';
import { headphones, speakers, earphones } from 'data';

type CategoryProps = {
  category: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { categoryType } = useParams<{ categoryType: string }>();

  let categoryProduct;

  if (categoryType === 'speakers') {
    categoryProduct = speakers;
  } else if (categoryType === 'earphones') {
    categoryProduct = earphones;
  } else {
    categoryProduct = headphones;
  }

  return (
    <>
      <HeroCategory heading={category} />
      <ProductLinks product={categoryProduct} />
      <ShopLinks />
      <AboutUs />
    </>
  );
};

export default Category;
