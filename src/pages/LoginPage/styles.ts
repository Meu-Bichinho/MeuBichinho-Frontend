import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 64px;

  @media (max-width: 768px) {
    padding: 0;
  }
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

export const Main = styled.form`
  width: 100%;
  max-width: 700px;
  height: auto;

  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media(max-width:768px){
    justify-content: center;
    padding: 64px 40px 20px;
    height: 100%;
    border-radius: 0px;
    overflow: visible;
  }
`;

export const MoreInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  margin-top: 20px;

  > a {
    text-decoration: none;
    color: #4d6f80;

    :hover {
      text-decoration: underline;
    }

    @media (min-width: 320px) {
      font-size: 14px;
      text-align: center;
    }
  }
 
`;