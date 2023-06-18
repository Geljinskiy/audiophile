// libs imports
import React from 'react';
// local imports
import css from './FooterLinks.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils';
import { Logo } from 'assets';

const FooterLinks:React.FC = () => {
  return (
    <div className={css.footer__wrapper}>
      <div className={css.footer__logo}>
        <Logo />
      </div>
      <ul className={css.link_list}>
        <li className={css.link_list__item}>
          <Link className={css.link_list__link} to={ROUTES.home}>
            Home
          </Link>
        </li>
        <li className={css.link_list__item}>
          <Link className={css.link_list__link} to={ROUTES.headphones}>
            Headphones
          </Link>
        </li>
        <li className={css.link_list__item}>
          <Link className={css.link_list__link} to={ROUTES.speakers}>
            Speakers
          </Link>
        </li>
        <li className={css.link_list__item}>
          <Link className={css.link_list__link} to={ROUTES.earphones}>
            Earphones
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
