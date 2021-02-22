/* eslint no-use-before-define: ["error", { "variables": false }] */
import React, { useState, createRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import fetch from 'cross-fetch';
import ReCAPTCHA from 'react-google-recaptcha';
import ReactGA from 'react-ga';

import useHint from '../../hooks/useHint';
import useLang from '../../hooks/useLang';
import {
  StyledForm,
  StyledTitle,
  StyledButton,
  StyledHint,
} from './ContactForm.style';
import Label from './Label';
import Checkbox from './Checkbox';

import { errors, texts } from './ContactForm.text';

const SITE_KEY = process.env.REACT_APP_SITE_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const steps = ['send', 'sending', 'ok', 'error'];

function ContactForm({ addressTitle }) {
  const { isHintShow, handleHint } = useHint(1);

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [token, setToken] = useState(null);
  const [step, setStep] = useState(0);

  const { lang, isPl } = useLang();

  const recaptchaRef = createRef();

  const requiredTxt = errors.required[lang];
  const mailTxt = errors.mail[lang];
  const tooLongTxt = errors.tooLong[lang];

  const initialValues = {
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(requiredTxt).max(16, tooLongTxt),
    email: yup
      .string()
      .email(mailTxt)
      .required(requiredTxt)
      .max(254, tooLongTxt),
    message: yup.string().required(requiredTxt).max(1024, tooLongTxt),
    acceptTerms: yup.boolean().required(requiredTxt).oneOf([true], requiredTxt),
  });

  const handleError = () => {
    setStep(3);
    handleHint();
  };

  const onSubmit = (values) => {
    if (step === 1) return;
    if (!token) {
      setShowCaptcha(true);
      return;
    }
    setToken(null);
    setStep(1);

    ReactGA.event({
      category: 'contact',
      action: 'Mail request',
    });

    const data = {
      service_id: 'devisme',
      template_id: 'devisme',
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { ...values, 'g-recaptcha-response': token },
    };

    fetch(apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setStep(2);
          formik.resetForm();
        } else handleError();
      })
      .catch(() => handleError());
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const updateToken = (value) => {
    if (value) {
      formik.handleSubmit();
      setShowCaptcha(false);
    }
    setToken(value);
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit} show={showCaptcha}>
      <StyledTitle id="title">{addressTitle}</StyledTitle>
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
        name="message"
        placeholder={isPl ? 'Wiadomość' : 'Messange'}
        formik={formik}
      />
      <StyledButton show={!showCaptcha} type="submit">
        {texts[steps[step]][lang]}
      </StyledButton>
      {showCaptcha && (
        <ReCAPTCHA
          id="captcha"
          ref={recaptchaRef}
          sitekey={SITE_KEY}
          onChange={updateToken}
          size="normal"
        />
      )}
      <Checkbox name="acceptTerms" formik={formik} text={texts.confirm[lang]} />
      <StyledHint isHintShow={isHintShow}>{texts.hint[lang]}</StyledHint>
    </StyledForm>
  );
}

export default ContactForm;
