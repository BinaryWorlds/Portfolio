import React from 'react';
import useHandleAnimations from '../../hooks/useHandleAnimations';
import generateList from '../../utils/generateSpanList';
import {
  StyledWrapper,
  StyledTitle,
  StyledText,
  StyledTable,
  StyledColumn,
} from './AboutMe.style';
import {
  title,
  description,
  frontendTxt,
  backendTxt,
  designTxt,
} from './AboutMe.text';

function AboutMe() {
  const { lang } = useHandleAnimations();

  return (
    <StyledWrapper>
      <StyledTitle>{title[lang]}</StyledTitle>
      <StyledText>{description[lang]}</StyledText>
      <StyledTable>
        <StyledColumn val={1}>{generateList(frontendTxt)}</StyledColumn>
        <StyledColumn val={2}>{generateList(backendTxt)}</StyledColumn>
        <StyledColumn val={3}>{generateList(designTxt)}</StyledColumn>
      </StyledTable>
    </StyledWrapper>
  );
}

export default AboutMe;
