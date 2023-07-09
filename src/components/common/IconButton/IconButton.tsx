// libs imports
import React from 'react';
// local imports
import css from './IconButton.module.scss';

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  onButtonClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  onButtonClick,
}) => {
  return (
    <button
      onClick={onButtonClick}
      className={`${css.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
