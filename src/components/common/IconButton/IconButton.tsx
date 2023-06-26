// libs imports
import React from 'react';
// local imports
import css from './IconButton.module.scss';

type IconButtonProps = {
  children: any;
};

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <button className={css.button}>{children}</button>;
};

export default IconButton;
