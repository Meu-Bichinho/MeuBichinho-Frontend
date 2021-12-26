import React from 'react';
import { FiArrowRightCircle, FiLogIn } from 'react-icons/fi';
import MeuBichinho from '../../assets/logo.svg';
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  Description,
  Dev,
  Img,
  JoinButton,
  Logo,
  Title,
} from './styles';

export function LandingPage() {
  return (
    <Container>
      <div>
        <Logo>
          <Img src={MeuBichinho} alt="Meu bichinho" />
          <Title>Meu Bichinho</Title>
        </Logo>
        <Content>
          <Description>
            O site para você encontrar seu companheirinho
          </Description>
        </Content>
        <JoinButton href="/map">
          Quero adotar um bichinho<FiArrowRightCircle />
        </JoinButton>
      </div>

      <ButtonContainer>
        <Button href="/login">
          Sou uma ONG
          <FiLogIn />
        </Button>
      </ButtonContainer>
      <Dev href="/about">Saiba mais sobre os desenvolvedores</Dev>
    </Container>
  );
}
