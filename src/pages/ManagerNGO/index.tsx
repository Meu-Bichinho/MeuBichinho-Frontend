import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import  Input  from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { AlterButtons, Container, Form, Modal, RemoveButton, Span, Title, Update } from './styles';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import mapIcon from '../../utils/mapIcon';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';

export function ManagerNGO() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [remove, setRemove] = useState(false);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleRemove(){
    setRemove(true)
  }

  
  return (
    <Container>
      <Sidebar />
      <Form>
        {remove==true &&  
              <Modal>
              <Title>Tem certeza que deseja excluir ONG de Okahona?</Title>
              <Span>Ao clicar em sim todas as informações serão perdidas e essa ação não poderá ser desfeita.</Span>
              <AlterButtons>
              <button onClick={() => setRemove(false)}>Não <ImCancelCircle /></button>
              <button>Sim <GiConfirmed /></button>
              </AlterButtons>
            </Modal>
          }
        <Title>Edite sua ONG</Title>
        <Input label="Nome da ONG" type="text" />
        <Input label="Email" type="text" />
        <Input label="Escolha uma senha" type="password" />
        <Input label="Confirme sua senha" type="password" />
        <Input label="Nome do responsável" type="text" />
        <Span>Selecione a localização no mapa:</Span>
        <MapContainer
          center={[-27.1024667, -52.6342728]}
          style={{ width: "100%", height: 280 }}
          zoom={12.5}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {position.latitude !== 0 && (
            <Marker
              interactive={false}
              icon={mapIcon}
              position={[position.latitude, position.longitude]}
            />
          )}
        </MapContainer>
        <Input label="Telefone" type="text" />
        <TextArea label="Sobre a ONG - máximo de 300 caracteres" />

        <AlterButtons>
        <RemoveButton onClick={handleRemove}>Excluir</RemoveButton>
        <Update>Atualizar</Update>
        </AlterButtons>
      </Form>
    </Container>
  );
}
