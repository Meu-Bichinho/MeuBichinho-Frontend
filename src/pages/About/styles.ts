import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
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
  text-align: center;

  @media(max-width:420px){
    font-size: 24px;
  }
`;

export const Main = styled.div`
  width: max-content;
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

  @media(max-width:420px){
    justify-content: center;
    padding: 64px 40px 20px;
    height: 100%;
    border-radius: 0px;
  }
`;

export const Photos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
`;

export const Dev = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  background: #FAFCFE;
  box-shadow: 0px 0px 50px rgb(0 0 0 / 7%);
  border-radius: 20px;
  border: 1px solid var(--border);
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Img = styled.img`
  width: 86px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;

  @media(max-width:420px){
    width: 50px;
  }
`;

export const Span = styled.span`
  font-size: 24px;
  color: var(--title);
  text-align: center;

  @media(max-width:420px){
    font-size: 14px;
  }
`;

export const SocialMedia = styled.div`
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-left: 2px solid var(--border);
  padding: 0 20px;
`;

export const Icons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 36px;
    height: 36px;
    transition: all 0.2s;

    :hover {
      fill: var(--pink);
    }

    @media(max-width:420px){
    width: 20px;
    height: 20px;
  }
  }
`;
