// libs imports
import React from 'react';
// local imports
import css from './IconButton.module.scss';

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;

  onButtonClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  onButtonClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onButtonClick}
      className={`${css.button} ${className} ${disabled && css.disabled}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
