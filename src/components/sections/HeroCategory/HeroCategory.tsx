// libs imports
import React from 'react';
// local imports
import css from './HeroCategory.module.scss';
import { Container, Section } from 'components/common';

type HeroCategoryProps = {
  heading: string;
};

const HeroCategory: React.FC<HeroCategoryProps> = ({ heading }) => {
  return (
    <div className={css.hero}>
      <Container>
        <Section>
          <h1 className={css.heading}>{heading}</h1>
        </Section>
      </Container>
    </div>
  );
};

export default HeroCategory;
