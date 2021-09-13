import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import api from '../services/api';

import mapIcon from '../utils/mapIcon';

interface INgoProps {
  ngo_id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export function GetNgoData() {
  const [ngoData, setNgoData] = useState<INgoProps[]>([])
  useEffect(() => {
    api.get('/ngo').then((response) => {
      const data = response.data;
      setNgoData(data)
    })
  },[])

  console.log(ngoData);

  return (
    <div>
      {ngoData.map((ngo: INgoProps) => {
        return (
          <Marker
            key={ngo.ngo_id}
            icon={mapIcon}
            position={[ngo.latitude, ngo.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {ngo.name}
              <Link to={`/ong/${ngo.ngo_id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
