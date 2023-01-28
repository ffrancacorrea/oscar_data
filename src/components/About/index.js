import React from 'react'
import styled from '@emotion/styled'

const Chart = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: flex-end;
  bottom: 0;
`;

const Bar = styled.div`
  display: flex;
  bottom: 0;
  width: 50px;
  background-color: ${({ theme }) => theme.darkGreen};
  height: ${({ height }) => height};
`;

const About = () => {
  return (
    <div>
    <Chart>
      <Bar height="7vh"></Bar>
      <Bar height="15vh"></Bar>
      <Bar height="20vh "></Bar>
      <Bar height="18vh "></Bar>
      <Bar height="28vh"></Bar>
      <Bar height="35vh"></Bar>
      <Bar height="40vh"></Bar>
      <Bar height="44vh"></Bar>
      <Bar height="56vh"></Bar>
      <Bar height="55vh"></Bar>
      <Bar height="60vh"></Bar>
      <Bar height="65vh"></Bar>
      <Bar height="70vh"></Bar>
      <Bar height="75vh"></Bar>
      <Bar height="80vh"></Bar>
      <Bar height="85vh"></Bar>
      <Bar height="90vh"></Bar>
      <Bar height="90vh"></Bar>
      <Bar height="85vh"></Bar>
      <Bar height="80vh"></Bar>
    </Chart>
    </div>
  )
}

export default About