import { DarkModeContextProvider } from "../context/DarkModeContextProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styleTheme";

import AppContainer from "./AppContainer";

function App() {
  return (
    <DarkModeContextProvider>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </DarkModeContextProvider>
  );
}

export default App;
