// libs imports
import React from 'react';
// local imports
import css from './FormCunter.module.scss';

type FormCunterProps = {
  fieldValue: number;
};

const FormCunter: React.FC<FormCunterProps> = ({
  fieldValue,
}): JSX.Element => {
  return (
    <div className={css.wrapper}>
      <button className={css.button}>-</button>
      <span className={css.value}>{fieldValue}</span>
      <button className={css.button}>+</button>
    </div>
  );
};

export default FormCunter;
