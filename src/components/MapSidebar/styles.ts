import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.aside`
    height: 100vh;
    width: 440px;
    background: linear-gradient(329.54deg, #00A1FF 0%, #38B6FF 100%);
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 900px){
        width: 300px;
    }

    @media(max-width: 770px){
        width: 280px;
    }

    @media(max-width: 700px){
        width: 250px;
    }

    @media(max-width: 620px){
        width: 200px;
    }

    @media(max-width: 420px){
        width: 150px;
        padding: 20px;
    }
    
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 124px;

    color: var(--dark_blue);
    
    @media(max-height: 620px){ 
        justify-content: center;
    }
    @media(max-height: 565px){ 
        margin-bottom: 20px;
    }

    @media(max-width: 420px){
        margin-bottom: 20px;
    }
    

    h1 { 
        @media(max-width: 620px){
        display: none;
    }
    }
`;

export const Img = styled.img`
    max-width: 190.5px;
    height: 72px;
    margin-right: 10px;
`;

export const Text = styled.h2`
    font-size: 36px;
    font-weight: 800;
    line-height: 42px;

    @media(max-width: 700px){
        font-size: 28px;
    }
    @media(max-width: 420px){
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Span = styled.p`
    font-weight: 300;
    line-height: 28px;
    margin-top: 24px;
    font-size: 18px;

    @media(max-width: 420px){
        font-size: 14px;
        line-height: 20px;
    }
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