import React from 'react';
import useLang from '../../../hooks/useLang';
import {
  StyledWrapper,
  StyledWrapper2,
  StyledBorder,
  StyledSection,
  StyledTitle,
  StyledDescription,
  StyledImage,
} from './MyProduct.style';
import { title, description } from './MyProduct.text';
import generateList from '../../../utils/generateSpanList';
import Button2 from '../../../components/Button2/Button2';
import image from '../../../assets/images/myProduct.png';

function MyProduct() {
  const { lang } = useLang();

  const isPl = lang === 'pl';
  const myProductLink = 'https://climbingtimers.com/';

  return (
    <StyledWrapper id="8">
      <StyledWrapper2>
        <StyledBorder>
          <rect />
        </StyledBorder>
        <StyledSection>
          <StyledTitle>{title[lang]}</StyledTitle>
          <StyledDescription>
            {generateList(description[lang])}
          </StyledDescription>
          <Button2 text="Live" link={myProductLink} />
        </StyledSection>
        <StyledImage
          src={image}
          alt={isPl ? 'Zegary Wspinaczkowe' : 'Climbing Timers'}
          width={1072}
          height={812}
        />
      </StyledWrapper2>
    </StyledWrapper>
  );
}

export default MyProduct;
