import { useEffect, useState } from 'react';
import api from '../../../services/api';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import Switch from 'react-switch';
import { RiWhatsappLine } from 'react-icons/ri';

import { Sidebar } from '../../../components/Sidebar';
import Logo from '../../../assets/logo.svg';
import dogMapIcon from '../../../utils/dogMapIcon';
import catMapIcon from '../../../utils/catMapIcon';

import {
  Container,
  Description,
  Details,
  DetailsContent,
  Footer,
  Images,
  Main,
  MapContainerDiv,
  PhoneButton,
} from '../style/styles';

interface IAnimalProps {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  images: Array<{
    id: number;
    path: string;
  }>;
  isCat: number;
  telephone: string;
}

interface IAnimalParams {
  id: string;
}

export function Bichinho() {
  const { id } = useParams<IAnimalParams>();
  const [isDeficient, setIsDeficient] = useState(false)

  const [bichinho, setBichinho] = useState<IAnimalProps>(Object);

  useEffect(() => {
    api.get(`/animal/${id}`).then((response) => {
      setBichinho(response.data);
      if (response.data.isDeficient === 1){
        setIsDeficient(true)
      }
    });
  }, []);

  function handleCheck(){}

  return (
    <Container>
      <Sidebar />
      <Main>
        <Details>
          <img src={Logo} alt="Teste" />
          <Images>
            <img src={Logo} alt="Teste" />
          </Images>

          <DetailsContent>
            <h1>{bichinho.name}</h1>
            <p>{bichinho.about}</p>

            <MapContainerDiv>
              {bichinho.latitude ? (
                <MapContainer
                  center={[bichinho.latitude, bichinho.longitude]}
                  zoom={14}
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                  <Marker
                    interactive={false}
                    icon={bichinho.isCat === 1 ? catMapIcon : dogMapIcon}
                    position={[bichinho.latitude, bichinho.longitude]}
                  />
                </MapContainer>
              ) : (
                'a'
              )}

              <Footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${bichinho.latitude},${bichinho.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </Footer>
            </MapContainerDiv>

            <p>Possui alguma necessidade especial?</p>
            <Description>
              <label>Não</label>
              <label>Sim</label>
            </Description>
            <Switch
              disabled
              onChange={handleCheck}
              checked={isDeficient}
              checkedIcon={false}
              uncheckedIcon={false}
              width={540}
              height={24}
              offColor="#fe6363"
              onColor="#07d174"
            />
            <PhoneButton
              href={`https://api.whatsapp.com/send?phone=55${bichinho.telephone}&text=Olá`}
              target="_blank"
            >
              <RiWhatsappLine size={30} />
              Entrar em contato
            </PhoneButton>
          </DetailsContent>
        </Details>
      </Main>
    </Container>
  );
}
