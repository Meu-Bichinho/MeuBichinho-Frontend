import React, { FormEvent, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import  Input  from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { Container, Form, Span, Title } from './styles';
import { LeafletMouseEvent } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import mapIcon from '../../utils/mapIcon';

export function CreateNGO() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [ngo, setNgo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <Container>
      <Sidebar />
      <Form method="post" onSubmit={handleSubmit}>
        <Title>Registre sua ONG</Title>
        <Input label="Nome da ONG" type="text" value={ngo} onChange={(event) => setNgo(event.target.value)}/>
        <Input label="Email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <Input label="Escolha uma senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Input label="Confirme sua senha" type="password" value={confirmPassword} onChange={(event) => setconfirmPassword(event.target.value)}/>
        <Input label="Nome do responsável" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <Input label="Telefone" type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/>
        <TextArea label="Sobre a ONG - máximo de 300 caracteres" value={about} onChange={(event) => setAbout(event.target.value)} />
        <Span>Selecione a localização no mapa:</Span>
        <MapContainer
          center={[-27.1024667, -52.6342728]}
          style={{ width: '100%', height: 280 }}
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

        <Button text="Registrar" />
      </Form>
    </Container>
  );
}
