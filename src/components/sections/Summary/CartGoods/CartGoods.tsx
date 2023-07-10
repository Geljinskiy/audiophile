// libs imports
import React, { Dispatch, SetStateAction } from 'react';
// local imports
import css from './CartGoods.module.scss';
import { CartGood } from 'components';
import { products } from 'data';
import { CartItem } from 'utils';

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
        const curProd = products.filter(
          prod => prod.productName === item.productName
        )[0];
        return (
          <li className={css.listItem} key={item.productName}>
            <CartGood
              productQuantity={item.productQuantity}
              {...curProd}
              counter={counter}
              setCart={setCart}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CartGoods;
