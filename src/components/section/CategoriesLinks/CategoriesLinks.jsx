import { Link } from 'react-router-dom';

import { Button, Section } from 'components';

import css from './CategoriesLinks.module.scss';
import { ArrowRightIcon } from 'assets';

const CategoriesLinks = () => {
  return (
    <Section>
      <div className={`${css.category} ${css.category__mb}`}>
        <h3 className={css.category_title}>Headphones</h3>
        <Button className={css.button} styling="transparent">
          <Link className={css.link}>
            Shop <ArrowRightIcon />
          </Link>
        </Button>
      </div>
      <div className={`${css.category} ${css.category__mb}`}>
        <h3 className={css.category_title}>Speakers</h3>
        <Button className={css.button} styling="transparent">
          <Link className={css.link}>
            Shop <ArrowRightIcon />
          </Link>
        </Button>
      </div>
      <div className={`${css.category}`}>
        <h3 className={css.category_title}>Earphones</h3>
        <Button className={css.button} styling="transparent">
          <Link className={css.link}>
            Shop <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default CategoriesLinks;
