import { useEffect, useContext } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { darkModeContext } from "../../context/DarkModeContextProvider";

interface DarkMode {
  darkMode: boolean;
}

const Container = styled.section<DarkMode>`
  width: 100%;
  height: auto;
  position: relative;
  top: 3.5rem;
  transition: background-color 400ms;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : " white"};
`;

const AccountSettings = () => {
  const location = useLocation();
  let navigation = useNavigate();

  useEffect(() => {
    location.pathname === "/settings" && navigation("/settings/account");
  }, []);

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  return (
    <Container darkMode={darkMode!}>
      <Outlet />
    </Container>
  );
};

export default AccountSettings;
