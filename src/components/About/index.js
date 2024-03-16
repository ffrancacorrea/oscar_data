import React from 'react'
import styled from '@emotion/styled'

import banner from '../../assets/banner.jpg'
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(to left bottom, ${theme.gradientLightGreen}, ${theme.gradientDarkGreen} 50%), url(${banner})`};

  border: ${({ theme }) => `0px solid ${theme.darkGreen}`};
  border-radius: 20% 80% 33% 67% / 72% 60% 40% 28%;
  img {
    width: 300px;
    border: ${({ theme }) => `0px solid ${theme.darkGreen}`};
    border-radius: 73% 27% 65% 35% / 30% 39% 61% 70%;
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
    transform: scale(1.3);
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
            Natural de Santos/SP, resido em Marabá/PA desde 2003 tendo passado 10 anos em Belém/PA onde atuei como
            gerente de equipe de propagandistas de laboratório farmacêutico. Bacharel em Administração pela UNIMES em
            Santos, sou formado em Análise de Dados pela escola Preditiva Analytics desde março de 2022. Possuo também a
            formação em Power BI pela Simplifica Treinamentos, conhecendo amplamente sua capacidade de entrega. Sempre
            atuei na área comercial e, por mais tempo na indústria farmacêutica onde consegui desenvolver soft skills
            extremamente úteis para se analisar dados com uma visão mais crítica e investigativa. A formação na
            Preditiva me tornou hábil nas análises com a utilização de técnicas de estatistica que levam a insights mais
            acertivos proporionando melhores tomadas de decisão para os negócios. Utilizo ferramentas como Excel, SQL,
            Power BI e outras para desenvolver o trabalho com o melhor desempenho possível. Como consultor ofereço toda
            a atenção ao cliente de forma que nunca se sinta desamparado. As etapas dos projetos combinados são tratadas
            com transparência não ocorrendo dúvidas para o meu cliente.
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
