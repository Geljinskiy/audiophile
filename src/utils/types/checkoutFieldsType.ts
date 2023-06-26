export type FieldProps = {
  fieldName: string;
  fieldValue?: string | number;
  placeholder: string;
  fullWidth?: boolean;
};

export type FieldsBlockProps = {
  blockName: string;
  fields: FieldProps[];
};
