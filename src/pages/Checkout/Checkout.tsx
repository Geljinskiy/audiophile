// libs imports
import React from 'react';
// local imports
import css from './Checkout.module.scss';
import { Container, Section, GoBackLink } from 'components';
import { ChekcoutForm } from 'components/sections/ChekcoutForm';

const Checkout: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Section className={css.section}>
        <GoBackLink className={css.backLink} />
        <ChekcoutForm />
      </Section>
    </Container>
  );
};

export default Checkout;
