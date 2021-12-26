import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  padding: 70px 100px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('meubichinho.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 800px){
    padding: 70px 50px;
  }

  @media (max-width: 520px){
    background-image: none;
    background-color: var(--blue);
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media(max-width: 470px){
    justify-content: center;
  }
`;

export const Img = styled.img``;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-left: 20px;
  color: var(--logo);

  @media(max-width: 470px){
    font-size: 36px;
  }
`;

export const Content = styled.div`
  width: 460px;

  @media(max-width: 470px){
    width: 400px;
  }

  @media(max-width: 400px){
    width: 350px;
  }

  @media(max-width: 320px){
    width: 300px;
  }
`;

export const Description = styled.h1`
  font-size: 48px;
  font-weight: 700;

  margin-bottom: 20px;

  @media (max-width: 940px){
    font-size: 36px;
    margin-left: 0px;
  }

  @media (max-width: 830px){
    font-size: 30px;
    margin-left: 0px;
  }

  @media (max-width: 520px){
    text-align: center;
  }

  @media(max-width: 470px){
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 520px){
    align-items: center;
  }
`;

export const JoinButton = styled.a`
  width: max-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  font-size: 48px;
  color: var(--logo);
  text-decoration: none;
  transition: all 0.3s;
  margin-top: 60px;
  > svg {
    
    margin-left: 10px;
  }

  @media (max-width: 940px){
    font-size: 36px;
  }

  @media (max-width: 520px){
    width: 100%;
    justify-content: center;
  }

  :hover {
    color: var(--dark_blue);
    cursor: pointer;
  }
`;

export const Button = styled(JoinButton)`
  font-size: 24px;
  background: transparent;
  padding: 0;

  @media (max-width: 940px){
    font-size: 20px;
    margin-left: 0px;
  }

  :hover {
    background: transparent;
  }

  > svg {
    margin-left: 5px;
  }
`;

export const Dev = styled.a`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 15px;
  color: var(--white);
  transition: all 0.2s;

  :hover {
    color: var(--dark_blue);
  }

  @media(max-width: 420px){
        text-align: center;
    }
`;
