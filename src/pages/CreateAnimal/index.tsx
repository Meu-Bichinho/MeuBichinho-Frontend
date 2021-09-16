import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import api from "../../services/api";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { toast, Toaster } from 'react-hot-toast';
import AsyncSelect from "react-select/async";
import { FiPlus } from "react-icons/fi";
import Switch from "react-switch";

import { Sidebar } from "../../components/Sidebar";
import  Input  from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import dogMapIcon from "../../utils/dogMapIcon";
import catMapIcon from "../../utils/catMapIcon";
import mapIcon from "../../utils/mapIcon";
import { fetchLocalMapBox } from "../../apiMapBox";

import { 
  AdressMap, 
  Container, 
  Content, 
  ContentResponsive, 
  Description, 
  Form, 
  ImagesContainer, 
  InputImage, 
  Span, 
  Title } from "./styles";

type Position = {
  longitude: number;
  latitude: number;
};

const initialPosition = { lat: -27.1024667, lng: -52.6342728 };

export function CreateAnimal() {
  const [position, setPosition] = useState<Position | null>(null);
  const [count, setCount] = useState(1);
  const [isCat, setIsCat] = useState(false);
  const [isDog, setIsDog] = useState(true);
  const [isDeficient, setIsDeficient] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState(initialPosition);
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);

  var localID = localStorage.getItem('@meuBichinhoId');
  const token = localStorage.getItem('@meuBichinhoToken');

  function handleCheck() {
    if (isDeficient === true) {
      setIsDeficient(false);
    }
    if (isDeficient === false) {
      setIsDeficient(true);
    }
  }

  function handleAnimal() {
    if (isCat === true) {
      setIsCat(false);
      setIsDog(true);
    }
    if (isCat === false) {
      setIsCat(true);
      setIsDog(false);
    }
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  // function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
  //   if (!event.target.files){
  //     return;
  //   }
  //   const selectedImages = Array.from(event.target.files);
  //   setImages(selectedImages);
  //   const selectedImagesPreview = selectedImages.map(image => {
  //     return URL.createObjectURL(image);
  //   });
  //   setPreviewImages(selectedImagesPreview);
  // }

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files){
      return;
    }
    const selectedImages = Array.from(event.target.files)
    setImages([...images, ...selectedImages]);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages([...previewImages, ...selectedImagesPreview]);
    setCount(count+1)

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

  console.log(images)

  async function handleSubmit(event: FormEvent){
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
      name,
      longitude: location.lng,
      latitude: location.lat,
      age,
      isDeficient: deficiencies,
      isCat: cat,
      isDog: dog,
      telephone: phone,
      about,
      ngo_id: localID,
      images
    }

    // const data = new FormData();

    // data.append('name', name);
    // data.append('longitude', String(location.lng));
    // data.append('latitude', String(location.lat));
    // data.append('age', String(age));
    // data.append('isDeficient', String(deficiencies));
    // data.append('isCat', String(isCat));
    // data.append('isDog', String(isDog));
    // data.append('telephone', phone);
    // data.append('about', about);
    // data.append('ngo_id', String(localID));

    // images.forEach(image => {
    //   data.append('images', image)
    // })

    // images.forEach(image => {
    //   console.log(image)
    // })


    console.log(data);
    try {
      await api.post('/animal',  data , { headers: { authorization: token } }).then((response) =>
      {
        toast.loading('Salvando');
        setTimeout(() => {
          toast.success('Informações atualizadas');
        }, 1000);
        setTimeout(() => {
          window.location.replace('/manager');
        }, 2000);
      })
    } catch (err) {
        toast.error('Animal já cadastrado!')
        console.log(err)
    }
  }

  return (
    <Container>
      <Sidebar />
      <Form onSubmit={handleSubmit}>
        <Title>Registre um bichinho</Title>
        <Input label="Nome do bichinho" required type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <Input label="Idade" type="number" required value={age} onChange={(e) => setAge(e.target.value)}/>
        <Content>
          <Span>Possui alguma necessidade especial?</Span>
          <Description>
            <label>Não</label>
            <label>Sim</label>
          </Description>
          <Switch
            onChange={handleCheck}
            checked={isDeficient}
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
        <ContentResponsive>
          <Span>Possui alguma necessidade especial?</Span>
          <Description>
            <label>Não</label>
            <label>Sim</label>
          </Description>
          <Switch
            onChange={handleCheck}
            checked={isDeficient}
            checkedIcon={false}
            uncheckedIcon={false}
            width={220}
            height={24}
            offColor="#fe6363"
            onColor="#07d174"
          />
        </ContentResponsive>
        <ContentResponsive>
          <Description>
            <label>Cachorro</label>
            <label>Gato</label>
          </Description>
          <Switch
            onChange={handleAnimal}
            checked={isCat}
            checkedIcon={false}
            uncheckedIcon={false}
            width={220}
            height={24}
            onColor="#FFB930"
            offColor="#F44A87"
          />
        </ContentResponsive>
        <Span>Digite o endereço:</Span>
        <AdressMap>
          <AsyncSelect
            placeholder="Nome da rua, cidade e estado"
            classNamePrefix="filter"
            cacheOptions
            loadOptions={loadOptions}
            onChange={handleChangeSelect}
            value={address}
          />
        </AdressMap>
        <MapContainer
          center={location}
          style={{ width: "100%", height: 280 }}
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
          {previewImages.map(image => {
            return (
              <img key={image} src={image} alt='Fotos'/>
            )
          })}
          {count <= 5 && 
             <label htmlFor="image[]">
             <FiPlus size={24} color="#15b6d6" />
           </label>   
          } 
        </ImagesContainer>
          <InputImage multiple onChange={handleSelectImages} type="file" id="image[]" />
                 
        <TextArea label="Sobre o bichinho - máximo de 300 caracteres" required value={about} onChange={(e) => setAbout(e.target.value)}/>
        <Input
          label="Telefone para contato"
          type="text"
          placeholder="(00) 00000-0000"
          required
          value={phone} onChange={(e) => setPhone(e.target.value)}
        />
        <Button text="Registrar" type="submit"/>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </Container>
  );
}
