import styled from "styled-components";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContextProvider";
import { Container } from "./AccountSettingsStyle";
import ThemePreview from "./ThemePreview";

const PreviewContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  span {
    margin-top: 1rem;
    display: block;
  }
`;

const Preferences = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  console.log(darkModeCtx?.darkMode);
  const darkModeOff = () => {
    darkModeCtx?.setDarkMode(true);
  };

  const darkModeOn = () => {
    darkModeCtx?.setDarkMode(false);
  };

  return (
    <Container darkMode={darkMode!}>
      <h2>Preferences</h2>
      <h3>Theme</h3>
      <p>Choose how you’d like BeFit to appear. Select a theme</p>
      <PreviewContainer>
        <div onClick={darkModeOn}>
          <ThemePreview />
          <span>Light</span>
        </div>
        <div onClick={darkModeOff}>
          <ThemePreview dark />
          <span>Dark</span>
        </div>
      </PreviewContainer>
    </Container>
  );
};

export default Preferences;
