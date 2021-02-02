/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyledLabel, StyledError } from './ContactForm.style';
import GetInput from './GetInput';

function Label({ tag, name, type, placeholder, formik }) {
  const { getFieldProps, touched, errors } = formik;
  const error = touched[name] && errors[name];

  return (
    <StyledLabel>
      <span id="label">{name}</span>
      <GetInput
        tag={tag}
        name={name}
        type={type}
        placeholder={placeholder}
        {...getFieldProps(name)}
        error={error}
      />
      <StyledError>{error}</StyledError>
    </StyledLabel>
  );
}

export default Label;
