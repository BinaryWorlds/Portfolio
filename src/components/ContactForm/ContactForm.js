import React from 'react';
import useLang from '../../hooks/useLang';
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledArea,
  StyledButton,
} from './ContactForm.style';

function ContactForm({ addressTitle, onSubmit }) {
  const { isPl } = useLang();

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledTitle>{addressTitle}</StyledTitle>
      <StyledInput
        name="name"
        type="text"
        placeholder={isPl ? 'Imię' : 'Name'}
      />
      <StyledInput name="email" type="email" placeholder="Email" />
      <StyledArea
        name="content"
        type="textarea"
        placeholder={isPl ? 'Wiadomość' : 'Messange'}
      />
      <StyledButton type="submit">{isPl ? 'Wyślij' : 'Send'}</StyledButton>
    </StyledForm>
  );
}

export default ContactForm;
