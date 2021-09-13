import { darken } from 'polished';
import styled from 'styled-components';

export const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: var(--white);
  border-radius: 20px;
  border: 1px solid var(--secondary);
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0px 0px 50px rgb(0 0 0 / 7%);

  cursor: pointer;

  :hover {
    background: ${darken(0.05, '#fff')};
    box-shadow: 0px 0px 50px rgb(0 0 0 / 15%);
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h1`
  font-size: 18px;
  color: var(--primary);
`;
