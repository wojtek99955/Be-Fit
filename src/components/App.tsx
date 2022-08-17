import SignUp from "./Auth/SignUp";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import StartPage from "./StartPage";
import Header from "./Header/Header";
import Start from "./Start";
import SideBar from "./SideBar/SideBar";
import Calculators from "./Calculators/Calculators";
import BodyMeasurements from "./BodyMeasurement/BodyMeasurements";
import AccountSettings from "./AccountSettings/AccountSettings";
import YourAccount from "./AccountSettings/YourAccount";
import Email from "./AccountSettings/Email";
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
import ActivityCalculatorsLayout from "./Calculators/ActivityCalculatorsLayout.tsx";
import ActivityCalculators from "./Calculators/ActivityCalculators";
import JumpingRope from "./Calculators/JumpingRope";
import RunningCalculator from "./Calculators/RunningCalculator";

interface AuthProps {
  children: JSX.Element;
}

function App() {
  const ctx = useContext(AuthContext);
  const islogged = ctx?.currentUser;
  const [showSideBar, setShowSideBar] = useState(true);

  const RequireAuth = ({ children }: AuthProps) => {
    return islogged ? children : <Navigate to="/signup" />;
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      <Header setShowSideBar={setShowSideBar} />
      {islogged && showSideBar ? <SideBar /> : null}
      <Routes>
        <Route path="/" element={<Start />}>
          <Route index element={<StartPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="calculators"
          element={
            <RequireAuth>
              <CalculatorsLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Calculators />} />
          <Route path="body-calculators" element={<BodyCalculatorsLayout />}>
            <Route index element={<BodyCalculators />} />
            <Route path="bmi" element={<BMICalc />} />
            <Route path="ideal-weight" element={<IdealWeight />} />
            <Route path="calorie-intake" element={<CalorieIntake />} />
          </Route>
          <Route
            path="activity-calculators"
            element={<ActivityCalculatorsLayout />}
          >
            <Route index element={<ActivityCalculators />} />
            <Route path="jumping-rope" element={<JumpingRope />} />
            <Route path="running" element={<RunningCalculator />} />
          </Route>
        </Route>

        <Route
          path="/my-body"
          element={
            <RequireAuth>
              <BodyMeasurements />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <AccountSettings />
            </RequireAuth>
          }
        >
          <Route path="account" element={<YourAccount />} />
          <Route path="email" element={<Email />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route
          path="/calories-calculator"
          element={
            <RequireAuth>
              <CaloriesCalculator />
            </RequireAuth>
          }
        />
        <Route
          path="track-calories"
          element={
            <RequireAuth>
              <TrackCalories />
            </RequireAuth>
          }
        />
        <Route
          path="my-goal"
          element={
            <RequireAuth>
              <YourGoal />
            </RequireAuth>
          }
        />
        <Route
          path="statistics"
          element={
            <RequireAuth>
              <Statistics />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
