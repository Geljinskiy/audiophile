// libs imports
import React from 'react';
import { useWindowWidth } from 'utils';
// local imports
import css from './Header.module.scss';
import { Container, PagesLinks, IconButton } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
import pages from 'data/pageLinks.json';

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <header className={css.header}>
      <Container className={css.header__container}>
        {windowWidth < 1440 && (
          <IconButton>
            <BurgerIcon className={css.burger} />
          </IconButton>
        )}
        <Logo />
        {windowWidth >= 1440 && <PagesLinks pages={pages} />}
        <IconButton>
          <CartIcon className={css.cart} />
        </IconButton>
      </Container>
    </header>
  );
};

export default Header;
