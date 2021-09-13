import React, { TextareaHTMLAttributes } from 'react';
import { Container, TextAreaComponent, Label } from './styles'

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string,
    placeholder?: string;
    value?: string;
    onChange?: (event: any) => void;
}

export function TextArea({label, placeholder, value, onChange}: ITextAreaProps){
    return (
        <Container>
            <Label>{label}</Label>
            <TextAreaComponent placeholder={placeholder} value={value} onChange={onChange}/>
        </Container>
    )
}