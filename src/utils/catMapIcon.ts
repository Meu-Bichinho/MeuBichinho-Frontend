import Leaflet from 'leaflet';
import mapMarkerImg from '../assets/catto.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [42, 42],
  popupAnchor: [0, -60],
});

export default mapIcon;
