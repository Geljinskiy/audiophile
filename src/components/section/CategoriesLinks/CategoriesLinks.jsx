import { Link } from 'react-router-dom';

import { Button, Section } from 'components';

import { ROUTES } from 'utils';

import css from './CategoriesLinks.module.scss';
import {
  ArrowRightIcon,
  CategoryEarphonesImg,
  CategoryHeadphonesImg,
  CategorySpeakersImg,
} from 'assets';

const CategoriesLinks = () => {
  return (
    <Section className={css.section}>
      <div className={css.category_img_wrapper}>
        <img
          className={`${css.category_img} ${css.category_img__headphones}`}
          src={CategoryHeadphonesImg}
          alt="Headphones"
        />
        <div className={css.category}>
          <h3 className={css.category_title}>Headphones</h3>
          <Button className={css.button} styling="transparent">
            <Link to={ROUTES.headphones} className={css.link}>
              Shop <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className={css.category_img_wrapper}>
        <img
          className={`${css.category_img} ${css.category_img__speakers}`}
          src={CategorySpeakersImg}
          alt="Speakers"
        />
        <div className={`${css.category} ${css.category__mb}`}>
          <h3 className={css.category_title}>Speakers</h3>
          <Button className={css.button} styling="transparent">
            <Link to={ROUTES.speakers} className={css.link}>
              Shop <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className={css.category_img_wrapper}>
        <img
          className={`${css.category_img} ${css.category_img__earphones}`}
          src={CategoryEarphonesImg}
          alt="Earphones"
        />
        <div className={`${css.category}`}>
          <h3 className={css.category_title}>Earphones</h3>
          <Button className={css.button} styling="transparent">
            <Link to={ROUTES.earphones} className={css.link}>
              Shop <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CategoriesLinks;
