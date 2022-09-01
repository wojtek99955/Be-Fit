import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
interface Props {
  showSideBarMobile: boolean;
  setShowSideBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BackgroundWrapper = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 24;
  top: 0;
  left: 0;
  width: 200vw;
  height: 100vh;
`;

const Background = ({ showSideBarMobile, setShowSideBarMobile }: Props) => {
  const location = useLocation();
  const closeSideBar = () => {
    setShowSideBarMobile(false);
  };
  return (
    <AnimatePresence>
      {location.pathname === "/signin" ||
      location.pathname === "/" ||
      location.pathname === "/signup" ||
      !showSideBarMobile ? null : (
        <BackgroundWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeSideBar}
        ></BackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default Background;
