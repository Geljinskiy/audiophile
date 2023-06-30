// libs imports
import React from 'react';
import { useWindowWidth } from 'utils';
// local imports
import css from './Header.module.scss';
import { Container, PagesLinks, IconButton } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
import { pages } from 'data';
import { VIEWPORT_WIDTH } from 'utils/constants';

type HeaderProps = {
  type?: 'transparent' | 'solid';
};

const Header: React.FC<HeaderProps> = ({ type = 'solid' }) => {
  const windowWidth = useWindowWidth();
  return (
    <header className={`${css.header} ${css[type]}`}>
      <Container className={css.header__container}>
        {windowWidth < VIEWPORT_WIDTH.desktop && (
          <IconButton>
            <BurgerIcon className={css.burger} />
          </IconButton>
        )}
        <Logo className={css.logo} />
        {windowWidth >= VIEWPORT_WIDTH.desktop && <PagesLinks pages={pages} />}
        <IconButton className={css.cart}>
          <CartIcon />
        </IconButton>
      </Container>
    </header>
  );
};

export default Header;
