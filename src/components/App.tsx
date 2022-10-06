import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import { AnimatePresence } from "framer-motion";
import { MemoizedRoutes } from "./AppRoutes";
import Background from "./SideBarMobile/Background";
import { DarkModeContextProvider } from "../context/DarkModeContextProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styleTheme";
import { useLocation } from "react-router-dom";
import StartHeader from "./Header/StartHeader";
import { darkModeContext } from "../context/DarkModeContextProvider";
import AppLayout from "./AppLayout";

function App() {
  return (
    <DarkModeContextProvider>
      <ThemeProvider theme={theme}>
        <AppLayout />
      </ThemeProvider>
    </DarkModeContextProvider>
  );
}

export default App;
