// libs imports
import React from 'react';
// local imports
import { Section, Button, Container } from 'components/common';
import css from './HeroHome.module.scss';

const HeroHome: React.FC = (): JSX.Element => {
  return (
    <div className={css.hero}>
      <Container>
        <Section className={css.section}>
          <p className={css.overline}>New product</p>
          <h1 className={css.heading}>Xx99 mark ii headphones</h1>
          <p className={css.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button styling="color" className={css.button}>
            See product
          </Button>
        </Section>
      </Container>
    </div>
  );
};

export default HeroHome;
