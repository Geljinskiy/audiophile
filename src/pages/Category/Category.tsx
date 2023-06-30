// libs imports
import React from 'react';
import { useParams } from 'react-router-dom';
// local imports
import { HeroCategory, ProductLinks, ShopLinks, AboutUs } from 'components';
import { headphones, earphones, speakers } from 'data';

type CategoryProps = {
  category: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { categoryType } = useParams<{ categoryType: string }>();

  let categoryProduct;

  switch (categoryType) {
    case 'speakers':
      categoryProduct = speakers;
      break;
    case 'earphones':
      categoryProduct = earphones;
      break;
    case 'headphones':
      categoryProduct = headphones;
      break;
    default:
      categoryProduct = speakers;
  }

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
