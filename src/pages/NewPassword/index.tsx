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

export function NewPassoword(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    var path = window.location.pathname;
    const token = path.substring(path.lastIndexOf("/") + 1);

    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      if (password.length < 6) {
        return toast.error("A senha precisa ter no mínimo 6 caracteres!");
      } else if (password !== confirmPassword) {
        return toast.error("As senhas precisam ser iguais!");
      }

      const data = { email, password }

      await api.put(`/ngo/reset`, data, { headers: { authorization: token } })
      toast.loading('Salvando alterações');
      setTimeout(() => {
        toast.success('Alterações salvas');
      }, 1000);

      window.location.replace('/login')
    }

    return (
        <Container>
        <Sidebar />
        <Main method="post" onSubmit={handleSubmit}>
          <Title>Defina sua nova senha</Title>
          <Input label="Por segurança, digite seu e-mail novamente" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input label="Digite Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <Input label="Confirmar senha" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
          <Button text="Enviar" onClick={handleSubmit}/>
        </Main>
      </Container>
    )
}