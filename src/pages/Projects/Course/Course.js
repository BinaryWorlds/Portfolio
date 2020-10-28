import React from 'react';
import { useStore } from '../../../globalState/store';
import {
  StyledWrapper,
  StyledImage,
  StyledTitle,
  StyledWrapper2,
  StyledVisitButton,
  StyledDescription,
} from './Course.style';
import { title, description } from './Course.text';
import generateList from '../../../utils/generateSpanList';
import image from '../../../assets/images/coderscamp.png';
import Button1 from '../../../components/Button1/Button1';
import Button2 from '../../../components/Button2/Button2';

function Course() {
  const {
    state: { lang },
  } = useStore();

  return (
    <StyledWrapper>
      <StyledImage src={image} />
      <StyledTitle>
        {title[lang]}
        <Button1 text={lang === 'pl' ? 'Więcej' : 'See more'} />
      </StyledTitle>
      <StyledWrapper2>
        <StyledVisitButton>
          <Button2 text={lang === 'pl' ? 'Odwiedź' : 'Visit'} />
        </StyledVisitButton>
        <StyledDescription>{generateList(description[lang])}</StyledDescription>
      </StyledWrapper2>
    </StyledWrapper>
  );
}

export default Course;
