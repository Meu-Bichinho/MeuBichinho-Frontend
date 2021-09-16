import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background: linear-gradient(155.85deg, #f44a87 45.83%, #ffb930 100%);
  height: 100%;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
  text-align: flex-start;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .leaflet-container {
    z-index: 0;
  }

  @media(max-width:420px){
    width: 100%;
    overflow: visible;
    border-radius: 0px;
    padding: 64px 40px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  .react-switch-handle {
    height: 400px;
  }

  @media(max-width:420px){
    display: none;
  }
`;

export const ContentResponsive = styled.div`
  display: none;

  @media(max-width:420px){
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  
    .react-switch-handle {
      height: 400px;
    }
  }

`;

export const Span = styled.span`
  font-size: 18px;
  color: var(--secondary);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: left;
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;

  label { 
  font-size: 18px;
  color: var(--secondary);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  }
`;

export const ImagesContainer = styled.div`
  gap: 16px;
  height: 130px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 0px 0px 25px 0px;

  img {
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  label { 
    height: 96px;
    width: 96px;
    background: #F5F8FA;
    border: 1px dashed #96D2F0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputImage = styled.input`
    display: none;
`;

export const AdressMap = styled.div`
  width: 100%;
  padding-bottom: 25px;
  z-index: 3;

  .filter__menu {
    color: var(--title);
  }
`;