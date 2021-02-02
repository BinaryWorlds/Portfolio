/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { StyledInput, StyledArea } from './ContactForm.style';

function GetInput(props) {
  const { tag } = props;
  const inputs = {
    input: <StyledInput {...props} />,
    textarea: <StyledArea {...props} />,
  };
  return <>{inputs[tag]}</>;
}

export default GetInput;
