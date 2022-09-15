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

function App() {
  const ctx = useContext(AuthContext);
  const islogged = ctx?.currentUser;
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSideBarMobile, setShowSideBarMobile] = useState(false);
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const setWidth = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);
  });

  let location = useLocation();

  return (
    <DarkModeContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          {location.pathname === "/" ||
          location.pathname === "/signup" ||
          location.pathname === "/signin" ||
          location.pathname === "/forgot-password" ? (
            <StartHeader />
          ) : (
            <Header
              setShowSideBar={setShowSideBar}
              setShowSideBarMobile={setShowSideBarMobile}
            />
          )}

          {islogged && showSideBar && currentWidth >= 1024 ? <SideBar /> : null}
          <AnimatePresence>
            {islogged && currentWidth < 1024 ? (
              <>
                <SideBarMobile
                  showSideBarMobile={showSideBarMobile}
                  setShowSideBarMobile={setShowSideBarMobile}
                />
                <Background
                  showSideBarMobile={showSideBarMobile}
                  setShowSideBarMobile={setShowSideBarMobile}
                />
              </>
            ) : null}
          </AnimatePresence>

          <MemoizedRoutes />
        </div>
      </ThemeProvider>
    </DarkModeContextProvider>
  );
}

export default App;
