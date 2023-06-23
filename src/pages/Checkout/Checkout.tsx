// libs imports
import React from 'react';
// local imports
import css from './Checkout.module.scss'
import { CheckoutSection, Summary } from 'components';

const Checkout: React.FC = (): JSX.Element => {
  return (
    <>
      <button className={css.button}>Go Back</button>
      {/* <CheckoutSection /> */}
      <Summary/>
    </>
  );
};

export default Checkout;
