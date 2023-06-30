// libs imports
import React from 'react';
// local imports
import css from './Checkout.module.scss';
import { CheckoutSection, Summary, Container } from 'components';

const Checkout: React.FC = (): JSX.Element => {
  return (
    <Container className={css.container}>
      <CheckoutSection />
      <Summary />
    </Container>
  );
};

export default Checkout;
