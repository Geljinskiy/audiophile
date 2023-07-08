// libs imports
import React, { useState, useEffect } from 'react';
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
import { CartItem } from 'utils';
const products = [XX59, XX99MarkI, XX99MarkII, YX1, ZX7, ZX9];

const ProductDetails: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();

  const storageCart =
    (JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]) || [];

  const isInCart = (cart: CartItem[]) => {
    return cart.find(el => el.name.replace(/\s/g, '') === productName);
  };

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
      <Product
        {...product}
        cartQuantity={isInCart(storageCart)?.quantity || 1}
      />
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
