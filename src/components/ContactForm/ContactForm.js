import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useLang from '../../hooks/useLang';

import { StyledForm, StyledTitle, StyledButton } from './ContactForm.style';
import Label from './Label';
import { errors } from './ContactForm.text';

function ContactForm({ addressTitle }) {
  const { lang, isPl } = useLang();

  const requiredTxt = errors.required[lang];
  const mailTxt = errors.mail[lang];

  const initialValues = {
    name: '',
    email: '',
    content: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(requiredTxt),
    email: yup.string().email(mailTxt).required(requiredTxt),
    content: yup.string().required(requiredTxt),
  });

  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTitle>{addressTitle}</StyledTitle>
      <Label
        tag="input"
        type="text"
        name="name"
        placeholder={isPl ? 'Imię' : 'Name'}
        formik={formik}
      />
      <Label
        tag="input"
        type="email"
        name="email"
        placeholder="Email"
        formik={formik}
      />
      <Label
        tag="textarea"
        type="textarea"
        name="content"
        placeholder={isPl ? 'Wiadomość' : 'Messange'}
        formik={formik}
      />
      <StyledButton type="submit">{isPl ? 'Wyślij' : 'Send'}</StyledButton>
    </StyledForm>
  );
}

export default ContactForm;
