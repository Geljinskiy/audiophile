// libs imports
import React from 'react';
// local imports
import { useWindowWidth, useModal } from 'utils';
import css from './Header.module.scss';
import { Container, PagesLinks, IconButton, ModalWindow } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
import { pages } from 'data';
import { VIEWPORT_WIDTH } from 'utils/constants';

type HeaderProps = {
  type?: 'transparent' | 'solid';
};

const Header: React.FC<HeaderProps> = ({ type = 'solid' }) => {
  const { isOpen, close, open } = useModal();

  const windowWidth = useWindowWidth();
  return (
    <header className={`${css.header} ${css[type]}`}>
      <Container className={css.container}>
        {windowWidth < VIEWPORT_WIDTH.desktop && (
          <IconButton>
            <BurgerIcon className={css.burger} />
          </IconButton>
        )}
        <Logo className={css.logo} />
        {windowWidth >= VIEWPORT_WIDTH.desktop && <PagesLinks pages={pages} />}
        <IconButton className={css.cart} onButtonClick={open}>
          <CartIcon />
        </IconButton>
        {isOpen && <ModalWindow isOpen={isOpen} close={close} />}
      </Container>
    </header>
  );
};

export default Header;
