// libs imports
import React from 'react';
// local imports
import css from './FooterBodyText.module.scss';

const FooterBodyText: React.FC = (): JSX.Element => {
  return (
    <>
      <p className={`${css.footer__about_us} ${css.footer__text}`}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className={`${css.footer__copyright} ${css.footer__text}`}>
        Copyright 2021. All Rights Reserved
      </p>
    </>
  );
};

export default FooterBodyText;
