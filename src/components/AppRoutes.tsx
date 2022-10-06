import styled from "styled-components";
import React from "react";
import { MemoizedAppRoutesContainer } from "./AppRoutesContainer";
import { darkModeContext } from "../context/DarkModeContextProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { device } from "../assets/mediaQueries/device";

interface StyleProps {
  darkMode: boolean;
  location: any;
  showSideBar: boolean;
  currentWidth: number;
}

const Container = styled.div<StyleProps>`
  width: ${({ showSideBar, currentWidth }) =>
    showSideBar && currentWidth >= 1024 ? "calc(100% - 13rem)" : "100%"};
  /* overflow-y: ${({ location }) =>
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/forgot-password"
      ? "hidden"
      : "visible"}; */
  position: relative;
  transition: background-color 400ms;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};
`;

interface Props {
  showSideBar: boolean;
  currentWidth: number;
}
const AppRoutes = ({ showSideBar, currentWidth }: Props) => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  let location = useLocation();
  return (
    <Container
      darkMode={darkMode!}
      location={location}
      showSideBar={showSideBar}
      currentWidth={currentWidth}
    >
      <MemoizedAppRoutesContainer />
    </Container>
  );
};

export const MemoizedRoutes = React.memo(AppRoutes);
