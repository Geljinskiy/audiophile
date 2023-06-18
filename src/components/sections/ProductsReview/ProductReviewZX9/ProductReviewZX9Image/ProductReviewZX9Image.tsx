// libs imports
import React from 'react';
// local imports
import css from './ProductReviewZX9Image.module.scss';
import {
  SpeakerZX9DesktopImg,
  SpeakerZX9MobileImg,
  SpeakerZX9TabletImg,
} from 'assets';

const ProductReviewZX9Image: React.FC = (): JSX.Element => {
  return (
    <picture>
      <source
        media="(max-width: 767.9px)"
        width="172"
        srcSet={SpeakerZX9MobileImg}
      />
      <source
        media="(max-width: 1439.9px)"
        width="197"
        srcSet={SpeakerZX9TabletImg}
      />
      <source
        media="(min-width: 1440px)"
        width="410"
        srcSet={SpeakerZX9DesktopImg}
      />
      <img
        className={css.image__zx9}
        src={SpeakerZX9MobileImg}
        alt="Speaker ZX9"
      />
    </picture>
  );
};

export default ProductReviewZX9Image;
