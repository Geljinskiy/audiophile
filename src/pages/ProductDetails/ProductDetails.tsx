// libs imports
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
// local imports
import {
  AboutUs,
  Product,
  ProductGallerySection,
  ShopLinks,
  Recomendations,
  AboutProduct,
  GoBackLink,
  Section,
  Container,
} from 'components';

import css from './ProductDetails.module.scss';

import { XX59, XX99MarkI, XX99MarkII, YX1, ZX7, ZX9 } from 'data';
const products = [XX59, XX99MarkI, XX99MarkII, YX1, ZX7, ZX9];

const ProductDetails: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();

  let product;

  switch (productName) {
    case 'XX59':
      product = XX59;
      break;
    case 'XX99MarkI':
      product = XX99MarkI;
      break;
    case 'XX99MarkII':
      product = XX99MarkII;
      break;
    case 'YX1':
      product = YX1;
      break;
    case 'ZX7':
      product = ZX7;
      break;
    case 'ZX9':
      product = ZX9;
      break;
    default:
      product = XX59;
  }

  return (
    <>
      <Container>
        <Section className={css.linkSection}>
          <GoBackLink />
        </Section>
      </Container>
      <Product {...product} />
      <AboutProduct description={product.features} stuff={product.inBox} />
      <ProductGallerySection
        images={product.gallery}
        productName={product.productName}
      />
      <Recomendations products={products} currentProduct={product} />
      <ShopLinks />
      <AboutUs />
    </>
  );
};

export default ProductDetails;
