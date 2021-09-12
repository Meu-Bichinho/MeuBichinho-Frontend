import { FormEvent, useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import Input from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import {
  AlterButtons,
  Cancel,
  Container,
  Form,
  Modal,
  RemoveButton,
  Span,
  Title,
  Update,
} from './styles';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import mapIcon from '../../utils/mapIcon';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import api from '../../services/api';
import { toast, Toaster } from 'react-hot-toast';

export function ManagerNGO() {
  const [position, setPosition] = useState({
    latitude: -27.1024667,
    longitude: -52.6342728,
  });
  const [remove, setRemove] = useState(false);
  const [ongData, setOngData] = useState<any>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [managerName, setManagerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      .put('/ngo', { data }, { headers: { authorization: token } })
      .then(() => {
        toast.loading('Salvando');
        toast.success('Informações atualizadas');
      })
      .catch((err) => {
        toast.error('Algo deu errado');
      });
  }

  console.log(localNgoId);

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
      });
  }, []);

  console.log(ongData);
  console.log(name);

  return (
    <Container>
      <Sidebar />
      <Form>
        {remove === true && (
          <Modal>
            <Title>Tem certeza que deseja excluir ONG de Okahona?</Title>
            <Span>
              Ao clicar em sim todas as informações serão perdidas e essa ação
              não poderá ser desfeita.
            </Span>
            <AlterButtons>
              <button onClick={() => setRemove(false)}>
                Não <ImCancelCircle />
              </button>
              <button>
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
        <Span>Selecione a localização no mapa:</Span>
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
          {position.latitude !== 0 && (
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
  );
}
