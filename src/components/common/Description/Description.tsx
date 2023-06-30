// libs imports
import React from 'react';
// local imports
import css from './Description.module.scss';

type DescriptionProps = {
  children: string;
  className?: string;
};

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  return <span className={`${css.descr} ${className}`}>{children}</span>;
};

export default Description;
