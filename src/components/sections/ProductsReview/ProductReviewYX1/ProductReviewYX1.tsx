// libs imports
import React from 'react';
// local imports
import { Link } from 'react-router-dom';
import { Button, ProductReviewYX1Image } from 'components';
import { ROUTES } from 'utils';
import css from './ProductReviewYX1.module.scss';

type ProductReviewYX1Props = {
  className: string,
} 

const ProductReviewYX1: React.FC<ProductReviewYX1Props> = ({ className }): JSX.Element => {
  return (
    <div className={css.category_wrapper__yx1}>
      <ProductReviewYX1Image />
      <div className={`${className ?? ''} ${css.category__yx1_earphones}`}>
        <h3 className={css.title}>YX1 earphones</h3>
        <Button styling="light">
          <Link className={css.link} to={ROUTES.home}>
            See product
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductReviewYX1;
