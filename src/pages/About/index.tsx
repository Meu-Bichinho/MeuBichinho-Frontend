import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import Andre from '../../assets/andre.jpg';
import Pietro from '../../assets/pietro.jpg';
import Julya from '../../assets/julya.jpg';
import Lucas from '../../assets/lucas.jpg';
import Mateus from '../../assets/mateus.jpg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Container, Dev, Img, Main, Photos, Span, Title } from './styles';

export function About() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>Desenvolvedores:</Title>
        <Photos>
          <Dev>
            <Img src={Andre} />
            <Span> André Robette </Span>
            <div>
              <a
                href="https://www.instagram.com/andrerobette19/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} color="#4D6F80" />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9-robette-7137891a1/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} color="#4D6F80" />
              </a>
            </div>
          </Dev>
          <Dev>
            <Img src={Pietro} />
            <Span> Gabriel Pietro</Span>
            <div>
              <a
                href="https://www.instagram.com/_pietrosouza_/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} color="#4D6F80" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-pietro-de-souza-9057431b7/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} color="#4D6F80" />
              </a>
            </div>
          </Dev>
          <Dev>
            <Img src={Julya} />
            <Span>Julya Brustolin</Span>
            <div>
              <a
                href="https://www.instagram.com/juh_marssona/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} color="#4D6F80" />
              </a>
              <a
                href="https://www.linkedin.com/in/julya-brustolin-marssona-4812361a3/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} color="#4D6F80" />
              </a>
            </div>
          </Dev>
        </Photos>
        <Photos>
          <Dev>
            <Img src={Lucas} />
            <Span>Lucas Chitolina</Span>
            <div>
              <a
                href="https://www.instagram.com/chitolina.lucas/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} color="#4D6F80" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucaschitolina/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} color="#4D6F80" />
              </a>
            </div>
          </Dev>
          <Dev>
            <Img src={Mateus} />
            <Span>Mateus Putti</Span>
            <div>
              <a
                href="https://www.instagram.com/mateus_putti/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} color="#4D6F80" />
              </a>
              <a
                href="https://www.linkedin.com/in/mateus-putti-0a615220a/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} color="#4D6F80" />
              </a>
            </div>
          </Dev>
        </Photos>
      </Main>
    </Container>
  );
}
