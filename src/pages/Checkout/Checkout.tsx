// libs imports
import React from 'react';
// local imports
import css from './Checkout.module.scss';
import {
  CheckoutSection,
  Summary,
  Container,
  Section,
  GoBackLink,
} from 'components';

const Checkout: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Section className={css.linkSection}>
        <GoBackLink />
      </Section>
      <Section className={css.section}>
        <CheckoutSection />
        <Summary />
      </Section>
    </Container>
  );
};

export default Checkout;
