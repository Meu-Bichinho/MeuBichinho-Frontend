import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Sidebar } from '../../components/Sidebar';
import { AiOutlinePoweroff } from 'react-icons/ai';

import Animal from '../../assets/manageranimals.svg';
import NGO from '../../assets/managerngo.svg';
import MapImage from '../../assets/map.svg';

import {
  Button,
  Card,
  Container,
  Content,
  Logout,
  Main,
  Title,
  Welcome,
} from './styles';
import { AuthContext } from '../../contexts/authContext';

export function Manager() {
  const { user } = useContext(AuthContext)
  
  function handleLogout() {
    setTimeout(() => {
      toast('Saindo', {
        icon: '🥲',
      });
    }, 500);
    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
    localStorage.clear();
  }

  return (
    <Container>
      <Sidebar />
      <Main>
        <Logout>
          <Title>Olá {user?.ngo_name}</Title>
          <Button onClick={handleLogout}>
            Sair <AiOutlinePoweroff size={20} />
          </Button>
        </Logout>
        <Welcome>Seja bem-vindo (a) de volta!</Welcome>
        <Content>
          <Card>
            <a href="/animalsList">
              <img src={Animal} alt="Gerenciar animais" />
              Gerenciar animais
            </a>
          </Card>
          <Card>
            <a href="/manager/NGO">
              <img src={NGO} alt="Gerenciar ONG" />
              Gerenciar ONG
            </a>
          </Card>
          <Card>
            <a href="/map">
              <img src={MapImage} alt="Ver mapa" />
              Ver mapa
            </a>
          </Card>
        </Content>
      </Main>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}
