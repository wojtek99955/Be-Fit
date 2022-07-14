import SignUp from "./Auth/SignUp";
import { Routes, Navigate, Route, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import StartPage from "./StartPage";
import Header from "./Header/Header";
import Start from "./Start";
import SideBar from "./SideBar/SideBar";
import Calculators from "./Calculators/Calculators";
import BodyMeasurements from "./BodyMeasurement/BodyMeasurements";
import AccountSettings from "./AccountSettings/AccountSettings";
import SettingsSideBar from "./AccountSettings/SettingsSideBar";
import YourAccount from "./AccountSettings/YourAccount";
import Email from "./AccountSettings/Email";
import Security from "./AccountSettings/Security/Security";
import BodyCalculators from "./Calculators/BodyCalculators";
import CalculatorsLayout from "./Calculators/CalculatorsLayout";
import BMICalc from "./Calculators/BMICalc";
import IdealWeight from "./Calculators/IdealWeight";
import CaloriesCalculator from "./CaloriesCalculator/CaloriesCalculator";
import CalorieIntake from "./Calculators/CalorieIntake";
import BodyCalculatorsLayout from "./Calculators/BodyCalculatorsLayout";

interface AuthProps {
  children: JSX.Element;
}

function App() {
  const ctx = useContext(AuthContext);
  const islogged = ctx?.currentUser;
  const navigation = useNavigate();

  const RequireAuth = ({ children }: AuthProps) => {
    return islogged ? children : <Navigate to="/signup" />;
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Start />}>
          <Route index element={<StartPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <>
                <SideBar />
                <Home />
              </>
            </RequireAuth>
          }
        />
        <Route
          path="calculators"
          element={
            <RequireAuth>
              <>
                <SideBar />
                <CalculatorsLayout />
              </>
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
        </Route>

        <Route
          path="/my-body"
          element={
            <RequireAuth>
              <>
                <SideBar />
                <BodyMeasurements />
              </>
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <>
                <SettingsSideBar />
                <AccountSettings />
              </>
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
              <>
                <SideBar />
                <CaloriesCalculator />
              </>
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
