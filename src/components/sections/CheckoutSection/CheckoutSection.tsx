// libs imports
import React from 'react';
// local imports
import { FieldsBlock, Section } from 'components';
import { billingDetails, shippingInfo, eMoney } from './checkoutFields';
import { PaymentDetails } from './PaymentDetails';
import css from './CheckoutSection.module.scss';

const CheckoutSection: React.FC = () => {
  return (
    <Section className={css.section}>
      <h1 className={css.heading}>Checkout</h1>
      <form>
        <FieldsBlock className={css.feldBlock} {...billingDetails} />
        <FieldsBlock className={css.feldBlock} {...shippingInfo} />
        <PaymentDetails />
      </form>
    </Section>
  );
};

export default CheckoutSection;
