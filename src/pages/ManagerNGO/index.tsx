import { FormEvent, useContext, useEffect, useState } from 'react';
import api from '../../services/api';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import { toast, Toaster } from 'react-hot-toast';
import AsyncSelect from "react-select/async";

import { Sidebar } from '../../components/Sidebar';
import Input from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import mapIcon from '../../utils/mapIcon';
import { fetchLocalMapBox } from '../../apiMapBox';

import {
  AdressMap,
  AlterButtons,
  Cancel,
  Container,
  Form,
  ImagesContainer,
  Modal,
  RemoveButton,
  Span,
  Title,
  Update,
} from './styles';
import { AuthContext } from '../../contexts/authContext';

type Position = {
  longitude: number;
  latitude: number;
};

export function ManagerNGO() {
  const [position, setPosition] = useState<Position | null>(null);
  const [remove, setRemove] = useState(false);
  const [ongData, setOngData] = useState<any>({});
  const [name, setName] = useState<string | null>('');
  const [email, setEmail] = useState('');
  const [managerName, setManagerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [about, setAbout] = useState('');
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState({});
  const [positionInicial, setPositionInicial] = useState<Position>();
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const token = localStorage.getItem('@meuBichinhoToken');
  const localNgoId = localStorage.getItem('@meuBichinhoId');

  

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });

    console.log(position);
  }

  function handleRemove() {
    setRemove(true);
  }

  async function deleteNGO(){
    await api.delete(`/ngo/${localNgoId}`, { headers: { authorization: token } }).then(() => {
      toast.loading('Excluindo');
        setTimeout(() => {
          toast.success('Informações excluídas');
        }, 1000);
        setTimeout(() => {
          window.location.replace('/');
        }, 2000);
    })

    localStorage.clear();

    window.location.replace('/');
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      responsible: managerName,
      telephone,
      about,
      password,
      ngo_id: localNgoId,
      images: [],
    };

    await api
      .put('/ngo', data, { headers: { authorization: token } })
      .then(() => {
        toast.loading('Salvando');
        setTimeout(() => {
          toast.success('Informações atualizadas');
        }, 1000);
        setTimeout(() => {
          window.location.replace('/manager');
        }, 2000);
      })
      .catch((err) => {
        toast.error('Algo deu errado');
      });
  }

  const loadOptions = async (inputValue: any, callback: any) => {
    if (inputValue.length < 5) return;
    let places: any = [];
    const response = await fetchLocalMapBox(inputValue);
    response.features.map((item: any) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    return callback(places);
  };

  const handleChangeSelect = (event: any) => {
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    });

    setAddress({ label: event.place, value: event.place });

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    });
  };

  useEffect(() => {
    api
      .get(`/ngo/${localStorage.getItem('@meuBichinhoId')}`)
      .then((response) => {
        setOngData(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setManagerName(response.data.responsible);
        setTelephone(response.data.telephone);
        setAbout(response.data.about);
        setPosition({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
        });
        setPreviewImages(response.data.images)
      });
  }, []);

  return (
    <>
    <Sidebar />
    <Container>
      <Form>
        {remove === true && (
          <Modal>
            <Title>Tem certeza que deseja excluir {name}?</Title>
            <Span>
              Ao clicar em sim todas as informações serão perdidas e essa ação
              não poderá ser desfeita.
            </Span>
            <AlterButtons>
              <button onClick={() => setRemove(false)}>
                Não <ImCancelCircle />
              </button>
              <button onClick={deleteNGO}>
                Sim <GiConfirmed />
              </button>
            </AlterButtons>
          </Modal>
        )}
        <Title>Edite sua ONG</Title>
        <Input
          label="Nome da ONG"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          label="Email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Nome do responsável"
          type="text"
          value={managerName}
          onChange={(event) => setManagerName(event.target.value)}
        />
        <Span>Digite a localização completa:</Span>
        <AdressMap>
          <AsyncSelect
            placeholder="Digite seu endereço..."
            classNamePrefix="filter"
            cacheOptions
            loadOptions={loadOptions}
            onChange={handleChangeSelect}
            value={address}
          />
        </AdressMap>
        <MapContainer
          center={[-27.1024667, -52.6342728]}
          style={{
            width: '100%',
            height: 280,
            borderRadius: 20,
            marginBottom: 24,
          }}
          zoom={12.5}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {position && (
            <Marker
              interactive={false}
              icon={mapIcon}
              position={[position.latitude, position.longitude]}
            />
          )}
        </MapContainer>
        <Input
          label="Telefone"
          type="text"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <TextArea
          label="Sobre a ONG - máximo de 300 caracteres"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        />
        <Span>Fotos</Span>
        <ImagesContainer>
          {previewImages.map((image:any) => {
            return <img key={image} src={`http://localhost:3333/uploads/${image.path}`} alt="Fotos fofinhas" />;
          })}
        </ImagesContainer>
        <Input
          label="Alterar senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <RemoveButton onClick={handleRemove}>Excluir ONG</RemoveButton>
        <AlterButtons>
          <Cancel onClick={() => window.location.replace('/manager')}>
            Cancelar
          </Cancel>
          <Update onClick={handleSubmit}>Atualizar</Update>
        </AlterButtons>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </Container>
    </>
  );
}
