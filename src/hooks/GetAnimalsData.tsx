import { useEffect, useState } from 'react';
import api from '../services/api';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import catMapIcon from '../utils/catMapIcon';
import dogMapIcon from '../utils/dogMapIcon';

interface IAnimalProps {
  animal_id: number;
  latitude: number;
  longitude: number;
  name: string;
  isDog: number;
}

export function GetAnimalData() {
  const [animalsData, setAnimalsData] = useState<IAnimalProps[]>([]);

  useEffect(() => {
    api.get('/animal').then((response) => {
      const data = response.data;
      setAnimalsData(data)
    })
  },[])

  console.log(animalsData);

  return (
    <div>
      {animalsData.map((animals: IAnimalProps) => {
        return (
          <Marker
            key={animals.animal_id}
            icon={animals.isDog === 1 ? dogMapIcon : catMapIcon}
            position={[animals.latitude, animals.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {animals.name}
              <Link to={`/bichinho/${animals.animal_id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
