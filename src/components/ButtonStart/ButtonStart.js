import React from 'react';

import PropTypes from 'prop-types';

import * as S from './ButtonStart.style';

function ButtonStart({ children, onClick, className }) {
  return (
    <S.Wrapper className={className}>
      <S.Button onClick={onClick}>{children}</S.Button>
    </S.Wrapper>
  );
}

ButtonStart.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonStart;
