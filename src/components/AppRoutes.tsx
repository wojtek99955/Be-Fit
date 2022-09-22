import styled from "styled-components";
import React from "react";
import { MemoizedAppRoutesContainer } from "./AppRoutesContainer";
import { darkModeContext } from "../context/DarkModeContextProvider";
import { useContext } from "react";

interface DarkMode {
  darkMode: boolean;
}

const Container = styled.div<DarkMode>`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
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
  return (
    <Container darkMode={darkMode!}>
      <MemoizedAppRoutesContainer />
    </Container>
  );
};

export const MemoizedRoutes = React.memo(AppRoutes);
