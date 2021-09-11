import React, { ChangeEvent, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Sidebar } from "../../components/Sidebar";
import  Input  from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import Switch from "react-switch";
import { Container, Content, Description, Form, ImagesContainer, InputImage, Span, Title } from "./styles";
import { LeafletMouseEvent } from "leaflet";
import mapIcon from "../../utils/mapIcon";
import { FiPlus } from "react-icons/fi";
import { ContainerInput, InputComponent, LabelInput } from "../../components/Input/styles";

export function CreateAnimal() {
  const [checked, setChecked] = useState(true);
  const [count, setCount] = useState(1);
  const [isCat, setIsCat] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [images, setImages] = useState<File[]>([]);

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

  const handleAge = (event: any) =>{
    setAge(event)
    console.log('passei')
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

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

  useEffect(() => {
    console.log('mudei')
  }, [name])

  console.log(name)
    


  return (
    <Container>
      <Sidebar />
      <Form>
        <Title>Registre um bichinho</Title>
        <Input label="Nome do bichinho" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <Input label="Idade" type="number" value={age} onChange={(e) => handleAge(e.target.value)}/>
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
        <Span>Insira algumas fotos fofinhas!</Span>
        <ImagesContainer>
          {previewImages.map(image => {
            return (
              <img key={image} src={image} />
            )
          })}
          {count <= 5 && 
             <label htmlFor="image[]">
             <FiPlus size={24} color="#15b6d6" />
           </label>   
          } 
        </ImagesContainer>
          <InputImage multiple onChange={handleSelectImages} type="file" id="image[]" />
                 
        <TextArea label="Sobre o bichinho - máximo de 300 caracteres" />
        <Input
          label="Telefone para contato"
          type="text"
          placeholder="(00) 00000-0000"
        />
        <Button text="Registrar" />
      </Form>
    </Container>
  );
}
