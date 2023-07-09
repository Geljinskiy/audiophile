// libs imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// local imports
import css from './ModalReciept.module.scss';
import { Button, Description } from 'components/common';
import { TickIcon } from 'assets';
import { RecieptItems } from 'components/sections/CheckoutSection/RecieptItems';
import { CartItem } from 'utils';

type ModalRecieptProps = {
  //   close: () => void;
};

const ModalReciept: React.FC<ModalRecieptProps> = () => {
  const storageCart =
    (JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]) || [];
  const [cart, setCart] = useState<CartItem[]>(storageCart);

  const resetCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className={css.modalWrapper}>
      <TickIcon className={css.svg} />
      <h2 className={css.heading}>thank you for your order</h2>
      <Description className={css.descr}>
        You will receive an email confirmation shortly.
      </Description>
      <RecieptItems className={css.recItems} cart={cart} />
      <Link to="/">
        <Button className={css.button} styling="color" onClick={resetCart}>
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default ModalReciept;
