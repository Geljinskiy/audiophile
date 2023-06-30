// libs imports
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// local imports
import css from './ShopLink.module.scss';
import ShopLinkProps from './ShopLinkProps';

const ShopLink: React.FC<ShopLinkProps> = ({
  images,
  name,
  target,
  className,
}) => {
  const { mobile, tablet, desktop } = images;
  return (
    <li className={className}>
      <NavLink to={target} className={css.linkWrapper}>
        <picture className={css.picture}>
          <source
            //! extract media sizes into vars
            media="(max-width: 767.9px)"
            width={mobile.width.toString()}
            srcSet={mobile.src}
          />
          <source
            media="(max-width: 1439.9px)"
            width={tablet.width.toString()}
            srcSet={tablet.src}
          />
          <source
            media="(min-width: 1440px)"
            width={desktop.width.toString()}
            srcSet={desktop.src}
          />
          <img src={mobile.src} alt={name} />
        </picture>
        <h3 className={css.prodHeading}>{name}</h3>
        <span className={css.button}>
          <span className={css.buttonText}>shop</span>
        </span>
      </NavLink>
    </li>
  );
};

export default ShopLink;
