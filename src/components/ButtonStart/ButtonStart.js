import React from 'react';
import PropTypes from 'prop-types';
import { sectionsId } from '../../View/siteStructure';

import * as S from './ButtonStart.style';

function ButtonStart({ children, onClick, className }) {
  return (
    <S.Wrapper className={className}>
      <S.Button smooth to={`/#${sectionsId.projects}`} onClick={onClick}>
        {children}
      </S.Button>
    </S.Wrapper>
  );
}

ButtonStart.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonStart;
