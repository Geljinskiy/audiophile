import { Section, AboutUsDescription, AboutUsImage } from 'components';

import css from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <Section className={css.section}>
      <AboutUsImage />
      <AboutUsDescription />
    </Section>
  );
};

export default AboutUs;
