import React from 'react';
import { useStore } from '../../globalState/store';
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
  const {
    state: { lang },
  } = useStore();

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
