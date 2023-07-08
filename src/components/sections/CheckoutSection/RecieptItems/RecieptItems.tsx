// libs imports
import React, { useState } from 'react';
// local imports
import { CartGoods } from 'components/sections/Summary/CartGoods';
import { CartItem, calcGrandTotal } from 'utils';
import css from './RecieptItems.module.scss';

type RecieptItemsProps = {
  cart: CartItem[];
  className?: string;
};

const RecieptItems: React.FC<RecieptItemsProps> = ({ className, cart }) => {
  const [showAllItems, setShowAllItems] = useState<boolean>(false);
  const cartProp = showAllItems ? cart : [cart[0]];

  const multipliedItems = cart.length > 1;

  const handleShowItems = () => {
    setShowAllItems(!showAllItems);
  };

  const total = calcGrandTotal(cart.map(el => el.price));

  return (
    <div className={`${className} ${css.mainWrapper}`}>
      <div className={css.goodsWrapper}>
        <CartGoods cart={cartProp} className={css.cartGoods} />
        {multipliedItems && (
          <button
            type="button"
            className={css.otherItemsText}
            onClick={handleShowItems}
          >
            {!showAllItems ? `show ${cart.length-1} other item(s)` : 'show less'}
          </button>
        )}
      </div>
      <div className={css.totalWrapper}>
        <h3 className={css.grandTotal}>Grand total</h3>
        <p className={css.price}>$ {total}</p>
      </div>
    </div>
  );
};

export default RecieptItems;
