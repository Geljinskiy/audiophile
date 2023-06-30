// libs imports
import React from 'react';
// local imports
import { Link } from 'react-router-dom';
import { Button } from 'components/common';
import { ROUTES } from 'utils';
import css from './ProductReviewZX7.module.scss';

type ProductReviewZX7Props = {
  className: string;
};

const ProductReviewZX7: React.FC<ProductReviewZX7Props> = ({
  className,
}): JSX.Element => {
  return (
    <div className={`${className ?? ''} ${css.category__zx7_speaker}`}>
      <h3 className={css.title}>ZX7 speaker</h3>
      <Button styling="light">
        <Link className={css.link} to={'product/ZX7'}>
          See product
        </Link>
      </Button>
    </div>
  );
};

export default ProductReviewZX7;
