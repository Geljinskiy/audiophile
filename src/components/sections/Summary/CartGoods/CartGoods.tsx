// libs imports
import React from 'react';
// local imports
import css from './CartGoods.module.scss';
import { CartGood } from 'components';

type CartItem = {
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type CartGoodsProps = {
  cart: CartItem[];
  className?: string;
};

const CartGoods: React.FC<CartGoodsProps> = ({ cart, className }) => {
  return (
    <ul className={`${css.list} ${className}`}>
      {cart.map(item => {
        return (
          <li className={css.listItem} key={item.name}>
            <CartGood {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CartGoods;
