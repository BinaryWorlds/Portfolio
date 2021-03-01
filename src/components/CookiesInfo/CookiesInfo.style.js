import styled from 'styled-components';

export const Info = styled.div`
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: white;
  border-top: 1px solid #ccc;
  box-shadow: 0px 2px 10px #555;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 1%;
  transition: transform 0.75s ease-in-out;
  transform: translateY(100%);
  ${({ show }) => show && `transform: translateY(0);`}
`;

export const Button = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  outline: none;
  border: 0;
  width: 22rem;

  height: auto;
  padding: 1rem;
  ::selection {
    color: white;
    background-color: transparent;
  }
  margin-top: 1rem;
`;

export const Policy = styled.a`
  color: black;
`;
