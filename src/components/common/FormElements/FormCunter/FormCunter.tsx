// libs imports
import React from 'react';
import { useState } from 'react';
// local imports
import css from './FormCunter.module.scss';
import { MAX_PRODUCT_QUANTITY, MIN_PRODUCT_QUANTITY } from 'utils';

type FormCunterProps = {
  fieldValue: number;
  className?: string;
  addHangler: React.MouseEventHandler<HTMLButtonElement>;
  removeHangler: React.MouseEventHandler<HTMLButtonElement>;
};

const FormCunter: React.FC<FormCunterProps> = ({
  fieldValue,
  className,
  addHangler,
  removeHangler,
}): JSX.Element => {

  return (
    <div className={`${css.wrapper} ${className}`}>
      <button
        className={css.button}
        onClick={removeHangler}
        disabled={fieldValue === MIN_PRODUCT_QUANTITY}
      >
        -
      </button>
      <span className={css.value}>{fieldValue}</span>
      <button
        className={css.button}
        onClick={addHangler}
        disabled={fieldValue === MAX_PRODUCT_QUANTITY}
      >
        +
      </button>
    </div>
  );
};

export default FormCunter;
