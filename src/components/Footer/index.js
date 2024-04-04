import React from 'react'
import styled from '@emotion/styled'

import gmailLogo from '../../assets/gmail-logo.png'
import linkedinLogo from '../../assets/linkedin-logo.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.darkGreen};
  text-align: center;
  margin-top: 50px;
  font-size: 40px;
`
const Logos = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;

  div:not(:last-child) {
    margin-right: 30px;
  }
`

const Logo = styled.div`
  margin: 40px 0;
  animation-name: fade;
  animation-duration: 4s;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0.3rem 0.5rem 0.4rem rgba(0, 0, 0, 0.3);
  background-image: ${({ theme, image }) =>
    `linear-gradient(to left bottom, ${theme.gradientLogo}, ${theme.gradientLogo}), url(${image})`};

  background-size: cover;
  background-repeat: no-repeat;
  a {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
  }
  :hover {
    transform: scale(1.2);
    transition: 0.5s;
    box-shadow: 0.5 1rem 1rem rgba(0, 0, 0, 0.3);
  }
`
const Footer = () => {
  return (
    <Wrapper id="Contact">
      <Title>Contato</Title>
      <Logos>
        <Logo image={gmailLogo}>
          <a href="mailto:oscarjr.data@gmail.com" target="_blank" rel="noreferrer">
            {' '}
          </a>
        </Logo>
        <Logo image={linkedinLogo}>
          <a href="https://linkedin.com/in/oscarcorreajr/" target="_blank" rel="noreferrer">
            {' '}
          </a>
        </Logo>
      </Logos>
    </Wrapper>
  )
}

export default Footer
