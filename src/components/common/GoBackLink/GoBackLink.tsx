// libs imports
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
// local imports
import css from './GoBackLink.module.scss';

const GoBackLink: React.FC<{ className?: string }> = ({ className }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Link className={`${css.link} ${className}`} to={backLinkHref}>
      Go back
    </Link>
  );
};

export default GoBackLink;
