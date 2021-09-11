import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import  Input  from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';
import api from '../../services/api';
import { Container, Main, MoreInfoDiv, Title } from './styles';

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    const data = { email, password }
   
    await api.post('/ngo/login', data).then((response) => {console.log(response)})

  }

  return (
    <Container>
      <Sidebar />
      <Main method="post" onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <Input label="Senha" type="Password"  value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Button text="Entrar" type="submit"/>
        <MoreInfoDiv>
          <a href="/resetPassword">Esqueceu a senha?</a>
          <a href="/create/NGO">Não possuo cadastro</a>
        </MoreInfoDiv>
      </Main>
    </Container>
  );
}
