// libs imports
import React from 'react';
// local imports
import css from './FormField.module.scss';

type FormFieldProps = {
  placeholder?: string;
  fieldName?: string;
  fieldValue?: string;
  error?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  fieldName,
  fieldValue,
  error = false,
}): JSX.Element => {
  return (
    <label>
      <span className={`${css.fieldName} ${error && css.fieldName__notValid}`}>
        {fieldName}
      </span>
      <input
        type="text"
        name={fieldName}
        value={fieldValue}
        placeholder={placeholder}
        className={`${css.input} ${error && css.input__notValid} `}
      />
    </label>
  );
};

export default FormField;
