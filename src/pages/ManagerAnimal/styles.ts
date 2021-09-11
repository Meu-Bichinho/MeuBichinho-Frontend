import { darken } from 'polished';
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

export const Form = styled.div`
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

  .leaflet-container{
    z-index: 0;
  }
`;

export const Modal = styled.div`
    width: 500px;
    background: rgba(245, 245, 245, 1.8);
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    margin: 64px auto;
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.5);

    padding: 64px 80px;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      width: 50%;
      height: 34px;
      border-radius: 20px;
      border: none;
      color: var(--white);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      :first-child {
        background-color: var(--red);

        :hover {
          background: ${darken(0.1, '#fe6363')};
        }
      }

      :last-child {
        background-color: var(--green);

        :hover {
          background: ${darken(0.1, '#07d174')};
        }
      }
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

export const AlterButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;
  margin-top: 24px;
`;

export const RemoveButton = styled.button`
    border: none;
    border-radius: 20px;
    height: 64px;
    width: 50%;
    background-color: var(--red);
    color: var(--white);

    cursor: pointer;

    :hover {
      background: ${darken(0.1, '#fe6363')};
    }
`;

export const AdotadoButton = styled.button`
    border: none;
    border-radius: 20px;
    height: 64px;
    width: 50%;
    background-color: var(--green);
    color: var(--white);

    cursor: pointer;

    :hover {
      background: ${darken(0.2, '#07d174')};
    }
`;

