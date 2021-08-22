/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as S from './ContactForm.style';

function Checkbox({ name, formik, text }) {
  const { getFieldProps, touched, errors } = formik;
  const error = touched[name] && errors[name];

  return (
    <S.Confirm>
      <S.Checkbox type="checkbox" name={name} {...getFieldProps(name)} />
      <span>
        {text[0]}
        <a rel="noreferrer" href={`${process.env.PUBLIC_URL}/privacyPolicy.html`} target="_blank">
          {text[1]}
        </a>
      </span>
      <S.Error>{error}</S.Error>
    </S.Confirm>
  );
}

export default Checkbox;
