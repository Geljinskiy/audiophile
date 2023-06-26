// libs imports
import React from 'react';
// local imports
import css from './FormRadio.module.scss';

type FormRadioProps = {
  fieldName?: string;
  fieldValue?: string | number;
  heading?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
};

const FormRadio: React.FC<FormRadioProps> = ({
  fieldName,
  fieldValue,
  heading,
  onChange,
  checked,
  className,
}): JSX.Element => {
  return (
    <label className={`${className} ${css.radioLabel}`}>
      <span className={css.fieldName}>{heading}</span>
      <div className={`${css.inputWrap} ${checked && css.inputWrap_active}`}>
        <input
          type="radio"
          name={fieldName}
          value={fieldValue}
          className={css.input}
          onChange={onChange}
          checked={checked}
        />
        <span className={css.checkmark}></span>
        <p>{fieldValue}</p>
      </div>
    </label>
  );
};

export default FormRadio;
