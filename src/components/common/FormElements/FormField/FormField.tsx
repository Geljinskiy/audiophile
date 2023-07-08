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
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  fieldName,
  fieldValue,
  error = false,
  className,
  onChange,
}): JSX.Element => {
  return (
    <label className={`${className} ${css.label}`}>
      <span className={`${css.fieldName} ${error && css.fieldName__notValid}`}>
        {fieldName}
      </span>
      <input
        type="text"
        name={fieldName}
        value={fieldValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`${css.input} ${error && css.input__notValid}`}
      />
    </label>
  );
};

export default FormField;
