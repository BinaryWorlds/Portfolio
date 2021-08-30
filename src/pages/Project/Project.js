/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './Project.style';
import { sectionsId } from '../../View/siteStructure';
import { ReactComponent as Icon } from '../../assets/icons/closeIcon.svg';

function Project({ data }) {
  const { title, image, github, live, description, techs } = data;

  const close = (
    <S.CloseButton to={`/#${sectionsId.projects}`}>
      <Icon />
    </S.CloseButton>
  );
  return (
    <S.Wrapper>
      {close}
      {image && <S.Image image={image} />}
      {github && <S.Link link={github} />}
      {live && <S.Link link={live} />}
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Para>{description}</S.Para>
        <S.Para>{techs}</S.Para>
      </S.Container>
      {close}
    </S.Wrapper>
  );
}

export default Project;
