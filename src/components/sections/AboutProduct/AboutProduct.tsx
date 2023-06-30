// libs imports
import React from 'react';
// local imports
import { InBox, Features, Container, Section } from 'components';
import { InBoxType } from 'utils';
import css from './AboutProduct.module.scss';

type AboutProductType = {
  description: string | string[];
  stuff: InBoxType[];
};

const AboutProduct: React.FC<AboutProductType> = ({ description, stuff }) => {
  return (
    <Container>
      <Section className={css.section}>
        <div className={`${css.feature} ${css.aboutItem}`}>
          <Features description={description} />
        </div>
        <div className={`${css.inBox} ${css.aboutItem}`}>
          <InBox stuff={stuff} />
        </div>
      </Section>
    </Container>
  );
};

export default AboutProduct;
