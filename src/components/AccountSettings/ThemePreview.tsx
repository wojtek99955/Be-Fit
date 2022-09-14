import styled from "styled-components";
import { darkModeContext } from "../../context/DarkModeContextProvider";
import { useContext } from "react";

interface DarkStyle {
  dark?: boolean;
  darkMode?: boolean;
}

const Container = styled.div<DarkStyle>`
  border: ${({ theme }) => `1px solid ${theme.darkMode.light}`};
  width: 12rem;
  height: 7rem;
  border-radius: 8px;
  background-color: transparent;
  background-color: ${({ dark, theme }) =>
    dark ? theme.darkMode.middle : "white"};
  cursor: pointer;
  &:hover {
    outline: ${({ theme, darkMode }) =>
      darkMode ? `2px solid #9a9fa3` : "2px solid #9a9fa3"};
    border: ${({ theme, darkMode }) =>
      darkMode ? `2px solid ${theme.darkMode.main}` : "2px solid white"};
  }
`;

const Header = styled.div<DarkStyle>`
  width: 100%;
  height: 15%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ dark, theme }) =>
    dark ? theme.darkMode.light : "white"};
  border-bottom: ${({ theme }) => `1px solid ${theme.darkMode.light}`};
`;

const SideBar = styled.div<DarkStyle>`
  width: 15%;
  height: 85%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: ${({ theme }) => `1px solid ${theme.darkMode.light}`};
  background-color: ${({ dark, theme }) =>
    dark ? theme.darkMode.middle : "white"};
`;

interface Props {
  dark?: boolean;
}

const ThemePreview = ({ dark }: Props) => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container dark={dark} darkMode={darkMode}>
      <Header dark={dark} />
      <SideBar dark={dark} />
    </Container>
  );
};

export default ThemePreview;
