import { useLocation } from "react-router-dom";
import Header from "./Header";
import StartHeader from "./StartHeader";

interface Props {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSideBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderType = ({ setShowSideBar, setShowSideBarMobile }: Props) => {
  let location = useLocation();

  const renderHeaderType = () => {
    if (location.pathname === "/") {
      return <StartHeader />;
    } else if (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password"
    ) {
      return null;
    } else {
      return (
        <Header
          setShowSideBar={setShowSideBar}
          setShowSideBarMobile={setShowSideBarMobile}
        />
      );
    }
  };
  return <>{renderHeaderType()}</>;
};

export default HeaderType;
