import React, { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import  Input  from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';
import {
   Container, 
   Description, 
   Main, 
   Title } from './styles';

export function ResetPassword(){
    const [email, setEmail] = useState('');

    function handleSubmit(event: FormEvent){
      event.preventDefault();
    }

    return (
        <Container>
        <Sidebar />
        <Main method="post" onSubmit={handleSubmit}>
          <Title>Esqueceu sua senha?</Title>
          <Description>Insira seu email para que possâmos enviar o link de redefinição</Description>
          <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Button text="Enviar" />
        </Main>
      </Container>
    )
}