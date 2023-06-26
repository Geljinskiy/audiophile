// libs imports
import React from 'react';
// local imports
import css from './CartItemPrice.module.scss';

type CartItemPriceProps = {
  name: string;
  value: number;
  className?: string;
  styling?: 'main' | 'secondary';
};

const CartItemPrice: React.FC<CartItemPriceProps> = ({
  name,
  value,
  className,
  styling = 'secondary',
}) => {
  return (
    <div className={`${css.listItem} ${className}`}>
      <p className={css.itemName}>{name}</p>
      <span className={`${css.price} ${styling === 'main' && css.price__main}`}>
        $ {value}
      </span>
    </div>
  );
};

export default CartItemPrice;
