/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import * as S from './ContactForm.style';

function GetInput(props) {
  const { tag } = props;
  const inputs = {
    input: <S.Input {...props} />,
    textarea: <S.Area {...props} />,
  };
  return inputs[tag];
}

export default GetInput;
