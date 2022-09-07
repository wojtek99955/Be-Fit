import styled from "styled-components";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContextProvider";
import { Container } from "./AccountSettingsStyle";

const ToggleModeBtn = styled.button`
  padding: 0.7rem 2.8rem;
  background-color: #ffa101;
  border: none;
  color: white;
`;

const Preferences = () => {
  const darkModeCtx = useContext(darkModeContext);
  console.log(darkModeCtx?.darkMode);
  const handleToggleDarkMode = () => {
    darkModeCtx?.setDarkMode((prev) => !prev);
  };
  return (
    <Container>
      <h2>Preferences</h2>

      <h3>Dark mode</h3>
      <ToggleModeBtn onClick={handleToggleDarkMode}>
        {darkModeCtx?.darkMode ? "On" : "Off"}
      </ToggleModeBtn>
    </Container>
  );
};

export default Preferences;
