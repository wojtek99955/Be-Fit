import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StartShape from "../assets/svg/StartShape";

const img = require("../assets/images/main.jpg");
const Container = styled.div`
  border: 5px solid green;
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
`;

const Start = () => {
  return (
    <Container>
      <SvgContainer style={{ top: "-35%", width: "55%", height: "55%" }}>
        <StartShape />
      </SvgContainer>
      <SvgContainer
        style={{
          bottom: "0%",
          right: "5%",
          width: "40%",
          height: "40%",
        }}
      >
        <StartShape />
      </SvgContainer>
      <SvgContainer
        style={{
          bottom: "10%",
          right: "40%",
          width: "25%",
          height: "25%",
        }}
      >
        <StartShape />
      </SvgContainer>
      <SvgContainer
        style={{
          bottom: "30%",
          left: "10%",
          width: "40%",
          height: "40%",
        }}
      >
        <StartShape />
      </SvgContainer>
      <Outlet />
    </Container>
  );
};

export default Start;
