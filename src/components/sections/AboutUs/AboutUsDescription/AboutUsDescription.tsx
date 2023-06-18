// libs imports
import React from 'react';
// local imports
import css from './AboutUsDescription.module.scss';

const AboutUsDescription: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={css.description_wrapper}>
        <h2 className={css.title}>
          Bringing you the <strong className={css.title__accent}>best </strong>
          audio gear
        </h2>
        <p className={css.description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </>
  );
};

export default AboutUsDescription;
