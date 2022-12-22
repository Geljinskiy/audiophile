import css from './AboutUsImage.module.scss';

import {
  bestGearMobileImg,
  bestGearTabletImg,
  bestGearDesktopImg,
} from 'assets';

const AboutUsImage = () => {
  return (
    <div className={css.img_thumb}>
      <picture>
        <source
          media="(max-width: 767.9px)"
          width="327"
          srcSet={bestGearMobileImg}
        />
        <source
          media="(max-width: 1439.9px)"
          width="689"
          srcSet={bestGearTabletImg}
        />
        <source
          media="(min-width: 1440px)"
          width="540"
          srcSet={bestGearDesktopImg}
        />
        <img
          className={css.img}
          src={bestGearMobileImg}
          alt="headphones preview"
        />
      </picture>
    </div>
  );
};

export default AboutUsImage;
