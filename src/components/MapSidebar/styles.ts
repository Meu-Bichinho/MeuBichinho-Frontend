import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  width: 440px;
  background: linear-gradient(329.54deg, #00a1ff 0%, #38b6ff 100%);
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
    flex-direction: row;
    padding: 36px;

    > div {
        width: 90%;
        margin-right: 16px;
    }
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 124px;

  color: var(--dark_blue);

  @media (max-width: 768px) {
    > img {
        height: 40px;
    }
    margin-bottom: 10px;
    justify-content: flex-start;
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

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const Span = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-top: 24px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
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
