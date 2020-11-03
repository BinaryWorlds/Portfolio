import React from 'react';
import { useStore } from '../../../globalState/store';
import {
  StyledWrapper,
  StyledWrapper2,
  StyledSection,
  StyledTitle,
  StyledDescription,
  StyledImageWrapper,
  StyledImage,
} from './MyProduct.style';
import { title, description } from './MyProduct.text';
import generateList from '../../../utils/generateSpanList';
import Button2 from '../../../components/Button2/Button2';
import image from '../../../assets/images/myProduct.webp';

function MyProduct() {
  const {
    state: { lang },
  } = useStore();

  return (
    <StyledWrapper>
      <StyledWrapper2>
        <StyledSection>
          <StyledTitle>{title[lang]}</StyledTitle>
          <StyledDescription>
            {generateList(description[lang])}
          </StyledDescription>
          <Button2 text="Live" />
        </StyledSection>
        <StyledImageWrapper>
          <StyledImage src={image} />
        </StyledImageWrapper>
      </StyledWrapper2>
    </StyledWrapper>
  );
}

export default MyProduct;
