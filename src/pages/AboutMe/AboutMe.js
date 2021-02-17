import React from 'react';
import useLang from '../../hooks/useLang';
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
import useGA from '../../hooks/useGA';

function AboutMe() {
  useGA('AboutMe');

  const { lang } = useLang();

  return (
    <StyledWrapper id="1">
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
