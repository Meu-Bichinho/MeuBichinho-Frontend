import { InputHTMLAttributes } from 'react';
import {  ContainerInput, InputComponent,  LabelInput } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: (event: any) => void;
}

export default function Input({ label, type, placeholder, value, onChange, ...rest }: IInputProps) {
  return (
    <ContainerInput>
      <LabelInput>{label}</LabelInput>
      <InputComponent type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
    </ContainerInput>
  );
}
