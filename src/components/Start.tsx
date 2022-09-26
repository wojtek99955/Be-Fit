import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StartShape from "../assets/svg/StartShape";
import { device } from "../assets/mediaQueries/device";

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
    top: -10%;
    width: 85%;
    height: 65%;
    @media ${device.mobileL} {
      top: -20%;
    }
    @media ${device.tablet} {
      width: 65%;
      height: 65%;
    }
    @media ${device.laptop} {
      top: -30%;
      max-width: 800px;
    }
  }
  &:nth-of-type(2) {
    bottom: -10%;
    right: 5%;
    width: 40%;
    height: 40%;
    @media ${device.laptop} {
      max-width: 500px;
    }
  }
  &:nth-of-type(3) {
    bottom: 5%;
    right: 40%;
    width: 25%;
    height: 25%;
    @media ${device.laptop} {
      max-width: 350px;
    }
  }
  &:nth-of-type(4) {
    bottom: 30%;
    left: 6%;
    width: 40%;
    height: 40%;
  }
  @media ${device.laptop} {
    max-width: 550px;
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
