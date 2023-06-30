// libs imports
import React from 'react';
// local imports
import { ProductImage } from 'utils';
import css from './GalleryItem.module.scss'

const GalleryItem: React.FC<
  ProductImage & {
    className?: string | false;
    productName: string;
    large?: boolean;
  }
> = ({
  desktopImg,
  mobileImg,
  tabletImg,
  productName,
  large = false,
  className,
}) => {
  return (
    <picture>
      <source media="(max-width: 767.9px)" width="327" srcSet={mobileImg} />
      <source
        media="(max-width: 1439.9px)"
        width={large ? 395 : 277}
        srcSet={tabletImg}
      />
      <source
        media="(min-width: 1440px)"
        width={large ? 635 : 445}
        srcSet={desktopImg}
      />
      <img
        className={`${className ? className : ''} ${css.img}`}
        src={mobileImg}
        alt={productName}
      />
    </picture>
  );
};

export default GalleryItem;
