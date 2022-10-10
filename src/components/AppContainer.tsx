import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import SideBar from "./SideBar/SideBar";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import { AnimatePresence } from "framer-motion";
import { MemoizedRoutes } from "./AppRoutes";
import Background from "./SideBarMobile/Background";
import { useLocation } from "react-router-dom";
import { darkModeContext } from "../context/DarkModeContextProvider";
import { theme } from "../assets/styleTheme";
import HeaderType from "./Header/HeaderType";

const AppContainer = () => {
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

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = theme.darkMode.main;
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [darkMode]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        backgroundColor: darkMode ? theme.darkMode.main : "white",
      }}
    >
      <HeaderType
        setShowSideBar={setShowSideBar}
        setShowSideBarMobile={setShowSideBarMobile}
      />

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

      <MemoizedRoutes showSideBar={showSideBar} currentWidth={currentWidth} />
    </div>
  );
};

export default AppContainer;
