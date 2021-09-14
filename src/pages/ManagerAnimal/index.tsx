import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Sidebar } from '../../components/Sidebar';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import Switch from 'react-switch';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import AsyncSelect from "react-select/async";
import dogMapIcon from "../../utils/dogMapIcon";
import catMapIcon from "../../utils/catMapIcon";
import {
  AdotadoButton,
  AdressMap,
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
import { fetchLocalMapBox } from '../../apiMapBox';
import { toast, Toaster } from 'react-hot-toast';

type Position = {
  longitude: number;
  latitude: number;
};

export function ManagerAnimal() {
  const [checked, setChecked] = useState(true);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState({});

  const [animalName, setAnimalName] = useState('');
  const [animalAge, setAnimalAge] = useState(0);
  const [isCat, setIsCat] = useState(false);
  const [isDog, setIsDog] = useState(false);
  const [isDeficient, setIsDeficient] = useState(false);
  const [about, setAbout] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [telephone, setTelephone] = useState(0);
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);


  let count: number = 1;
  var path = window.location.href;
  const token = localStorage.getItem('@meuBichinhoToken');
  const animalId = path.substring(path.lastIndexOf('?') + 1);
  var localID = localStorage.getItem('@meuBichinhoId');

  useEffect(() => {
    api.get(`/animal/${animalId}`).then((response) => {
      const animalData = response.data;
      console.log(animalData)
      setAbout(animalData.about);
      setIsCat(animalData.isCat);
      setIsDog(animalData.isDog);
      setAnimalName(animalData.name);
      setAnimalAge(animalData.age);
      setIsDeficient(animalData.isDeficient);
      setTelephone(animalData.telephone);
      setPosition({
        latitude: animalData.latitude,
        longitude: animalData.longitude,
      });

    });
  }, []);


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

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    var deficiencies;
    var dog;
    var cat;

    if (isDeficient===true) {
      deficiencies = 1
    } else deficiencies = 0;

    if (isDog===true) {
      dog = 1
    } else dog = 0;

    if (isCat===true) {
      cat = 1
    } else cat = 0;

    const data = {
      name: animalName,
      age: animalAge,
      isDeficient: deficiencies,
      isCat: cat,
      isDog: dog,
      telephone,
      about,
      ngo_id: localID,
      animal_id: animalId,
    };

    await api
      .put(`/animal`, data, { headers: { authorization: token } })
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

  async function deleteAnimal(){
    await api.delete(`/animal/${animalId}`, { headers: { authorization: token } }).then(() => {
      toast.loading('Excluindo');
        setTimeout(() => {
          toast.success('Informações excluídas');
        }, 1000);
        setTimeout(() => {
          window.location.replace('/animalsList');
        }, 2000);
    })
  }

  async function handleAdopted(){
    await api.delete(`/animal/${animalId}`, { headers: { authorization: token } }).then(() => {
      toast.loading('Salvando');
        setTimeout(() => {
          toast.success('Marcado como adotado!');
        }, 1000);
        setTimeout(() => {
          window.location.replace('/animalsList');
        }, 2000);
    })
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

  return (
    <>
    <Sidebar />
    <Container>
      <Form>
        {remove === true && (
          <Modal>
            <Title>Tem certeza que deseja excluir {animalName}?</Title>
            <Span>
              Ao clicar em sim todas as informações serão perdidas e essa ação
              não poderá ser desfeita.
            </Span>
            <AlterButtons>
              <button onClick={() => setRemove(false)}>
                Não <ImCancelCircle />
              </button>
              <button onClick={deleteAnimal}>
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
        <Input label="Idade" type="number" value={animalAge} onChange={(event) => setAnimalAge(event.target.value)}/>
        <Content>
          <Span>Possui alguma necessidade especial?</Span>
          <Description>
            <label>Não</label>
            <label>Sim</label>
          </Description>
          <Switch
            onChange={handleCheck}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            width={540}
            height={24}
            offColor="#fe6363"
            onColor="#07d174"
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
          style={{ width: '100%', height: 280 }}
          zoom={12.5}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {position && (
             isDog ? 
             <Marker
               interactive={false}
               icon={dogMapIcon}
               position={[position.latitude, position.longitude]}
             /> : 
             <Marker
               interactive={false}
               icon={catMapIcon}
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

        <TextArea label="Sobre o bichinho - máximo de 300 caracteres" value={about} onChange={(e) => setAbout(e.target.value)}/>
        <Input
          label="Telefone para contato"
          type="text"
          placeholder="(00) 00000-0000"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <AlterButtons>
          <RemoveButton onClick={handleRemove}>Excluir</RemoveButton>
          <AdotadoButton onClick={handleAdopted}>Marcar como adotado</AdotadoButton>
        </AlterButtons>
        <AlterButtons>
          <CancelButton onClick={() => window.location.replace('/animalsList')}>
            Cancelar
          </CancelButton>
          <ConfirmButton onClick={handleSubmit}>Atualizar</ConfirmButton>
        </AlterButtons>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </Container>
    </>
  );
}
