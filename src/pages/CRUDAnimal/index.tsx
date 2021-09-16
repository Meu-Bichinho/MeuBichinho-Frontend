import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Sidebar } from '../../components/Sidebar';
import { AnimalCard } from '../../components/AnimalCard';
import Dog from '../../assets/doggo.svg';
import Cat from '../../assets/catto.svg';
import { 
  Button, 
  Container, 
  Main, 
  Title } from './styles';

export function CRUDAnimal() {
  const localNgoId = localStorage.getItem('@meuBichinhoId');
  const [bichinhos, setBichinhos] = useState([]);

  useEffect(() => {
    api.get(`/animal/byNgo/${localNgoId}`).then((response) => {
      setBichinhos(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <Main>
          <Title>Gerenciamento de animais</Title>
          <Button href="/create/animal">Cadastrar</Button>
          {bichinhos.map((animal: any) => {
            return (
              <AnimalCard
                image={
                  animal.images[0]
                    ? `https://meubichinho-backend.herokuapp.com/uploads/${animal.images[0].path}`
                    : animal.isCat === 1
                    ? Cat
                    : Dog
                }
                name={animal.name}
                id={animal.animal_id}
                key={animal.animal_id}
              />
            );
          })}
        </Main>
      </Container>
    </>
  );
}
