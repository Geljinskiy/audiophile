// libs imports
import React from 'react';
// local imports
import {
  Section,
  ProductReviewZX9,
  ProductReviewZX7,
  ProductReviewYX1,
  Container,
} from 'components';
import css from './ProductsReview.module.scss';

const ProductsReview: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Section>
        <ProductReviewZX9 className={`${css.category} ${css.category__mb}`} />
        <ProductReviewZX7 className={`${css.category}  ${css.category__mb}`} />
        <ProductReviewYX1 className={css.category} />
      </Section>
    </Container>
  );
};

export default ProductsReview;
