import styled from "styled-components";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContextProvider";
import { Container } from "./AccountSettingsStyle";
import ThemePreview from "./ThemePreview";

const ToggleModeBtn = styled.button`
  padding: 0.7rem 2.8rem;
  background-color: #ffa101;
  border: none;
  color: white;
`;

const PreviewContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Preferences = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  console.log(darkModeCtx?.darkMode);
  const handleToggleDarkMode = () => {
    darkModeCtx?.setDarkMode((prev) => !prev);
  };

  return (
    <Container darkMode={darkMode!}>
      <h2>Preferences</h2>
      <h3>Theme</h3>
      <p>Choose how you’d like BeFit to appear. Select a theme</p>

      <ToggleModeBtn onClick={handleToggleDarkMode}>
        {darkModeCtx?.darkMode ? "On" : "Off"}
      </ToggleModeBtn>
      <PreviewContainer>
        <ThemePreview />
        <ThemePreview dark />
      </PreviewContainer>
    </Container>
  );
};

export default Preferences;
