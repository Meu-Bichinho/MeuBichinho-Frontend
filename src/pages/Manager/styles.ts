import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(155.85deg, #f44a87 45.83%, #ffb930 100%);
  height: 100vh;

  @media(max-width:420px){
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 700px;
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

export const Logout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 5px;
  height: 34px;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: var(--title);
  transition: all 0.2s;

  :hover {
    background: ${darken(0.1, '#ffffff')};
  }
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;

  text-align: flex-start;

  @media(max-width:420px){
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Welcome = styled.h1`
  width: 100%;

  font-size: 24px;
  line-height: 34px;
  color: var(--title);
  font-weight: 600;
  border-bottom: 1px solid #d3e2e5;

  padding-bottom: 24px;
  text-align: flex-start;

  @media(max-width:420px){
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media(max-width:420px){
    flex-direction: column;
    gap: 15px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 150px;
  height: 200px;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.07);
  transition: all 0.2s;

  a {
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    color: var(--title);
    margin-bottom: 25px;
    padding: 10px;
  }

  img {
    width: 100px;
    height: 150px;
  }

  :hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  }
`;
