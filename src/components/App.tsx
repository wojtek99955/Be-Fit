import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import { AnimatePresence } from "framer-motion";
import { MemoizedRoutes } from "./AppRoutes";

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

  return (
    <div className="App" style={{ display: "flex" }}>
      <Header
        setShowSideBar={setShowSideBar}
        setShowSideBarMobile={setShowSideBarMobile}
      />

      {islogged && showSideBar && currentWidth >= 1024 ? <SideBar /> : null}
      <AnimatePresence>
        {islogged && currentWidth < 1024 ? (
          <SideBarMobile
            showSideBar={showSideBar}
            showSideBarMobile={showSideBarMobile}
            setShowSideBarMobile={setShowSideBarMobile}
          />
        ) : null}
      </AnimatePresence>

      <MemoizedRoutes />
    </div>
  );
}

export default App;
