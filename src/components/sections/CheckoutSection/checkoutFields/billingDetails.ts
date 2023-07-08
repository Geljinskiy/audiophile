import { FieldsBlockProps, FieldProps } from 'utils';

const billingFields: FieldProps[] = [
  { fieldName: 'name', placeholder: 'Alexei Ward' },
  { fieldName: 'email', placeholder: 'alexei@mail.com' },
  { fieldName: 'phone', placeholder: '+1 202-555-0136' },
];

const billingDetails: FieldsBlockProps = {
  blockName: 'Billing details',
  fields: billingFields,
};

export default billingDetails;
