import React from 'react';
import useLang from '../../hooks/useLang';

import { questions } from './Contact.text';
import * as S from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import messengerIcon from '../../assets/icons/messenger.png';
import emailIcon from '../../assets/icons/email.png';
import githubIcon from '../../assets/icons/github.png';
import useGA from '../../hooks/useGA';

function Contact() {
  useGA('Contact');

  const { lang } = useLang();

  const fbProfile = 'https://m.me/dawid.szymkowiak.10';
  const mailToMe = 'mailto:szymkowiak.dawid93@gmail.com';
  const ghProfile = 'https://github.com/BinaryWorlds';
  const addressTitle = (
    <>
      To: <span>contact [at] dev - is.me</span>
    </>
  );

  const questionsList = questions[lang].map((item, index, array) => {
    if (index % 2) return null;
    return (
      <span key={item}>
        {item}
        <br />
        {array[index + 1]}
      </span>
    );
  });

  return (
    <S.Wrapper id="9">
      <S.Section>
        <S.Background />
        <S.Left>
          {questionsList}
          <S.Buttons>
            <ButtonIcon
              size={41}
              link={fbProfile}
              iconSrc={messengerIcon}
              ariaLabel="facebook"
            />
            <ButtonIcon
              size={41}
              link={mailToMe}
              iconSrc={emailIcon}
              ariaLabel="email"
            />
            <ButtonIcon
              size={41}
              link={ghProfile}
              iconSrc={githubIcon}
              ariaLabel="github"
            />
          </S.Buttons>
        </S.Left>
      </S.Section>
      <ContactForm addressTitle={addressTitle} />
    </S.Wrapper>
  );
}

export default Contact;
