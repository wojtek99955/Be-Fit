import SignUp from "./Auth/SignUp";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import StartPage from "./StartPage";
import Header from "./Header/Header";
import Start from "./Start";
import SideBar from "./SideBar/SideBar";
import Calculators from "./Calculators/Calculators";
import BodyMeasurements from "./BodyMeasurement/BodyMeasurements";
import AccountSettings from "./AccountSettings/AccountSettings";
import YourAccount from "./AccountSettings/YourAccount";
import Preferences from "./AccountSettings/Preferences";
import Security from "./AccountSettings/Security/Security";
import BodyCalculators from "./Calculators/BodyCalculators/BodyCalculators";
import CalculatorsLayout from "./Calculators/CalculatorsLayout";
import BMICalc from "./Calculators/BodyCalculators/BmiCalc/BMICalc";
import IdealWeight from "./Calculators/BodyCalculators/IdealWeight";
import CaloriesCalculator from "./CaloriesCalculator/CaloriesCalculator";
import CalorieIntake from "./Calculators/BodyCalculators/CalorieIntakeCalculator/CalorieIntake";
import BodyCalculatorsLayout from "./Calculators/BodyCalculators/BodyCalculatorsLayout";
import ForgotPassword from "./Auth/ForgotPassword";
import TrackCalories from "./TrackCalories/TrackCalories";
import YourGoal from "./YourGoal/YourGoal";
import Statistics from "./Statistics/Statistics";
import ActivityCalculatorsLayout from "./Calculators/ActivityCalculators/ActivityCalculatorsLayout.tsx";
import ActivityCalculators from "./Calculators/ActivityCalculators/ActivityCalculators";
import JumpingRope from "./Calculators/ActivityCalculators/JumpingRope";
import RunningCalculator from "./Calculators/ActivityCalculators/RunningCalculator";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import { AnimatePresence } from "framer-motion";
import { MemoizedRoutes } from "./AppRoutes";

interface AuthProps {
  children: JSX.Element;
}

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

  const RequireAuth = ({ children }: AuthProps) => {
    return islogged ? children : <Navigate to="/signup" />;
  };

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
