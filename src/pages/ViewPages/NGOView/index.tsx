import { useContext, useEffect, useState } from 'react';
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
import { AuthContext } from '../../../contexts/authContext';

interface INgoProps {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  images: Array<{
    id: number;
    path: string;
  }>;
  telephone: string;
  email: string;
  responsible: string;
}

interface INgoParams {
  id: string;
}

export function NGO() {
  const { user } = useContext(AuthContext)
  const { id } = useParams<INgoParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [images, setImages] = useState(0);

  const [ngo, setNgo] = useState<INgoProps>(Object);

  useEffect(() => {
    api.get(`/ngo/${id}`).then((response) => {
      setNgo(response.data);
      setImages(1)
    });
  }, [id]);

  if (!ngo){
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Sidebar />
    <Container>
      <Main>
        <Details>
        {images===1 && <img src={`https://meubichinho-backend.herokuapp.com/uploads/${ngo.images[activeImageIndex].path}`} alt={ngo.name} />}
        
        <Images>
          {ngo.images?.map((image, index): any => {
            return (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
              >
                <img
                  src={`https://meubichinho-backend.herokuapp.com/uploads/${image.path}`}
                  alt={ngo.name}
                />
              </button>
            );
          })}
        </Images>

          <DetailsContent>
            <h1>{user?.ngo_name}</h1>
            <p>{user?.about}</p>

            <p>Responsavél pela ONG: {user?.responsable}</p>

            <MapContainerDiv>
              {user?.latitude && user?.longitude && (
                <MapContainer
                  center={[user?.latitude, user?.longitude]}
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
                    position={[user?.latitude, user?.longitude]}
                  />
                </MapContainer>
              )}
              <Footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${user?.latitude},${user?.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </Footer>
            </MapContainerDiv>

              {user?.email &&
            <CopyToClipboard
              text={user?.email}
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
            }
            {user?.telephone &&
            <PhoneButton
              href={`https://api.whatsapp.com/send?phone=55${ngo.telephone}&text=Olá`}
              target="_blank"
            >
              <RiWhatsappLine size={30} />
              Entrar em contato por Whatsapp
            </PhoneButton>
            }
          </DetailsContent>
        </Details>
      </Main>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
    </>
  );
}
