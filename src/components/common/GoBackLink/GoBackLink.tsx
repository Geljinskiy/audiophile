// libs imports
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
// local imports
import css from './GoBackLink.module.scss';

const GoBackLink: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Link
      className={`${css.link} ${className}`}
      to=".."
      onClick={() => navigate(-1)}
    >
      Go back
    </Link>
  );
};

export default GoBackLink;
