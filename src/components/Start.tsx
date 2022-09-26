import { Outlet } from "react-router-dom";
import styled from "styled-components";

const img = require("../assets/images/main.jpg");
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.5) url(${img});
  background-blend-mode: darken;
  background-size: cover; */
  background: rgb(255, 95, 109);
  background: linear-gradient(
    180deg,
    rgba(255, 95, 109, 1) 11%,
    rgba(255, 161, 1, 1) 100%
  );
  width: 100%;
`;

const Start = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Start;
