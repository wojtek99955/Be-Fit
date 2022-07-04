import SignUp from "./Auth/SignUp";
import { Routes, Navigate, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Auth/SignIn";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Data from "./Data";
import StartPage from "./StartPage";
import Header from "./Header";
import Start from "./Start";

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
    <div className="App">
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
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/data"
          element={
            <RequireAuth>
              <Data />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
