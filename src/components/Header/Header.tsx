// libs imports
import React from 'react';
// local imports
import { useWindowWidth, useModal, VIEWPORT_WIDTH } from 'utils';
import css from './Header.module.scss';
import { Container, PagesLinks, IconButton, ModalWindow } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
import { pages } from 'data';
import {} from 'utils';

type HeaderProps = {
  type?: 'transparent' | 'solid';
};

const Header: React.FC<HeaderProps> = ({ type = 'solid' }) => {
  const { isOpen, close, openBurger, openCart, modalType } = useModal();

  const windowWidth = useWindowWidth();
  return (
    <header className={`${css.header} ${css[type]}`}>
      <Container className={css.container}>
        {windowWidth < VIEWPORT_WIDTH.desktop && (
          <>
            <IconButton onButtonClick={openBurger}>
              <BurgerIcon className={css.burger} />
            </IconButton>
            {isOpen && (
              <ModalWindow
                isOpen={
                  isOpen &&
                  modalType === 'burger' &&
                  windowWidth < VIEWPORT_WIDTH.desktop
                }
                close={close}
                type={'burger'}
              />
            )}
          </>
        )}
        <Logo className={css.logo} />
        {windowWidth >= VIEWPORT_WIDTH.desktop && <PagesLinks pages={pages} />}
        <IconButton className={css.cart} onButtonClick={openCart}>
          <CartIcon />
        </IconButton>
        {isOpen && (
          <ModalWindow
            isOpen={isOpen && modalType === 'cart'}
            close={close}
            type={'cart'}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
