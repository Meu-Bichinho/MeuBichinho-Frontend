import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  type?: "submit";
}

export function Button({ text, onClick, type }: IButtonProps) {
  return (<Container onClick={onClick} type={type}>{text}</Container>)
}
