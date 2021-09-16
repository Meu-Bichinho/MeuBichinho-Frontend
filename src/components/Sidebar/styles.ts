import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  /* min-height: 100vh; */
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #00a1ff 0%, #38b6ff 100%);
  z-index: 7; 
  

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 420px){ 
    width: 100%;
    height: 40px;
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 48px;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: var(--pink);
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  :hover {
    background: ${darken(0.1, '#f44a87')};
  }
`;
