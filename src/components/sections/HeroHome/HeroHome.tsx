// libs imports
import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link className={css.link} to={'product/XX99'}>
              See product
            </Link>
          </Button>
        </Section>
      </Container>
    </div>
  );
};

export default HeroHome;
