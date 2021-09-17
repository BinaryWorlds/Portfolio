import React from 'react';
import useEventGA from '../../hooks/useEventGA';

import * as S from './Footer.style';

const eventProps = { category: 'Navigation', action: 'Show policy', label: 'footer' };

function Footer() {
  const [handleEvent] = useEventGA();
  const handlePolicy = () => handleEvent(eventProps);

  return (
    <S.Footer>
      <S.Policy
        onClick={handlePolicy}
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
