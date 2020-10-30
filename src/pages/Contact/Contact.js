import React from 'react';
import { useStore } from '../../globalState/store';
import { questions } from './Contact.text';
import { StyledWrapper, StyledSection, StyledButtons } from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import messengerIcon from '../../assets/icons/messenger.png';
import emailIcon from '../../assets/icons/email.png';
import githubIcon from '../../assets/icons/github.png';

function Contact() {
  const {
    state: { lang },
  } = useStore();

  const handleSubmit = (e) => e.preventDefault();
  const fbProfile = 'https://m.me/dawid.szymkowiak.10';
  const mailToMe = 'mailto:szymkowiak.dawid93@gmail.com';
  const ghProfile = 'https://github.com/BinaryWorlds';

  const desc = questions[lang].map((item, index, array) => {
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
    <StyledWrapper>
      <StyledSection>
        {desc}
        <StyledButtons>
          <ButtonIcon size={41} link={fbProfile} iconSrc={messengerIcon} />
          <ButtonIcon size={41} link={mailToMe} iconSrc={emailIcon} />
          <ButtonIcon size={41} link={ghProfile} iconSrc={githubIcon} />
        </StyledButtons>
      </StyledSection>
      <ContactForm
        onSubmit={handleSubmit}
        addressTitle="To: szymkowiak.dawid93[at]gmail.com"
      />
    </StyledWrapper>
  );
}

export default Contact;
