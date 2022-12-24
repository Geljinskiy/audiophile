import { Link } from 'react-router-dom';

import { Button } from 'components/common';

import { ROUTES } from 'utils';

import css from './ProductReviewZX7.module.scss';

const ProductReviewZX7 = ({ className }) => {
  return (
    <div className={`${className ?? ''} ${css.category__zx7_speaker}`}>
      <h3 className={css.title}>ZX7 speaker</h3>
      <Button styling="light">
        <Link className={css.link} to={ROUTES.home}>
          See product
        </Link>
      </Button>
    </div>
  );
};

export default ProductReviewZX7;
