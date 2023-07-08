import { FieldsBlockProps, FieldProps } from 'utils';

const shippingFields: FieldProps[] = [
  {
    fieldName: 'address',
    placeholder: '1137 Williams Avenue',
    fullWidth: true,
  },
  { fieldName: 'zip', placeholder: '10001' },
  { fieldName: 'city', placeholder: 'New York' },
  { fieldName: 'country', placeholder: 'United States' },
];

const shippingInfo: FieldsBlockProps = {
  blockName: 'Shipping info',
  fields: shippingFields,
};

export default shippingInfo;
