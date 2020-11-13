import React from 'react';
import useUnmountAnimations from '../../hooks/useHandleAnimations';
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
  const { isPageUnmounted, setUnmounted, lang } = useUnmountAnimations();

  return (
    <StyledWrapper isUnmounted={isPageUnmounted} onAnimationEnd={setUnmounted}>
      <StyledTitle isUnmounted={isPageUnmounted}>{title[lang]}</StyledTitle>
      <StyledText isUnmounted={isPageUnmounted}>{description[lang]}</StyledText>
      <StyledTable>
        <StyledColumn val={1} isUnmounted={isPageUnmounted}>
          {generateList(frontendTxt)}
        </StyledColumn>
        <StyledColumn val={2} isUnmounted={isPageUnmounted}>
          {generateList(backendTxt)}
        </StyledColumn>
        <StyledColumn val={3} isUnmounted={isPageUnmounted}>
          {generateList(designTxt)}
        </StyledColumn>
      </StyledTable>
    </StyledWrapper>
  );
}

export default AboutMe;
