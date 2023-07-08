// libs imports
import React from 'react';
import { useFormik } from 'formik';
import { FormikProps } from 'formik';
// local imports
import { FieldsBlock, Section } from 'components';
import { billingDetails, shippingInfo, eMoney } from './checkoutFields';
import { PaymentDetails } from './PaymentDetails';
import css from './CheckoutSection.module.scss';
import { FormData } from 'utils';

const CheckoutSection: React.FC<{ formik: FormikProps<FormData> }> = ({
  formik,
}) => {
  return (
    <Section className={css.section}>
      <h1 className={css.heading}>Checkout</h1>
      <FieldsBlock
        className={css.feldBlock}
        {...billingDetails}
        formik={formik}
      />
      <FieldsBlock
        className={css.feldBlock}
        {...shippingInfo}
        formik={formik}
      />
      <PaymentDetails formik={formik} />
    </Section>
  );
};

export default CheckoutSection;
