import React, { InputHTMLAttributes } from 'react';
import {  ContainerInput, InputComponent,  LabelInput } from './styles';

interface IInputProps{
  label: string;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: (event: any) => void;
}

export default function Input({ label, type, placeholder, value, onChange }: IInputProps) {
  return (
    <ContainerInput>
      <LabelInput>{label}</LabelInput>
      <InputComponent type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </ContainerInput>
  );
}
