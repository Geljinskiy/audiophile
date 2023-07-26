// libs imports
import React, { useRef } from 'react';
// local imports
import { useWindowWidth, useModal, VIEWPORT_WIDTH } from 'utils';
import css from './Header.module.scss';
import { Container, PagesLinks, IconButton, ModalWindow } from 'components';
import { Logo, BurgerIcon, CartIcon } from 'assets';
import { pages } from 'data';

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
            {isOpen ? (
              <IconButton disabled={true}>
                <BurgerIcon className={css.burger} />
              </IconButton>
            ) : (
              <IconButton onButtonClick={openBurger}>
                <BurgerIcon className={css.burger} />
              </IconButton>
            )}
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
        {isOpen ? (
          <IconButton disabled={true}>
            <CartIcon className={css.cart} />
          </IconButton>
        ) : (
          <IconButton onButtonClick={openCart}>
            <CartIcon className={css.cart} />
          </IconButton>
        )}
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
