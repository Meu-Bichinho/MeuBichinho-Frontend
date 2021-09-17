import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../../components/Button';
import  Input  from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';
import api from '../../services/api';
import {
   Container, 
   Description, 
   Main, 
   Title } from './styles';

export function ResetPassword(){
    const [email, setEmail] = useState("");

    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      const data = { email }

      await api.post(`/ngo/forgot`, data)
      toast.loading('Enviando e-mail');
      setTimeout(() => {
        toast.success('E-mail enviado');
      }, 1000);

      setTimeout(() => {
        window.location.replace('/')
      }, 2500)
    }

    return (
        <Container>
        <Sidebar />
        <Main method="post" onSubmit={handleSubmit}>
          <Title>Esqueceu sua senha?</Title>
          <Description>Insira seu email para que possâmos enviar o link de redefinição</Description>
          <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Button text="Enviar" onClick={handleSubmit}/>
        </Main>
      </Container>
    )
}