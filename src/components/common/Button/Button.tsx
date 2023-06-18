// libs imports
import React from 'react';
// local imports
import styles from './Button.module.scss';

type ButtonProps = {
  styling: 'dark' | 'light' | 'color';
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  styling,
  type = 'button',
  children,
  className,
}):JSX.Element => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[styling]} ${className ?? ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
