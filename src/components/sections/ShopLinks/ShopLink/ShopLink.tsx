// libs imports
import React from 'react';
import { Link } from 'react-router-dom';
// local imports
import css from './ShopLink.module.scss';

//! chagne later
// type imagesProps = {
//   mabile: string;
//   tablet: string;
//   // desktop: string;
// };

// type ShopLinkProps = {
//   name: string;
//   images: any;
//   target: string;
// };

type Device = {
  src: string;
  width: number;
};

type ShopLinkProps = {
  name: string;
  images: {
    mobile: Device;
    tablet: Device;
    desktop: Device;
  };
  target: string;
};

const ShopLink: React.FC<ShopLinkProps> = ({ images, name, target }) => {
  const { mobile, tablet, desktop } = images;
  return (
    <Link to={target} className={css.linkWrapper}>
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
    </Link>
  );
};

export default ShopLink;
