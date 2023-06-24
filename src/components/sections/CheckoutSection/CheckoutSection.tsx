// libs imports
import React from 'react';
// local imports
import { Container, FieldsBlock, Section } from 'components/common';
import { billingDetails,  shippingInfo, eMoney } from './checkoutFields';
import { PaymentDetails } from './PaymentDetails';

const CheckoutSection: React.FC = () => {
  return (
    <Container>
      <Section>
        <h1>Checkout</h1>
        <form>
          <FieldsBlock {...billingDetails} />
          <FieldsBlock {...shippingInfo} />
          <PaymentDetails />
        </form>
      </Section>
    </Container>
  );
};

export default CheckoutSection;
