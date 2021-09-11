import React from 'react';
import { Container } from './styles';

interface IButtonProps {
  text: string;
  onClick?: () => any;
  type?: "submit";
}

export function Button({ text, onClick, type }: IButtonProps) {
  return (<Container onClick={onClick} type={type}>{text}</Container>)
}
