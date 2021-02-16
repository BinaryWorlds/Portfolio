/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  StyledError,
  StyledCheckbox,
  StyledConfirm,
} from './ContactForm.style';

function Checkbox({ name, formik, text }) {
  const { getFieldProps, touched, errors } = formik;
  const error = touched[name] && errors[name];

  return (
    <StyledConfirm>
      <StyledCheckbox type="checkbox" name={name} {...getFieldProps(name)} />
      <span>
        {text[0]}
        <a
          rel="noreferrer"
          href={`${process.env.PUBLIC_URL}/privacyPolicy.html`}
          target="_blank"
        >
          {text[1]}
        </a>
      </span>
      <StyledError>{error}</StyledError>
    </StyledConfirm>
  );
}

export default Checkbox;
