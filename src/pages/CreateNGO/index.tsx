import React, { ChangeEvent, FormEvent, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import {
  AdressMap,
  Container,
  Form,
  ImagesContainer,
  InputImage,
  Span,
  Title,
} from "./styles";
import { LeafletMouseEvent } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import mapIcon from "../../utils/mapIcon";
import { fetchLocalMapBox } from "../../apiMapBox";
import AsyncSelect from "react-select/async";
import toast, { Toaster } from "react-hot-toast";
import { convertCompilerOptionsFromJson } from "typescript";
import api from "../../services/api";
import { FiPlus } from "react-icons/fi";

type Position = {
  longitude: number;
  latitude: number;
};

const initialPosition = { lat: -27.1024667, lng: -52.6342728 };

export function CreateNGO() {
  const [position, setPosition] = useState<Position | null>(null);
  const [ngo, setNgo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState(initialPosition);
  const [count, setCount] = useState(1);
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);

  console.log(images);

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
    setCount(count + 1);
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (password.length < 6) {
      return toast.error("A senha precisa ter no mínimo 6 caracteres!");
    } else if (password !== confirmPassword) {
      return toast.error("As senhas precisam ser iguais!");
    }

    // const data = new FormData();
    // data.append("name", ngo);
    // data.append("email", email);
    // data.append("password", password);
    // data.append("responsible", name);
    // data.append("telephone", phone);
    // data.append("about", about);
    // data.append("longitude", String(location.lng));
    // data.append("latitude", String(location.lat));

    // images.forEach((image) => {
    //   data.append("images", image);
    //   console.log(images);
    // });

    // var data = new FormData()
    const data = {
      name: ngo,
      email,
      password,
      responsible: name,
      telephone: phone,
      about,
      longitude: location.lng,
      latitude: location.lat,

      // images : images.forEach((image: any) => {
      //   image
      // })
    }

    console.log(data);

    await api.post("/ngo", data).then((response) => console.log(response.data));
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

  return (
    <Container>
      <Sidebar />
      <Form method="post" onSubmit={handleSubmit}>
        <Title>Registre sua ONG</Title>
        <Input
          label="Nome da ONG"
          type="text"
          required
          value={ngo}
          onChange={(event) => setNgo(event.target.value)}
        />
        <Input
          label="Email"
          type="text"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Escolha uma senha"
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          label="Confirme sua senha"
          required
          type="password"
          value={confirmPassword}
          onChange={(event) => setconfirmPassword(event.target.value)}
        />
        <Input
          label="Nome do responsável"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          label="Telefone"
          type="text"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextArea
          label="Sobre a ONG - máximo de 300 caracteres"
          required
          value={about}
          onChange={(event) => setAbout(event.target.value)}
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
          center={location}
          style={{ width: "100%", height: 280 }}
          zoom={12.5}
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
        <Span>Insira algumas fotos da ONG!</Span>
        <ImagesContainer>
          {previewImages.map((image) => {
            return <img key={image} src={image} alt="Fotos" />;
          })}
          {count <= 5 && (
            <label htmlFor="image[]">
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
        <Button text="Registrar" />
      </Form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}
