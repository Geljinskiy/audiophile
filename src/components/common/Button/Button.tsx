// libs imports
import React from 'react';
// local imports
import css from './Button.module.scss';

type ButtonProps = {
  styling: 'dark' | 'light' | 'color' | 'transparent';
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  styling,
  type = 'button',
  children,
  className,
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${css.button} ${css[styling]} ${className ?? ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
