export type FieldProps = {
  fieldName: string;
  fieldValue?: string | number;
  placeholder: string;
};

export type FieldsBlockProps = {
  blockName: string;
  fields: FieldProps[];
};
