import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { RiWhatsappLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';


import Logo from '../../../assets/logo.svg';
import { Sidebar } from '../../../components/Sidebar';
import mapIcon from '../../../utils/mapIcon';
import api from '../../../services/api';

import {
  Container,
  Description,
  Details,
  DetailsContent,
  Footer,
  Images,
  MailButton,
  Main,
  MapContainerDiv,
  PhoneButton,
} from '../style/styles';

interface INgoProps {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  images: Array<{
    id: number;
    url: string;
  }>;
  telephone: string;
  email: string;
  responsible: string;
}

interface INgoParams {
  id: string;
}

export function NGO() {
  const { id } = useParams<INgoParams>();

  const [ngo, setNgo] = useState<INgoProps>(Object);

  useEffect(() => {
    api.get(`/ngo/${id}`).then((response) => {
      setNgo(response.data);
    });
  }, []);

  console.log(ngo);

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
            <h1>{ngo.name}</h1>
            <p>{ngo.about}</p>

            <p>Responsavél pela ONG: {ngo.responsible}</p>

            <MapContainerDiv>
              {ngo.latitude ? (
                <MapContainer
                  center={[ngo.latitude, ngo.longitude]}
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
                    icon={mapIcon}
                    position={[ngo.latitude, ngo.longitude]}
                  />
                </MapContainer>
              ) : (
                'a'
              )}
              <Footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${ngo.latitude},${ngo.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </Footer>
            </MapContainerDiv>

            <CopyToClipboard
              text={ngo.email}
              onCopy={() =>
                toast('Email copiado', {
                  icon: '📧',
                })
              }
            >
              <MailButton>
                <HiOutlineMail size={30} /> Entrar em contato por e-mail
              </MailButton>
            </CopyToClipboard>

            <PhoneButton
              href={`https://api.whatsapp.com/send?phone=55${ngo.telephone}&text=Olá`}
              target="_blank"
            >
              <RiWhatsappLine size={30} />
              Entrar em contato por Whatsapp
            </PhoneButton>
          </DetailsContent>
        </Details>
      </Main>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}
