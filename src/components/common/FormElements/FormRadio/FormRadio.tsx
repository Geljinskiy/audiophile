// libs imports
import React from 'react';
// local imports
import css from './FormRadio.module.scss';

type FormRadioProps = {
  placeholder?: string;
  fieldName?: string;
  fieldValue?: string;
};

const FormRadio: React.FC<FormRadioProps> = ({
  fieldName,
  fieldValue,
}): JSX.Element => {
  return (
    <label className={css.radioLabel}>
      <div className={css.inputWrap}>
        <input
          type="radio"
          name={fieldName}
          value={fieldValue}
          className={css.input}
        />
        <span className={css.checkmark}></span>
        <p>{fieldValue}</p>
      </div>
    </label>
  );
};

export default FormRadio;
