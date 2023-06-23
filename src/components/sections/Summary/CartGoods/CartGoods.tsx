// libs imports
import React from 'react';
// local imports
import css from './CartGoods.module.scss';
import { CartGood } from 'components';
import { XX59, XX99MKII, YX1 } from 'assets';

// !temp solution
const cart = [
  { name: 'XX99 MK II', price: 2_999, img: XX59, quantity: 1 },
  { name: 'XX59', price: 899, img: XX99MKII, quantity: 2 },
  { name: 'YX1', price: 599, img: YX1, quantity: 1 },
];

const CartGoods: React.FC = () => {
  return (
    <ul>
      {cart.map(item => {
        return (
          <li className={css.list} key={item.name}>
            <CartGood {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CartGoods;
