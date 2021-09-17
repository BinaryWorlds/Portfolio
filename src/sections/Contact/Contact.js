import React from 'react';
import * as S from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ReactComponent as KeyIcon } from '../../assets/icons/keyIcon.svg';
import { ReactComponent as FbIcon } from '../../assets/icons/fbIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedinIcon.svg';
import { ReactComponent as GhIcon } from '../../assets/icons/ghIcon.svg';
import publicKey from '../../assets/publicKey_contact@dev-is.me.pgp';
import { sectionsId } from '../../View/siteStructure';

const fbLink = 'https://m.me/dawid.szymkowiak.10';
const ghLink = 'https://github.com/BinaryWorlds';
const linkedinLink = 'https://www.linkedin.com/';
const mailTo = 'mailto:contact@dev-is.me';

const eventProps = { category: 'Contact' };

function Contact() {
  return (
    <S.Wrapper id={sectionsId.contact}>
      <S.Title>Kontakt</S.Title>
      <ContactForm />
      <S.Container>
        <S.Link
          link={publicKey}
          aria="publicKey"
          isBlank={false}
          download="publicKey_contact@dev-is.me.pgp"
          eventProps={eventProps}>
          <KeyIcon />
          Pobierz mój
          <br />
          klucz publiczny
        </S.Link>
        <S.Link link={mailTo} aria="email" isBlank={false} eventProps={eventProps}>
          contact@
          <br />
          dev-is.me
        </S.Link>
        <S.Link link={fbLink} aria="facebook" eventProps={eventProps}>
          <FbIcon />
        </S.Link>
        <S.Link link={linkedinLink} aria="linkedin" eventProps={eventProps}>
          <LinkedinIcon />
        </S.Link>
        <S.Link link={ghLink} aria="github" eventProps={eventProps}>
          <GhIcon />
        </S.Link>
      </S.Container>
    </S.Wrapper>
  );
}

export default React.memo(Contact);
