import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Main = styled.form`
  width: 100%;
  max-width: 700px;
  /* margin-bottom: 100vh; */
  height: auto;
  gap: 20px;

  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media(max-width:420px){
    overflow: visible;
    border-radius: 0px;
    padding: 64px 40px 20px;
  }
`;

export const Header = styled.header`
  display: flex;

  gap: 20px;
  border-bottom: 1px solid #d3e2e5;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;
  padding-bottom: 24px;
  text-align: left;
`;

export const Button = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 64px;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;

  cursor: pointer;

  :hover {
    background: ${darken(0.2, '#38B6FF')};
  }
`;
