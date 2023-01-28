import React from 'react'
import styled from '@emotion/styled'

import banner from "../../assets/banner.jpg"

import NavigationBar from "./NavigationBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => `linear-gradient(to left bottom, ${theme.gradientLightGreen}, ${theme.gradientDarkGreen} 50%), url(${banner})`} ;
  width: 100%;
  height: 100vh;
  
  a{  
    text-decoration: none;
    color: ${({ theme }) => theme.lightGreen};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-style: italic;
  font-size: 30px;
  h1 {
    z-index: 1;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <NavigationBar></NavigationBar>
      <Container>
      <h1>Oscar Correa Jr</h1>
      <h3>Seja bem vindo ao meu <a href="#Projects">portfolio</a></h3>
      </Container>
    </Wrapper>
  )
}

export default Header