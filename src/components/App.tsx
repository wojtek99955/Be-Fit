import SignUp from "./Auth/SignUp";
import { Routes, Navigate, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Auth/SignIn";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Data from "./Data";
import StartPage from "./StartPage";
import Header from "./Header/Header";
import Start from "./Start";
import SideBar from "./SideBar";
import Calculators from "./Calculators";
import BodyMeasurements from "./BodyMeasurements";

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
          path="/calculators"
          element={
            <RequireAuth>
              <Calculators />
            </RequireAuth>
          }
        />
        <Route
          path="/your-body"
          element={
            <RequireAuth>
              <>
                <SideBar />
                <BodyMeasurements />
              </>
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
