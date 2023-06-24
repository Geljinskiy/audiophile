// libs imports
import React from 'react';
// local imports
import { FormField, FormRadio } from 'components';
import { FieldsBlockProps } from 'utils';

const FieldsBlock: React.FC<FieldsBlockProps> = ({ blockName, fields }) => {
  return (
    <>
      <h3>{blockName}</h3>
      {fields.map(({ fieldName, fieldValue, placeholder }) => {
        return (
          <FormField
            fieldName={fieldName}
            fieldValue={fieldValue}
            placeholder={placeholder}
          />
        );
      })}
    </>
  );
};

export default FieldsBlock;
