/* eslint no-use-before-define: ["error", { "variables": false }] */
import React, { useEffect, useState, useRef, createRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import fetch from 'cross-fetch';
import ReCAPTCHA from 'react-google-recaptcha';
import { encrypt, createMessage, readKey } from 'openpgp/dist/openpgp.min';

import useEventGA from '../../hooks/useEventGA';
import * as S from './ContactForm.style';
import Label from './Label';
import Checkbox from './Checkbox';

import { errors, texts } from './ContactForm.text';

import { ReactComponent as LockIcon } from '../../assets/icons/lockIcon.svg';
import publicKey from '../../assets/publicKey';

const SITE_KEY = process.env.REACT_APP_SITE_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const steps = ['send', 'sending', 'ok', 'error'];
const delayTime = 5000;

const lang = 'pl';
const isPl = true;

function ContactForm() {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [token, setToken] = useState(null);
  const [step, setStep] = useState(0);

  const [handleEvent] = useEventGA();
  const eventProps = { category: 'Contact', action: 'click Submit', label: `${steps[step]}` };
  const registerEvent = () => handleEvent(eventProps);

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
    email: yup.string().email(mailTxt).required(requiredTxt).max(254, tooLongTxt),
    message: yup.string().required(requiredTxt).max(1024, tooLongTxt),
    acceptTerms: yup.boolean().required(requiredTxt).oneOf([true], requiredTxt),
  });

  const genMessage = ({ name, email, message }) => `${name}\n${email}\n\n${message}`;

  const encryptData = async (data) => {
    const encrypted = await encrypt({
      message: await createMessage({ text: data }),
      encryptionKeys: await readKey({ armoredKey: publicKey }),
    });
    return encrypted;
  };

  const handleError = () => setStep(3);

  const handleSuccess = () => {
    setStep(2);
    formik.resetForm();
  };

  const sendMail = (data) => {
    fetch(apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) handleSuccess();
        else handleError();
      })
      .catch(handleError);
  };

  const onSubmit = async (values) => {
    if (step === 1) return;
    if (!token) {
      setShowCaptcha(true);
      return;
    }
    setToken(null);
    setStep(1);

    const message = genMessage(values);
    const encryptedMessage = await encryptData(message);

    const data = {
      service_id: 'devisme',
      template_id: 'devisme',
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { message: encryptedMessage, 'g-recaptcha-response': token },
    };

    sendMail(data);
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

  const timerId = useRef();

  const setTimerId = (id) => {
    clearTimeout(timerId.current);
    timerId.current = id;
  };

  const resetProcess = () => {
    const timerIdTask = setTimeout(() => {
      setStep(0);
    }, delayTime);

    setTimerId(timerIdTask);
  };

  useEffect(() => {
    if (step > 1) resetProcess();
    else setTimerId(null);
    return () => setTimerId(null);
  }, [step]);

  return (
    <S.Form onSubmit={formik.handleSubmit} show={showCaptcha} id="contactForm">
      <S.Title>
        <LockIcon />
        Szyfrowanie end to end
        <wbr />
        (PGP)
      </S.Title>
      <Label
        tag="input"
        type="text"
        name="name"
        placeholder={isPl ? 'Imię' : 'Name'}
        formik={formik}
      />
      <Label tag="input" type="email" name="email" placeholder="Email" formik={formik} />
      <Label
        tag="textarea"
        type="textarea"
        name="message"
        placeholder={isPl ? 'Wiadomość' : 'Messange'}
        formik={formik}
      />
      <Checkbox name="acceptTerms" formik={formik} text={texts.confirm[lang]} />
      <S.Button show={!showCaptcha} type="submit" onClick={registerEvent}>
        {texts[steps[step]][lang]}
      </S.Button>
      {showCaptcha && (
        <ReCAPTCHA
          id="captcha"
          ref={recaptchaRef}
          sitekey={SITE_KEY}
          onChange={updateToken}
          size="normal"
        />
      )}
    </S.Form>
  );
}

export default ContactForm;
