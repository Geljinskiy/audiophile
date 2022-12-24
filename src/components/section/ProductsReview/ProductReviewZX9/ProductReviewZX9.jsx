import { Link } from 'react-router-dom';

import { Button, ProductReviewZX9Image } from 'components';

import { ROUTES } from 'utils';

import css from './ProductReviewZX9.module.scss';

const ProductReviewZX9 = ({ className }) => {
  return (
    <div className={`${className ?? ''} ${css.category__zx9_speaker}`}>
      <ProductReviewZX9Image />
      <div className={css.text_wrapper__zx9}>
        <h3 className={`${css.title__zx9}`}>ZX9 speaker</h3>
        <p className={css.description__zx9}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <Button className={css.button__zx9} styling="dark">
          <Link className={css.link} to={ROUTES.home}>
            See product
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductReviewZX9;
