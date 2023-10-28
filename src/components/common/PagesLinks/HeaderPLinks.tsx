// libs imports
import React from 'react';
import { NavLink } from 'react-router-dom';
// local imports
import css from './PagesLinks.module.scss';

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
    <ul className={`${css.linkList} ${className ?? ''}`}>
      {pages.map(page => {
        const { name, target } = page;
        return (
          <li key={name}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.headerLink} ${css.link__active}` : css.headerLink
              }
              to={target}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default PagesLinks;
