import styled from "styled-components";
import React from "react";
import { MemoizedAppRoutesContainer } from "./AppRoutesContainer";
import { darkModeContext } from "../context/DarkModeContextProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

interface StyleProps {
  darkMode: boolean;
  location: any;
}

const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100vh;
  overflow-y: ${({ location }) =>
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/forgot-password"
      ? "hidden"
      : "scroll"};
  position: relative;
  transition: background-color 400ms;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};
`;

interface AuthProps {
  children: JSX.Element;
}
const AppRoutes = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  let location = useLocation();
  return (
    <Container darkMode={darkMode!} location={location}>
      <MemoizedAppRoutesContainer />
    </Container>
  );
};

export const MemoizedRoutes = React.memo(AppRoutes);
