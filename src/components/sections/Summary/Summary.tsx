// libs imports
import React from 'react';
import { FormikProps } from 'formik';
// local imports
import { CartGoods } from './CartGoods';
import { XX59MobileImg, XX99MKIIMobileImg, YX1MobileImg } from 'assets';
import { CartPrices } from './CartPrices';
import {
  calcShipping,
  calcTotalPrice,
  calcVAT,
  VAT_PERCENT,
  SHIPPING,
  goodsQuantity,
  calcGrandTotal,
  FormData,
  CartItem,
} from 'utils';
import { Button, CartItemPrice, Container, Section } from 'components/common';
import css from './Summary.module.scss';

const Summary: React.FC<{ formik: FormikProps<FormData> }> = ({ formik }) => {
  const cart =
    (JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]) || [];

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
      <Button styling="color" className={css.button} type="submit">
        Continue & pay
      </Button>
    </Section>
  );
};

export default Summary;
