// libs imports
import React from 'react';
// local imports
import { CartGoods } from './CartGoods';
import { XX59, XX99MKII, YX1 } from 'assets';
import { CartPrices } from './CartPrices';
import {
  calcShipping,
  calcTotalPrice,
  calcVAT,
  VAT_PERCENT,
  SHIPPING,
  goodsQuantity,
  calcGrandTotal,
} from 'utils';
import { Button, CartItemPrice, Container, Section } from 'components/common';
import css from './Summary.module.scss';

// !temp solution
const cart = [
  { name: 'XX99 MK II', price: 2_999, img: XX59, quantity: 1 },
  { name: 'XX59', price: 899, img: XX99MKII, quantity: 2 },
  { name: 'YX1', price: 599, img: YX1, quantity: 1 },
];

const Summary: React.FC = () => {
  const total = calcTotalPrice(cart);
  const shipping = calcShipping({
    shippingPerc: SHIPPING,
    totalQuant: goodsQuantity(cart),
  });
  const vat = calcVAT({ taxableAmount: total, taxRate: VAT_PERCENT });

  const prices = [
    { name: 'total', value: total },
    { name: 'shipping', value: shipping },
    { name: 'vat', value: vat },
  ];

  return (
    <Container>
      <Section className={css.section}>
        <h2 className={css.heading}>Summary</h2>
        <CartGoods cart={cart} />
        <CartPrices prices={prices} />
        <CartItemPrice
          styling="main"
          name="grand total"
          value={calcGrandTotal([total, shipping, vat])}
          className={css.totalPrice}
        />
        <Button styling="color" className={css.button}>
          Continue & pay
        </Button>
      </Section>
    </Container>
  );
};

export default Summary;
