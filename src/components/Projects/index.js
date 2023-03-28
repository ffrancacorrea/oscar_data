import React from 'react'
import styled from '@emotion/styled'

import banner from '../../assets/banner.jpg'

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

  .custom-shape-divider-top-1680002009 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1680002009 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 98px;
  }

  .custom-shape-divider-top-1680002009 .shape-fill {
    fill: #ffffff;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  margin-left: 25%;
  text-align: left;
  margin-top: 100px;
  font-size: 40px;
`
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
const Project = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color};
  width: 30%;
  height: 300px;
  margin: 20px;
`
const Projects = () => {
  return (
    <Wrapper id="Projects">
      <div class="custom-shape-divider-top-1680002009">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Container>
        <Title>Projetos</Title>
        <Grid>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </Grid>
        <Grid>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Projects
