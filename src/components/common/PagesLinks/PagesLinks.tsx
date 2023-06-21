// libs imports
import React from 'react';
import { Link } from 'react-router-dom';
// local imports
import css from './PagesLinks.module.scss';
import { ROUTES } from 'utils';

type PageLink = {
  name: string;
  target: string;
};

type PagesLinksProps = {
  pages: PageLink[];
  className?: string;
};

const PagesLinks: React.FC<PagesLinksProps> = ({ pages, className }) => {
  return (
    <ul className={`${css.link_list} ${className ?? ''}`}>
      {pages.map(page => {
        const { name, target } = page;
        return (
          <li key={name}>
            <Link className={css.link_list__link} to={target}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PagesLinks;
