// libs imports
import { FormikProps } from 'formik';
import React from 'react';
// local imports
import { FormField } from 'components';
import { FormData, FieldsBlockProps, FieldProps } from 'utils';
import css from './FieldsBlock.module.scss';


const FieldsBlock: React.FC<
  FieldsBlockProps & { className?: string; formik: FormikProps<FormData> }
> = ({ blockName, fields, className, formik }) => {
  return (
    <>
      {blockName && <h3 className={css.subHeading}>{blockName}</h3>}
      <div className={`${className} ${css.fieldsBlock}`}>
        {fields.map((fieldItem: FieldProps) => {
          const isLarge = fieldItem.fullWidth;

          const { fieldName } = fieldItem;
          const fieldValue =
            formik.values[fieldName as keyof typeof formik.values];

          return (
            <FormField
              {...fieldItem}
              fieldValue={fieldValue}
              onChange={formik.handleChange}
              key={fieldItem.fieldName}
              className={`${css.field} ${isLarge && css.largeField} `}
            />
          );
        })}
      </div>
    </>
  );
};

export default FieldsBlock;
