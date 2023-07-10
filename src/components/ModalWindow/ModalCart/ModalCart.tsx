// libs imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// local imports
import { ROUTES, CartItem, ProductProps } from 'utils';
import css from './ModalCart.module.scss';
import { Button, CartItemPrice } from 'components';
import { calcTotalPrice } from 'utils';
import { CartGoods } from 'components/sections/Summary/CartGoods';

type ModalCartProps = {
  close: () => void;
};

const ModalCart: React.FC<ModalCartProps> = ({ close }) => {
  const storageCart =
    (JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]) || [];
  const [cart, setCart] = useState<CartItem[]>(storageCart);

  const total = calcTotalPrice(cart);
  const len = cart.length;

  const resetCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className={css.modalWrapper}>
      <div className={css.head}>
        <h2 className={css.heading}>cart({len})</h2>
        {len > 0 && (
          <button onClick={resetCart} className={css.removeButton}>
            Remove all
          </button>
        )}
      </div>
      {len > 0 ? (
        <>
          <CartGoods cart={cart} counter={true} setCart={setCart} />
          <CartItemPrice name="total" value={total} className={css.total} />
          <Link to={ROUTES.checkout} onClick={close}>
            <Button styling="color" className={css.button}>
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <p className={css.cartEmpty}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ModalCart;
