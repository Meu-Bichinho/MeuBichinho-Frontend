import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Sidebar } from '../../components/Sidebar';
import Andre from '../../assets/andre.jpg';
import Pietro from '../../assets/pietro.jpg';
import Julya from '../../assets/julya.jpg';
import Lucas from '../../assets/lucas.jpg';
import Mateus from '../../assets/mateus.jpg';
import {
  Container,
  Dev,
  Icons,
  Img,
  Main,
  Person,
  Photos,
  SocialMedia,
  Span,
  Title,
} from './styles';

export function About() {
  return (
    <>
      <Sidebar />
      <Container>
        <Main>
          <Title>Desenvolvedores</Title>
          <Photos>
            <Dev>
              <Person>
                <Img src={Andre} />
                <Span> André Robette </Span>
              </Person>
              <SocialMedia>
                <Icons
                  href="https://www.instagram.com/andrerobette19/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={25} color="#4D6F80" />
                </Icons>
                <Icons
                  href="https://www.linkedin.com/in/andr%C3%A9-robette-7137891a1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} color="#4D6F80" />
                </Icons>
              </SocialMedia>
            </Dev>
            <Dev>
              <Person>
                <Img src={Pietro} />
                <Span> Gabriel Pietro</Span>
              </Person>

              <SocialMedia>
                <Icons
                  href="https://www.instagram.com/_pietrosouza_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={25} color="#4D6F80" />
                </Icons>
                <Icons
                  href="https://www.linkedin.com/in/gabriel-pietro-de-souza-9057431b7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} color="#4D6F80" />
                </Icons>
              </SocialMedia>
            </Dev>
            <Dev>
              <Person>
                <Img src={Julya} />
                <Span>Julya Brustolin</Span>
              </Person>

              <SocialMedia>
                <Icons
                  href="https://www.instagram.com/juh_marssona/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={25} color="#4D6F80" />
                </Icons>
                <Icons
                  href="https://www.linkedin.com/in/julya-brustolin-marssona-4812361a3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} color="#4D6F80" />
                </Icons>
              </SocialMedia>
            </Dev>
            <Dev>
              <Person>
                <Img src={Lucas} />
                <Span>Lucas Chitolina</Span>
              </Person>

              <SocialMedia>
                <Icons
                  href="https://www.instagram.com/chitolina.lucas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={25} color="#4D6F80" />
                </Icons>
                <Icons
                  href="https://www.linkedin.com/in/lucaschitolina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} color="#4D6F80" />
                </Icons>
              </SocialMedia>
            </Dev>
            <Dev>
              <Person>
                <Img src={Mateus} />
                <Span>Mateus Putti</Span>
              </Person>
              <SocialMedia>
                <Icons
                  href="https://www.instagram.com/mateus_putti/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={25} color="#4D6F80" />
                </Icons>
                <Icons
                  href="https://www.linkedin.com/in/mateus-putti-0a615220a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} color="#4D6F80" />
                </Icons>
              </SocialMedia>
            </Dev>
          </Photos>
        </Main>
      </Container>
    </>
  );
}
