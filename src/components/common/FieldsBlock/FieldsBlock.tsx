// libs imports
import React from 'react';
// local imports
import { FormField } from 'components';
import { FieldsBlockProps } from 'utils';
import css from './FieldsBlock.module.scss';

const FieldsBlock: React.FC<FieldsBlockProps & { className?: string }> = ({
  blockName,
  fields,
  className,
}) => {
  return (
    <>
      {blockName && <h3 className={css.subHeading}>{blockName}</h3>}
      <div className={`${className} ${css.fieldsBlock}`}>
        {fields.map(fieldItem => {
          console.log(fieldItem);
          //!change
          const isLarge = fieldItem.fullWidth;
          return (
            <FormField
              key={fieldItem.fieldName}
              {...fieldItem}
              className={`${css.field} ${isLarge && css.largeField}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default FieldsBlock;
