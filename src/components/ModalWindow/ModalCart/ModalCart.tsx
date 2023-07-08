// libs imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// local imports
import { ROUTES, CartItem } from 'utils';
import css from './ModalCart.module.scss';
import { Button, CartGood, CartItemPrice } from 'components';
import { calcTotalPrice } from 'utils';

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
    setCart([]);
  };

  return (
    <>
      <div className={css.head}>
        <h2 className={css.heading}>cart({len})</h2>
        {len > 0 && (
          <button
            onClick={resetCart}
            className={css.removeButton}
          >
            Remove all
          </button>
        )}
      </div>
      {len > 0 ? (
        <>
          <ul className={css.list}>
            {cart.map(item => {
              return (
                <li key={item.name} className={css.listItem}>
                  <CartGood {...item} setCart={setCart} counter={true} />
                </li>
              );
            })}
          </ul>
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
    </>
  );
};

export default ModalCart;
