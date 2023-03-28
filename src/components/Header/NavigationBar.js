import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ theme }) => theme.color};
  justify-content: space-around;
  width: 100%;
  font-size: 25px;
`;
const NavigationLinks = styled.div`
  display: flex;
  flex: 1;
  margin: 15px;
  flex-direction: row-reverse;
  justify-content: space-around;
`;
const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavigationItem = styled.a`
  display: flex;
  margin: 0 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGreen};
`;

const NavigationBar = () => {
  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationItems>
          <NavigationItem href="#About">Sobre mim</NavigationItem>
          <NavigationItem href="#Projects">Projetos</NavigationItem>
        </NavigationItems>
        <div></div>
      </NavigationLinks>
    </Wrapper>
  );
};

export default NavigationBar;
