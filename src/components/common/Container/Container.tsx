// lib imports
import React from 'react';
// local imports
import css from './Container.module.scss';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${css.container} ${className ?? ''}`}>{children}</div>
  );
};

export default Container;
