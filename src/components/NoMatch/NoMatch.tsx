import styled from "styled-components";
import { ImSad } from "react-icons/im";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContextProvider";

interface DarkMode {
  darkMode: boolean;
}
const Container = styled.section<DarkMode>`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.main : "white"};
`;

const SadIcon = styled(ImSad)`
  font-size: 3rem;
  color: #ffa101;
`;
const Wrapper = styled.div<DarkMode>`
  max-width: 12rem;
  h2 {
    text-align: center;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoMatch = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  return (
    <Container darkMode={darkMode!}>
      <Wrapper darkMode={darkMode!}>
        <h2>This address does not exists</h2>
        <SadIcon />
      </Wrapper>
    </Container>
  );
};

export default NoMatch;
