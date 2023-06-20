// libs imports
import React from 'react';
// local imports
import {
  Section,
  AboutUsDescription,
  AboutUsImage,
  Container,
} from 'components';
import css from './AboutUs.module.scss';

const AboutUs: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Section className={css.section}>
        <AboutUsImage />
        <AboutUsDescription />
      </Section>
    </Container>
  );
};

export default AboutUs;
