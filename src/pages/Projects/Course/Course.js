import React from 'react';
import { useStore } from '../../../globalState/store';
// import { SET_PAGE } from '../../../globalState/actionTypes';

import {
  StyledWrapper,
  StyledImage,
  StyledTitleWrapper,
  StyledTitle,
  StyledButtonMore,
  StyledSection,
  StyledVisitButton,
  StyledDescription,
  StyledHint,
} from './Course.style';
import { title, description } from './Course.text';
import generateList from '../../../utils/generateSpanList';
import image from '../../../assets/images/coderscamp';
import Button1 from '../../../components/Button1/Button1';
import Button2 from '../../../components/Button2/Button2';
import useGA from '../../../hooks/useGA';
import useHint from '../../../hooks/useHint';

function Course() {
  useGA('Course');
  const { isHintShow, handleHint } = useHint(1);

  const {
    state: { lang },
  } = useStore();
  const isPl = lang === 'pl';

  const handleClickMore = () => {
    handleHint();
    // if (!isMobile) dispatch({ type: SET_PAGE, payload: 5 });
  };
  const courseLink = 'https://coderscamp.edu.pl/';

  return (
    <StyledWrapper id="4">
      <StyledImage
        image={image}
        alt={isPl ? 'CodersCamp banner' : 'CodersCamp baner'}
      />
      <StyledTitleWrapper>
        <StyledTitle>{title[lang]}</StyledTitle>
        <StyledButtonMore>
          <Button1
            onClick={handleClickMore}
            text={isPl ? 'Więcej' : 'See more'}
          />
          <StyledHint isHintShow={isHintShow}>
            {isPl ? 'Dostępne wkrótce!' : 'Cooming soon!'}
          </StyledHint>
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
