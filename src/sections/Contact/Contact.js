import React from 'react';
import * as S from './Contact.style';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  return (
    <S.Wrapper>
      <S.Title>Kontakt</S.Title>
      <ContactForm />
    </S.Wrapper>
  );
}

export default Contact;
