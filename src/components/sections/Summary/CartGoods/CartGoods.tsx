// libs imports
import React, { Dispatch, SetStateAction } from 'react';
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
  counter?: boolean;
  setCart?: Dispatch<SetStateAction<CartItem[]>>;
};

const CartGoods: React.FC<CartGoodsProps> = ({
  cart,
  className,
  counter = false,
  setCart,
}) => {
  return (
    <ul className={`${css.list} ${className}`}>
      {cart.map(item => {
        return (
          <li className={css.listItem} key={item.name}>
            <CartGood {...item} counter={counter} setCart={setCart} />
          </li>
        );
      })}
    </ul>
  );
};

export default CartGoods;
