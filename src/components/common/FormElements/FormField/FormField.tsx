// libs imports
import React from 'react';
// local imports
import css from './FormField.module.scss';

type FormFieldProps = {
  placeholder?: string;
  fieldName?: string;
  fieldValue?: string | number;
  error?: boolean;
  className?: string;
  fullWidth?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  fieldName,
  fieldValue,
  error = false,
  className,
  fullWidth = false,
}): JSX.Element => {
  return (
    <label
      className={`${className} ${css.label} ${fullWidth && css.fullWidthField}`}
    >
      <span className={`${css.fieldName} ${error && css.fieldName__notValid}`}>
        {fieldName}
      </span>
      <input
        type="text"
        name={fieldName}
        value={fieldValue}
        placeholder={placeholder}
        className={`${css.input} ${error && css.input__notValid} ${
          fullWidth && css.fullWidthField
        }`}
      />
    </label>
  );
};

export default FormField;
