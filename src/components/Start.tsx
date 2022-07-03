import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./Auth/SignIn";
import StartPage from "./StartPage";
import Cos from "./Cos";

import SignUp from "./Auth/SignUp";

const img = require("../assets/images/main.jpg");
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4) url(${img});
  background-blend-mode: darken;
  background-size: cover;
`;

const Start = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Start;
