import React from 'react';
import { useStore } from '../../../globalState/store';
import { SET_PAGE } from '../../../globalState/actionTypes';
import useHandleAnimations from '../../../hooks/useHandleAnimations';

import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledTitle,
  StyledWrapper2,
  StyledVisitButton,
  StyledDescription,
} from './Course.style';
import { title, description } from './Course.text';
import generateList from '../../../utils/generateSpanList';
import image from '../../../assets/images/coderscamp.webp';
import Button1 from '../../../components/Button1/Button1';
import Button2 from '../../../components/Button2/Button2';

function Course() {
  const { dispatch } = useStore();
  const { isPageMounted, lang } = useHandleAnimations();
  const isPl = lang === 'pl';
  const handleClickMore = () => dispatch({ type: SET_PAGE, payload: 5 });
  const courseLink = 'https://coderscamp.edu.pl/';

  return (
    <StyledWrapper isMounted={isPageMounted}>
      <StyledImageWrapper>
        <StyledImage
          src={image}
          alt={isPl ? 'CodersCamp banner' : 'CodersCamp baner'}
        />
      </StyledImageWrapper>
      <StyledTitle>
        {title[lang]}
        <Button1
          onClick={handleClickMore}
          text={isPl ? 'Więcej' : 'See more'}
        />
      </StyledTitle>
      <StyledWrapper2>
        <StyledVisitButton>
          <Button2 text={isPl ? 'Odwiedź' : 'Visit'} link={courseLink} />
        </StyledVisitButton>
        <StyledDescription>{generateList(description[lang])}</StyledDescription>
      </StyledWrapper2>
    </StyledWrapper>
  );
}

export default Course;
