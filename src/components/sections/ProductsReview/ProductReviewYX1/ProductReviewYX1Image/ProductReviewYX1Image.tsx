// libs imports
import React from 'react';
// local imports
import css from './ProductReviewYX1Image.module.scss';
import {
  EarphonesYX1MobileImg,
  EarphonesYX1TabletImg,
  EarphonesYX1DesktopImg,
} from 'assets';

const ProductReviewYX1Image: React.FC = (): JSX.Element => {
  return (
    <picture>
      <source
        media="(max-width: 767.9px)"
        width="327"
        srcSet={EarphonesYX1MobileImg}
      />
      <source
        media="(max-width: 1439.9px)"
        width="339"
        srcSet={EarphonesYX1TabletImg}
      />
      <source
        media="(min-width: 1440px)"
        width="540"
        srcSet={EarphonesYX1DesktopImg}
      />
      <img
        className={css.image__yx1}
        src={EarphonesYX1MobileImg}
        alt="YX1 Earphones"
      />
    </picture>
  );
};

export default ProductReviewYX1Image;
