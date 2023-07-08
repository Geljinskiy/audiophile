// libs imports
import React from 'react';
import { useFormik } from 'formik';
// local imports
import { CheckoutSection } from '../CheckoutSection';
import { Summary } from '../Summary';
import css from './ChekcoutForm.module.scss';

const ChekcoutForm = () => {
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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <CheckoutSection formik={formik} />
      <Summary formik={formik} />
    </form>
  );
};

export default ChekcoutForm;
