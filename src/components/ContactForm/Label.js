/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './ContactForm.style';
import GetInput from './GetInput';

function Label({ tag, name, placeholder, type, formik }) {
  const { getFieldProps, touched, errors } = formik;
  const error = touched[name] && errors[name];

  return (
    <S.Label>
      <S.LabelName>{name}</S.LabelName>
      <GetInput
        tag={tag}
        name={name}
        type={type}
        placeholder={placeholder}
        {...getFieldProps(name)}
        error={error}
      />
      <S.Error>{error}</S.Error>
    </S.Label>
  );
}

Label.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formik: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Label;
