import React from 'react'
import styled from '@emotion/styled'

import banner from '../../assets/banner.jpg'
import project_fintech from '../../assets/project_fintech.jpeg'
import project_enade from '../../assets/project_enade.jpeg'
import project_vendas from '../../assets/project_vendas.PNG'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
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
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  margin: 100px 0px 200px 0px;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image, inProgress }) =>
    inProgress
      ? `linear-gradient(to bottom,  rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`
      : `url(${image})`};
  filter: ${({ inProgress }) => inProgress && 'grayscale(100%)'};
  width: 40%;
  height: 300px;
  margin: 20px;
  border: 3px solid white;
  border-radius: 8px;
  justify-content: center;
  span {
    font-size: 200%;
    position: absolute;
    z-index: 2;
    color: ${({ theme }) => theme.color};
    line-height: 300px;
  }
  a {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
  }
  :hover {
    transform: ${({ inProgress }) => !inProgress && 'scale(1.05)'};
    transition: 0.7s;
  }

  @media (max-width: 1200px) {
    height: 150px;
  }
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
        <Grid style={{ marginLeft: '10%' }}>
          <Project image={project_fintech}>
            <a
              href="https://drive.google.com/drive/folders/1hUXDcJ0OjCURDYOhx2serpEMclNlI3uX?usp=share_link"
              target="_blank"
              rel="noreferrer"
            ></a>
          </Project>
        </Grid>
        <Grid style={{ marginLeft: '-10%' }}>
          <Project image={project_enade}>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMmU0NGYzNGItNTg1My00N2MyLTk2N2EtZjEzZjg5YjJmNmIyIiwidCI6IjQ3OGJjZDZkLWU2MDYtNGQ4ZS1iNWRmLTkzNzA1YjJjMTdhNiJ9"
              target="_blank"
              rel="noreferrer"
            ></a>
          </Project>
        </Grid>
        <Grid style={{ marginLeft: '10%' }}>
          <Project image={project_vendas}>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiOWNmNWY2MjItMWM3OS00MjVhLWI1YWEtOGNhODczY2VlZjM0IiwidCI6IjQ3OGJjZDZkLWU2MDYtNGQ4ZS1iNWRmLTkzNzA1YjJjMTdhNiJ9"
              target="_blank"
              rel="noreferrer"
            ></a>
          </Project>
        </Grid>
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

export default Projects
