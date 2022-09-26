import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StartShape from "../assets/svg/StartShape";

const img = require("../assets/images/main.jpg");
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 95, 109);
  background: linear-gradient(
    180deg,
    rgba(255, 95, 109, 1) 11%,
    rgba(255, 161, 1, 1) 100%
  );
  width: 100%;
`;

const SvgContainer = styled.div`
  position: absolute;
  &:first-of-type {
    top: -35%;
    width: 55%;
    height: 55%;
  }
  &:nth-of-type(2) {
    bottom: -10%;
    right: 5%;
    width: 40%;
    height: 40%;
  }
  &:nth-of-type(3) {
    bottom: 5%;
    right: 40%;
    width: 25%;
    height: 25%;
  }
  &:nth-of-type(4) {
    bottom: 30%;
    left: 10%;
    width: 40%;
    height: 40%;
  }
`;

const Start = () => {
  return (
    <Container>
      <SvgContainer>
        <StartShape />
      </SvgContainer>
      <SvgContainer>
        <StartShape />
      </SvgContainer>
      <SvgContainer>
        <StartShape />
      </SvgContainer>
      <SvgContainer>
        <StartShape />
      </SvgContainer>
      <Outlet />
    </Container>
  );
};

export default Start;
