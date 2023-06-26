// libs imports
import React from 'react';
import { useState } from 'react';
// local imports
import { FormField, FormRadio } from 'components/common';
import { eMoney } from '../checkoutFields';
import { CashPaymentIcon } from 'assets';
import css from './PaymentDetails.module.scss';

const PaymentDetails: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <h3 className={css.heading}>Payment Details</h3>
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
      
      {selectedMethod === 'e-Money' &&
        eMoney.map((item, ind) => {
          const isLastEl = eMoney.length - 1 === ind;

          return (
            <FormField
              key={item.fieldName}
              {...item}
              className={!isLastEl && css.field}
            />
          );
        })}
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
