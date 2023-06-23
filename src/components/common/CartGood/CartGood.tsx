// libs imports
import React from 'react';
// local imports
import css from './CartGood.module.scss';

type CartGoodProps = {
  name: string;
  price: number;
  img: string;
  quantity: number;
};

const CartGood: React.FC<CartGoodProps> = ({ name, price, img, quantity }) => {
  return (
    <>
      <div className={css.goodInf}>
        <div className={css.imageWrap}>
                  <img
                    //   width=""
                      className={css.image} src={img} alt={name} />
        </div>
        <p className={css.name}>{name}</p>
        <span className={css.price}>$ {price}</span>
      </div>
      <span className={css.quantity}>x{quantity}</span>
    </>
  );
};

export default CartGood;
