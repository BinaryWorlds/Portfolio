import React from 'react';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.Footer>
      <S.Policy
        href={`${process.env.PUBLIC_URL}/privacyPolicy.html`}
        target="_blank"
        rel="noreferrer">
        Polityka prywatności
      </S.Policy>
      <S.Para>
        © 2021 <br />
        Szymkowiak Dawid
      </S.Para>
    </S.Footer>
  );
}

export default Footer;
