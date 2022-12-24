import { Link, NavLink } from 'react-router-dom';

import { Button, Section } from 'components';

import { ROUTES } from 'utils';

import css from './ProductsReview.module.scss';
import {
  SpeakerZX9MobileImg,
  SpeakerZX9TabletImg,
  SpeakerZX9DesktopImg,
  EarphonesYX1MobileImg,
  EarphonesYX1TabletImg,
  EarphonesYX1DesktopImg,
} from 'assets';

const ProductsReview = () => {
  return (
    <Section>
      <div
        className={`${css.category} ${css.category__zx9_speaker} ${css.category__mb}`}
      >
        <picture>
          <source
            media="(max-width: 767.9px)"
            width="172"
            srcSet={SpeakerZX9MobileImg}
          />
          <source
            media="(max-width: 1439.9px)"
            width="197"
            srcSet={SpeakerZX9TabletImg}
          />
          <source
            media="(min-width: 1440px)"
            width="410"
            srcSet={SpeakerZX9DesktopImg}
          />
          <img
            className={css.image__zx9}
            src={SpeakerZX9MobileImg}
            alt="Speaker ZX9"
          />
        </picture>
        <div className={css.text_wrapper__zx9}>
          <h3 className={`${css.title__zx9}`}>ZX9 speaker</h3>
          <p className={css.description__zx9}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <Button className={css.button__zx9} styling="dark">
            <Link className={css.link} to={ROUTES.home}>
              See product
            </Link>
          </Button>
        </div>
      </div>
      <div
        className={`${css.category} ${css.category__zx7_speaker} ${css.category__mb}`}
      >
        <h3 className={css.title}>ZX7 speaker</h3>
        <Button styling="light">
          <Link className={css.link} to={ROUTES.home}>
            See product
          </Link>
        </Button>
      </div>
      <div className={css.category_wrapper__yx1}>
        <picture>
          <source
            media="(max-width: 767.9px)"
            width="327"
            srcSet={EarphonesYX1MobileImg}
          />
          <source
            media="(max-width: 1439.9px)"
            width="339"
            srcSet={EarphonesYX1TabletImg}
          />
          <source
            media="(min-width: 1440px)"
            width="540"
            srcSet={EarphonesYX1DesktopImg}
          />
          <img
            className={css.image__yx1}
            src={EarphonesYX1MobileImg}
            alt="YX1 Earphones"
          />
        </picture>
        <div className={`${css.category} ${css.category__yx1_earphones}`}>
          <h3 className={css.title}>YX1 earphones</h3>
          <Button styling="light">
            <Link className={css.link} to={ROUTES.home}>
              See product
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ProductsReview;
