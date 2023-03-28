import React from 'react'
import styled from '@emotion/styled'
import profilePic from '../../assets/profile-pic.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 90vh;

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
  margin-bottom: 100px;
  color: ${({ theme }) => theme.gray};
  p {
    margin: 100px;
    text-align: justify;
    font-size: large;
  }
`
const Photo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 100px;
  img {
    width: 300px;
    border-radius: 5px;
    //clip-path: circle(50% at 50% 50%);
  }
  /* img {
    clip-path: ellipse(59% 45% at 27% 54%);
  } */
`
const Line = styled.div`
  //border-radius: 95% 45% 45% 95%;
  margin-top: 30px;
  &.first {
    position: absolute;
    height: 150px;
    border-left: ${({ theme }) => `4px solid ${theme.darkGreen}`};
    margin-top: -50px;
    margin-left: -250px;
    transform: rotate(45deg);
  }
  &.second {
    position: absolute;
    height: 220px;
    border-left: ${({ theme }) => `4px solid ${theme.lightGreen}`};
    margin-top: -70px;
    margin-left: -240px;
    transform: rotate(45deg);
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
        <p>
          Natural de Santos, em São Paulo, tenho 58 anos de idade e gosto de praticar crossfit e de assistir a filmes no
          cinema e em streamings. Bacharel em Administração, possuo bons conhecimentos na língua inglesa e prefiro ver
          sempre o lado positivo das coisas. Sempre atuei na área comercial e, por mais tempo na indústria farmacêutica
          onde consegui desenvolver habilidades de negociação e liderança chegando a gerenciar equipes. Aprendi a me
          comunicar muito bem falando em público e palestrando para várias pessoas, além de gostar de aprender
          continuamente acho importante compartilhar os conhecimentos e opiniões. Hoje, como Analista de Dados, tenho o
          conhecimento para contribuir com organizações na descoberta de insights que gerem melhores resultados de
          negócios, que vejo como sendo o foco de toda empresa. Meus conhecimentos abrangem técnicas de estatística
          descritiva, probabilidade e inferência estatística, utilizando ferramentas como Excel, SQL e Power BI.
        </p>
      </Content>
    </Wrapper>
  )
}

export default About
