import React from 'react';
import { useStore } from '../../globalState/store';
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledArea,
  StyledButton,
} from './ContactForm.style';

function ContactForm({ addressTitle, onSubmit }) {
  const {
    state: { lang },
  } = useStore();
  const isPl = lang === 'pl';

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
