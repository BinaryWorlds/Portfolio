/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Checkbox;
