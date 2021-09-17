import { FormEvent, useContext, useState } from 'react';
import api from '../../services/api';

import toast, { Toaster } from 'react-hot-toast';

import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';

import { Container, Main, MoreInfoDiv, Title } from './styles';
import { AuthContext } from '../../contexts/authContext';

export function LoginPage() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = { email, password };

    await signIn(data);
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Main method="post" onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Senha"
            type="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button text="Entrar" type="submit" />
          <MoreInfoDiv>
            <a href="/resetPassword">Esqueceu a senha?</a>
            <a href="/create/NGO">Não possuo cadastro</a>
          </MoreInfoDiv>
        </Main>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Container>
    </>
  );
}
