import { ChangeEvent, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Sidebar } from '../../components/Sidebar';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import Switch from 'react-switch';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import {
  AdotadoButton,
  AlterButtons,
  CancelButton,
  ConfirmButton,
  Container,
  Content,
  Description,
  Form,
  ImagesContainer,
  InputImage,
  Modal,
  RemoveButton,
  Span,
  Title,
} from './styles';
import { LeafletMouseEvent } from 'leaflet';
import mapIcon from '../../utils/mapIcon';
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api';

export function ManagerAnimal() {
  const [checked, setChecked] = useState(true);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  let count: number = 1;
  var path = window.location.href;
  const animalId = path.substring(path.lastIndexOf('?') + 1);

  const [animalName, setAnimalName] = useState('')
  const [animalAge, setAnimalAge] = useState(0)
  const [isDog, setIsDog] = useState(0)
  const [isDeficient, setIsDeficient] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    api.get(`/animal/${animalId}`).then((response) => {
      const animalData = response.data;
      setAnimalName(animalData.name);

    });
  }, []);


  console.log(animalName);

  function handleCheck() {
    if (checked === true) {
      setChecked(false);
    }
    if (checked === false) {
      setChecked(true);
    }
  }

  function handleAnimal() {
    if (isCat === true) {
      setIsCat(false);
    }
    if (isCat === false) {
      setIsCat(true);
    }
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleRemove() {
    setRemove(true);
  }

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    setImages([...images, ...selectedImages]);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages([...previewImages, ...selectedImagesPreview]);
    count++;
  };

  return (
    <Container>
      <Sidebar />
      <Form>
        {remove === true && (
          <Modal>
            <Title>Tem certeza que deseja excluir Doge Armadurado?</Title>
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
        <Title>Editar bichinho</Title>
        <Input
          label="Nome do bichinho"
          type="text"
          value={animalName}
          onChange={(event) => setAnimalName(event.target.value)}
        />
        <Input label="Idade" type="number" />
        <Content>
          <Span>Possui alguma necessidade especial?</Span>
          <Description>
            <label>Sim</label>
            <label>Não</label>
          </Description>
          <Switch
            onChange={handleCheck}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            width={540}
            height={24}
            onColor="#fe6363"
            offColor="#07d174"
          />
        </Content>
        <Content>
          <Description>
            <label>Cachorro</label>
            <label>Gato</label>
          </Description>
          <Switch
            onChange={handleAnimal}
            checked={isCat}
            checkedIcon={false}
            uncheckedIcon={false}
            width={540}
            height={24}
            onColor="#FFB930"
            offColor="#F44A87"
          />
        </Content>
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
        <Span>Insira algumas fotos fofinhas!</Span>
        <ImagesContainer>
          {previewImages.map((image) => {
            return <img key={image} src={image} alt="Fotos fofinhas" />;
          })}
          {count <= 5 && (
            <label htmlFor="image[]" className="new-image">
              <FiPlus size={24} color="#15b6d6" />
            </label>
          )}
        </ImagesContainer>

        <InputImage
          multiple
          onChange={handleSelectImages}
          type="file"
          id="image[]"
        />

        <TextArea label="Sobre o bichinho - máximo de 300 caracteres" />
        <Input
          label="Telefone para contato"
          type="text"
          placeholder="(00) 00000-0000"
        />
        <AlterButtons>
          <RemoveButton onClick={handleRemove}>Excluir</RemoveButton>
          <AdotadoButton>Marcar como adotado</AdotadoButton>
        </AlterButtons>
        <AlterButtons>
          <CancelButton onClick={() => window.location.replace('/animalsList')}>
            Cancelar
          </CancelButton>
          <ConfirmButton>Atualizar</ConfirmButton>
        </AlterButtons>
      </Form>
    </Container>
  );
}
