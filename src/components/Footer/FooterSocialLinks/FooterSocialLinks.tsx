// libs imports
import React from 'react';
// local imports
import css from './FooterSocialLinks.module.scss';
// icons
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'assets';

const FooterSocialLinks: React.FC = (): JSX.Element => {
  return (
    <ul className={css.social_link__list}>
      <li className={css.social_link__item}>
        <a
          className={css.social_link__link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon fill="inherit" />
        </a>
      </li>
      <li className={css.social_link__item}>
        <a
          className={css.social_link__link}
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon fill="inherit" />
        </a>
      </li>
      <li className={css.social_link__item}>
        <a
          className={css.social_link__link}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon fill="inherit" />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocialLinks;
