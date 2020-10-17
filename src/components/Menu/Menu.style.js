import styled, { css } from 'styled-components';

const heightTrapeze = 60;
const opposite = Math.floor(heightTrapeze / Math.sqrt(3));
const hypotenuse = Math.floor((heightTrapeze / Math.sqrt(3)) * 2);

export const StyledWrapper = styled.nav`
  position: absolute;
  z-index: 100;
  top: 4vh;
  right: 2vw;
`;

export const StyledMenu = styled.div`
  z-index: 99;
  position: relative;
  width: 200px;
  height: 0px;
  border-left: ${opposite}px solid transparent;
  border-bottom: ${heightTrapeze}px solid ${({ theme }) => theme.colors.blue};
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
  cursor: pointer;
`;
export const StyledElement = styled.li`
  list-style: none;
  position: relative;
  top: -${hypotenuse}px;
  margin-bottom: 27px;
  width: 192px;
  height: ${hypotenuse}px;
  transform-style: preserve-3d;
  transform: rotate(30deg);
  transform-origin: bottom left;
  background: ${({ theme }) => theme.colors.pink};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  ${({ active, last }) =>
    (active || last) &&
    css`
      ::before {
        content: '';
        position: absolute;
        right: 0px;
        bottom: 9px;
        width: ${last ? 180 : 200 - opposite}px;
        height: ${heightTrapeze}px;
        transform: rotate(-30deg) skewX(-30deg) translateZ(-1px);
        transform-origin: top right;
        background: ${({ theme }) => theme.colors.blue};
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }
    `}

  ::after {
    position: absolute;
    content: '${({ text }) => text}';
    transform: rotate(-30deg) translate3d(0, 0, 0);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 30px 0 0 100px;
  }
`;
