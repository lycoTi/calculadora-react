import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #003355aa;
  cursor: pointer;
  color: #FFFFFF;
  background-color: #0077f0;
  font-size: 32PX;
  font-weight: 700;
  flex: 1;
  transition: 200ms ease;
  box-shadow: 0 0 0px #000000;
  border-radius: 8px;

  
  &:hover {
    background-color: #0088f0;

    /* filter: brightness(1.2); */
    transform: scale(1.03);
    box-shadow: 0 0 10px -1px #00002f66;
  }
  &:active {
    transform: scale(0.99);
    transition: 100ms;
  }
`