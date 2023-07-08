// libs imports
import React from 'react';
import { useFormik } from 'formik';
// local imports
import { CheckoutSection } from '../CheckoutSection';
import { Summary } from '../Summary';
import css from './ChekcoutForm.module.scss';
import { useModal } from 'utils';
import { ModalWindow } from 'components';

const ChekcoutForm = () => {
  const { isOpen, close, modalType, openReciept } = useModal();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      emoneyNum: '',
      emoneyPin: '',
    },
    onSubmit: openReciept,
  });

  return (
    <>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <CheckoutSection formik={formik} />
        <Summary formik={formik} />
      </form>
      {isOpen && (
        <ModalWindow
          isOpen={isOpen && modalType === 'reciept'}
          close={close}
          type={'reciept'}
        />
      )}
    </>
  );
};

export default ChekcoutForm;
