/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './Project.style';
import Footer from '../../sections/Footer/Footer';

import { sectionsId } from '../../View/siteStructure';
import { ReactComponent as Icon } from '../../assets/icons/closeIcon.svg';
import { loadMore } from '../../store/app/actions';

function Project({ data }) {
  const { title, image, alt, github, live, description, list, techs } = data;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(loadMore());
  }, []);

  const close = (
    <S.CloseButton to={`/#${sectionsId.projects}`}>
      <Icon />
    </S.CloseButton>
  );

  return (
    <>
      <S.Wrapper>
        {close}
        <S.Image image={image} alt={alt} />
        <S.ButtonsContainer>
          {github && (
            <S.Link github link={github}>
              GitHub
            </S.Link>
          )}
          {live && (
            <S.Link live link={live}>
              LIVE
            </S.Link>
          )}
        </S.ButtonsContainer>
        <S.Container>
          <S.Title>{title}</S.Title>
          {description &&
            description.map((el) => (
              <S.Para desc key={el}>
                {el}
              </S.Para>
            ))}
          {list && (
            <S.List>
              {list.map((el, i) => (
                <S.Para as="li" first={i === 0} lst key={el}>
                  {el}
                </S.Para>
              ))}
            </S.List>
          )}
          {techs &&
            techs.map((el, i) => (
              <S.Para first={i === 0} techs key={el}>
                {el}
              </S.Para>
            ))}
          {close}
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  );
}

export default Project;
