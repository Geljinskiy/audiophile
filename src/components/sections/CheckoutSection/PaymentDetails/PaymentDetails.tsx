// libs imports
import React from 'react';
import { useState } from 'react';
import { FormikProps } from 'formik';
// local imports
import { FieldsBlock, FormRadio } from 'components/common';
import { eMoney } from '../checkoutFields';
import { CashPaymentIcon } from 'assets';
import css from './PaymentDetails.module.scss';
import { FormData } from 'utils';

const PaymentDetails: React.FC<{ formik: FormikProps<FormData> }> = ({
  formik,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <div className={`${css.container} ${selectedMethod && css.bottomSpace}`}>
        <h3 className={css.heading}>Payment Details</h3>
        <div className={css.radios}>
          <FormRadio
            className={css.radio}
            heading="Payment Method"
            fieldValue="e-Money"
            fieldName="payment"
            onChange={handleOptionChange}
            checked={selectedMethod === 'e-Money'}
          />
          <FormRadio
            className={css.radio}
            fieldValue="Cash on Delivery"
            fieldName="payment"
            onChange={handleOptionChange}
            checked={selectedMethod === 'Cash on Delivery'}
          />
        </div>
      </div>

      {selectedMethod === 'e-Money' && (
        <FieldsBlock fields={eMoney} formik={formik} />
      )}

      {selectedMethod === 'Cash on Delivery' && (
        <div className={css.paymentOption}>
          <CashPaymentIcon />
          <span>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </span>
        </div>
      )}
    </>
  );
};

export default PaymentDetails;
