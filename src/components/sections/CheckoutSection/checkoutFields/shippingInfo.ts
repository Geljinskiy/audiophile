import { FieldsBlockProps, FieldProps } from 'utils';

const shippingFields: FieldProps[] = [
  {
    fieldName: 'Your Address',
    placeholder: '1137 Williams Avenue',
    fullWidth: true,
  },
  { fieldName: 'ZIP code', placeholder: '10001' },
  { fieldName: 'City', placeholder: 'New York' },
  { fieldName: 'Country', placeholder: 'United States' },
];

const shippingInfo: FieldsBlockProps = {
  blockName: 'Shipping info',
  fields: shippingFields,
};

export default shippingInfo;
