// libs imports
import React from 'react';
// local imports
import PriceItem from './PriceItemType';
import { CartItemPrice } from 'components/common';
import css from './CartPrices.module.scss';

interface CartPricesProps {
  prices: PriceItem[];
}

const CartPrices: React.FC<CartPricesProps> = ({ prices }) => {
  return (
    <ul className={css.list}>
      {prices.map(({ name, value }) => {
        return (
          <li key={name}>
            <CartItemPrice name={name} value={value} />
          </li>
        );
      })}
    </ul>
  );
};

export default CartPrices;
