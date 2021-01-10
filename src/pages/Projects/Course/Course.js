import React from 'react';
import { useStore } from '../../../globalState/store';
import { SET_PAGE } from '../../../globalState/actionTypes';

import {
  StyledWrapper,
  StyledImage,
  StyledTitleWrapper,
  StyledTitle,
  StyledButtonMore,
  StyledSection,
  StyledVisitButton,
  StyledDescription,
} from './Course.style';
import { title, description } from './Course.text';
import generateList from '../../../utils/generateSpanList';
import image from '../../../assets/images/coderscamp.webp';
import Button1 from '../../../components/Button1/Button1';
import Button2 from '../../../components/Button2/Button2';

function Course() {
  const {
    state: { isMobile, lang },
    dispatch,
  } = useStore();
  const isPl = lang === 'pl';

  const handleClickMore = () => {
    if (!isMobile) dispatch({ type: SET_PAGE, payload: 5 });
  };
  const courseLink = 'https://coderscamp.edu.pl/';

  return (
    <StyledWrapper id="4">
      <StyledImage
        src={image}
        alt={isPl ? 'CodersCamp banner' : 'CodersCamp baner'}
        width={1200}
        height={630}
      />
      <StyledTitleWrapper>
        <StyledTitle>{title[lang]}</StyledTitle>
        <StyledButtonMore>
          <Button1
            onClick={handleClickMore}
            text={isPl ? 'Więcej' : 'See more'}
          />
        </StyledButtonMore>
      </StyledTitleWrapper>
      <StyledSection>
        <StyledVisitButton>
          <Button2 text={isPl ? 'Odwiedź' : 'Visit'} link={courseLink} />
        </StyledVisitButton>
        <StyledDescription>{generateList(description[lang])}</StyledDescription>
      </StyledSection>
    </StyledWrapper>
  );
}

export default Course;
