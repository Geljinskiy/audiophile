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
      <h3 className={css.subHeading}>{blockName}</h3>
      <div className={`${className} ${css.fieldsBlock}`}>
        {fields.map((fieldItem, ind) => {
          const isLastEl = fields.length - 1 === ind;
          return (
            <FormField
              key={fieldItem.fieldName}
              {...fieldItem}
              className={!isLastEl && css.field}
            />
          );
        })}
      </div>
    </>
  );
};

export default FieldsBlock;
