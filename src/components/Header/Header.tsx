// libs imports
import React from 'react';
import { useWindowWidth } from 'utils';
// local imports
import css from './Header.module.scss';
import { Container, Button, PagesLinks } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
// import { FooterLinks } from '../Footer';
import pages from 'data/pageLinks.json';

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <header className={css.header}>
      <Container className={css.header__container}>
        {windowWidth < 1440 && <BurgerIcon className={css.burger} />}
        <Logo />
        {windowWidth >= 1440 && <PagesLinks pages={pages} />}
        <CartIcon className={css.cart} />
      </Container>
    </header>
  );
};

export default Header;
