import React from 'react';
import useLang from '../../hooks/useLang';

import { questions } from './Contact.text';
import {
  StyledWrapper,
  StyledSection,
  StyledLeft,
  StyledButtons,
  StyledBackground,
} from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import messengerIcon from '../../assets/icons/messenger.png';
import emailIcon from '../../assets/icons/email.png';
import githubIcon from '../../assets/icons/github.png';

function Contact() {
  const { lang } = useLang();

  const handleSubmit = (e) => e.preventDefault();
  const fbProfile = 'https://m.me/dawid.szymkowiak.10';
  const mailToMe = 'mailto:szymkowiak.dawid93@gmail.com';
  const ghProfile = 'https://github.com/BinaryWorlds';
  const addressTitle = (
    <>
      To: <span>szymkowiak.dawid93[at]gmail.com</span>
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
    <StyledWrapper id="9">
      <StyledSection>
        <StyledBackground />
        <StyledLeft>
          {questionsList}
          <StyledButtons>
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
          </StyledButtons>
        </StyledLeft>
      </StyledSection>
      <ContactForm onSubmit={handleSubmit} addressTitle={addressTitle} />
    </StyledWrapper>
  );
}

export default Contact;
