import React from 'react'
import styled from '@emotion/styled'

import banner from '../../assets/banner.jpg'

import NavigationBar from './NavigationBar'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(to left bottom, ${theme.gradientLightGreen}, ${theme.gradientDarkGreen} 50%), url(${banner})`};
  width: 100%;
  height: 100vh;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.lightGreen};
  }
  .custom-shape-divider-bottom-1679905737 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1679905737 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 61px;
  }

  .custom-shape-divider-bottom-1679905737 .shape-fill {
    fill: #ffffff;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-style: italic;
  font-size: 30px;
  h1 {
    font-style: normal;
    z-index: 1;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 800;
  }
`

const Header = () => {
  return (
    <Wrapper id="Header">
      <NavigationBar></NavigationBar>
      <Container>
        <h1>Oscar Correa Jr</h1>
        <h3>
          Seja bem vindo ao meu <a href="#Projects">portfólio</a>
        </h3>
      </Container>
      <div class="custom-shape-divider-bottom-1679905737">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  )
}

export default Header
