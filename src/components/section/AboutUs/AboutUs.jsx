import { AboutUsDescription, AboutUsImage } from 'components';

import css from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={css.section}>
      <AboutUsImage />
      <AboutUsDescription />
    </section>
  );
};

export default AboutUs;
