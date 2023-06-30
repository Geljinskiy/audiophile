// libs imports
import React from 'react';
// local imports
import css from './IconButton.module.scss';

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({ className, children }) => {
  return <button className={`${css.button} ${className}`}>{children}</button>;
};

export default IconButton;
