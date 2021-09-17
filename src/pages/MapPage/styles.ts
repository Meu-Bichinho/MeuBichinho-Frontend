import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;

  position: relative;
  display: flex;

  @media (max-width: 768px) {
    > div {
      width: 100% !important;
    }

    flex-direction: column;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: #fff;
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #00A1FF;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #FFB930;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
