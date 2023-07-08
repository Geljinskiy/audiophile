// libs imports
import React from 'react';
import { Link } from 'react-router-dom';
// local imports
import { ProductLinkProps } from 'utils';
import css from './ProductLink.module.scss';
import { Button } from '../Button';

const ProductLink: React.FC<ProductLinkProps & { className?: string }> = ({
  img,
  productName,
  target,
  className,
}) => {
  const { desktopImg, mobileImg, tabletImg } = img;
  return (
    <li className={className}>
      <div className={css.imageWrap}>
        <picture>
          <source media="(max-width: 767.9px)" width="80" srcSet={mobileImg} />
          <source
            media="(max-width: 1439.9px)"
            width="146"
            srcSet={tabletImg}
          />
          <source media="(min-width: 1440px)" width="146" srcSet={desktopImg} />
          <img className={css.img} src={mobileImg} alt={productName} />
        </picture>
      </div>
      <h3 className={css.heading}>{productName}</h3>
      <Link to={target}>
        <Button styling="color">see product</Button>
      </Link>
    </li>
  );
};

export default ProductLink;
