// libs imports
import React from 'react';
// local imports
import { Container, Section, ProductLink } from 'components';
import { ProductImage, sortByCategory } from 'utils';
import css from './Recomendations.module.scss';

type Recomendation = {
  productImgWihtoutShadow: ProductImage;
  productName: string;
  productTarget: string;
  productCategory: string;
  // productIcon: string;
  // productDesc: string;
  // newProduct: boolean;
};

type RecomendationsProps = {
  products: Recomendation[];
  currentProduct: Recomendation;
};

const Recomendations: React.FC<RecomendationsProps> = ({
  products,
  currentProduct,
}) => {
  sortByCategory(currentProduct.productCategory, products);
  let productsIterations = 3;
  return (
    <Container>
      <Section className={css.section}>
        <h2 className={css.heading}>you may also like</h2>
        <ul className={css.list}>
          {products.map((prod, inx) => {
            const skip = prod.productName === currentProduct.productName;

            if (skip) {
              productsIterations += 1;
            }

            if (!skip && inx < productsIterations) {
              return (
                <ProductLink
                  className={css.listItem}
                  key={prod.productName}
                  {...prod}
                  productImage={prod.productImgWihtoutShadow}
                ></ProductLink>
              );
            }
            return null;
          })}
        </ul>
      </Section>
    </Container>
  );
};

export default Recomendations;
