import React from 'react';
import useUnmountAnimations from '../../hooks/useHandleAnimations';

import { questions } from './Contact.text';
import { StyledWrapper, StyledSection, StyledButtons } from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import messengerIcon from '../../assets/icons/messenger.webp';
import emailIcon from '../../assets/icons/email.webp';
import githubIcon from '../../assets/icons/github.webp';

function Contact() {
  const { isPageUnmounted, setUnmounted, lang } = useUnmountAnimations();

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
    <StyledWrapper isUnmounted={isPageUnmounted} onAnimationEnd={setUnmounted}>
      <StyledSection>
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
      </StyledSection>
      <ContactForm onSubmit={handleSubmit} addressTitle={addressTitle} />
    </StyledWrapper>
  );
}

export default Contact;
