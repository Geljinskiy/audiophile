// libs imports
import React from 'react';
// local imports
import css from './FooterLinks.module.scss';
import { Logo } from 'assets';
import { pages } from 'data';
import { FooterPLinks } from 'components/common';

const FooterLinks: React.FC = (): JSX.Element => {
  return (
    <div className={css.footer__wrapper}>
      <div className={css.footer__logo}>
        <Logo />
      </div>
      <FooterPLinks pages={pages} className={css.link_list} />
    </div>
  );
};

export default FooterLinks;
