// libs imports
import React from 'react';
import { useParams } from 'react-router-dom';
// local imports
import { HeroCategory, ProductLinks, ShopLinks, AboutUs } from 'components';
import { headphones, earphones, speakers } from 'data';

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  //! change
  if (!categoryName) {
    return <div>err</div>;
  }

  let categoryProduct;

  switch (categoryName) {
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

  if (categoryName === 'speakers') {
    categoryProduct = speakers;
  } else if (categoryName === 'earphones') {
    categoryProduct = earphones;
  } else {
    categoryProduct = headphones;
  }

  console.log(categoryProduct[0].productCategory);

  return (
    <>
      <HeroCategory heading={categoryName} />
      <ProductLinks product={categoryProduct} />
      <ShopLinks />
      <AboutUs />
    </>
  );
};

export default Category;
