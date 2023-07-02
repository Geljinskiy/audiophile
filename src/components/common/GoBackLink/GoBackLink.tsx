// libs imports
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
// local imports
import css from './GoBackLink.module.scss';

const GoBackLink: React.FC = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Link className={css.link} to={backLinkHref}>
      Go back
    </Link>
  );
};

export default GoBackLink;
