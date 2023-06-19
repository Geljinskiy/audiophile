// libs imports
import React from 'react';
import { Link } from 'react-router-dom';
// local imports
import css from './PagesLinks.module.scss';
import { ROUTES } from 'utils';

type PageLink = {
  pageName: string;
};

type PagesLinksProps = {
  pages: PageLink[];
  className?: string;
};

const PagesLinks: React.FC<PagesLinksProps> = ({ pages, className }) => {
  return (
    <ul className={`${css.link_list} ${className ?? ''}`}>
      {pages.map(page => {
        const { pageName } = page;
        return (
          <li key={pageName}>
            <Link className={css.link_list__link} to={ROUTES[pageName]}>
              {pageName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PagesLinks;
