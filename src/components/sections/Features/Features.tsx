// libs imports
import React from 'react';
// local imports
import { Container, Section, Description } from 'components';
import css from './Features.module.scss';

type FeaturesProps = {
  description: string[] | string;
};

const Features: React.FC<FeaturesProps> = ({ description }) => {
  return (
    <>
      <h3 className={css.heading}>features</h3>
      {typeof description === 'string' ? (
        <Description>{description}</Description>
      ) : (
        description.map((item, ind) => (
          <Description
            className={description.length - 1 !== ind && css.descr}
            key={item}
          >
            {item}
          </Description>
        ))
      )}
    </>
  );
};

export default Features;
