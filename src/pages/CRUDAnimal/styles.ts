import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(155.85deg, #f44a87 45.83%, #ffb930 100%);
  height: 100%;
`;

export const Main = styled.form`
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
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  /* margin-bottom: 40px; */
  padding-bottom: 24px;
  text-align: center;
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
