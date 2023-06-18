// libs imports
import React from 'react';
// local imports
import { Section, AboutUsDescription, AboutUsImage } from 'components';
import css from './AboutUs.module.scss';

const AboutUs:React.FC = ():JSX.Element => {
  return (
    <Section className={css.section}>
      <AboutUsImage />
      <AboutUsDescription />
    </Section>
  );
};

export default AboutUs;
