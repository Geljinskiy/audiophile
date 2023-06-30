// libs imports
import React from 'react';
// local imports
import { billingDetails, shippingInfo } from './checkoutFields';
import { Container, FieldsBlock, Section } from 'components/common';
import { PaymentDetails } from './PaymentDetails';
import css from './CheckoutSection.module.scss';

const CheckoutSection: React.FC = () => {
  return (
    <Container>
      <Section>
        <h1 className={css.heading}>Checkout</h1>
        <form>
          <FieldsBlock className={css.feldBlock} {...billingDetails} />
          <FieldsBlock className={css.feldBlock} {...shippingInfo} />
          <PaymentDetails />
        </form>
      </Section>
    </Container>
  );
};

export default CheckoutSection;
