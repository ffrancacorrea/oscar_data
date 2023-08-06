import React from 'react'
import styled from '@emotion/styled'

import profilePic from '../../assets/profile-pic.jpg'
import excelLogo from '../../assets/excel-logo.png'
import powerbiLogo from '../../assets/powerbi-logo.png'
import sqlLogo from '../../assets/sql-logo.png'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 100vh;

  .custom-shape-divider-top-1680001815 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1680001815 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 98px;
  }

  .custom-shape-divider-top-1680001815 .shape-fill {
    fill: #ffffff;
  }
`
const Title = styled.h1`
  color: ${({ theme }) => theme.darkGreen};
  margin-right: 25%;
  text-align: right;
  margin-top: 100px;
  font-size: 40px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.gray};
  p {
    text-align: justify;
    font-size: large;
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 100px;
`

const Photo = styled.div`
  margin: 100px;
  img {
    width: 300px;
    border: ${({ theme }) => `3px solid ${theme.darkGreen}`};
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    margin: 100px 0 0 0;
    flex-wrap: wrap;
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  img {
    height: 100px;
  }
  img:hover {
    filter: none;
    transform: scale(1.3) rotate(5deg);
    transition: 0.5s;
  }
`

const About = () => {
  return (
    <Wrapper id="About">
      <Title>Um pouco sobre mim...</Title>
      <Content>
        <Photo>
          {/* <Line className="first"></Line>
          <Line className="second"></Line> */}
          <img src={profilePic} alt="" />
        </Photo>
        <Info>
          <p>
            Natural de Santos, em São Paulo, gosto de praticar crossfit e de assistir a filmes no cinema e em
            streamings. Bacharel em Administração, possuo bons conhecimentos na língua inglesa e prefiro ver sempre o
            lado positivo das coisas. Sempre atuei na área comercial e, por mais tempo na indústria farmacêutica onde
            consegui desenvolver habilidades de negociação e liderança chegando a gerenciar equipes. Aprendi a me
            comunicar muito bem falando em público e palestrando para várias pessoas, além disso, gosto de aprender
            continuamente e acho importante compartilhar os conhecimentos e opiniões. Hoje, como Analista de Dados,
            tenho o conhecimento para contribuir com organizações na descoberta de insights que gerem melhores
            resultados de negócios e acredito que um bom analista deve sempre observar as várias possibilidades dos
            dados utilizando técnicas de matemática e estatística.
          </p>

          <Logos>
            <img src={excelLogo} alt="" />
            <img src={powerbiLogo} alt="" />
            <img src={sqlLogo} alt="" />
          </Logos>
        </Info>
      </Content>
    </Wrapper>
  )
}

export default About
