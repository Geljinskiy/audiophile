// libs imports
import React from 'react';
import { useState } from 'react';
// local imports
import { FormField, FormRadio } from 'components/common';
import { eMoney } from '../checkoutFields';
import { CashPaymentIcon } from 'assets';

const PaymentDetails: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <h3>Payment Details</h3>
      <FormRadio
        heading="Payment Method"
        fieldValue="e-Money"
        fieldName="payment"
        onChange={handleOptionChange}
        checked={selectedMethod === 'e-Money'}
      />
      <FormRadio
        fieldValue="Cash on Delivery"
        fieldName="payment"
        onChange={handleOptionChange}
        checked={selectedMethod === 'Cash on Delivery'}
      />

      {selectedMethod === 'e-Money' &&
        eMoney.map(item => {
          return <FormField {...item} />;
        })}
      {selectedMethod === 'Cash on Delivery' && (
        <>
          <CashPaymentIcon />
          <span>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </span>
        </>
      )}
    </>
  );
};

export default PaymentDetails;
