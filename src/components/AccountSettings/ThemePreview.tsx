import styled from "styled-components";

interface DarkStyle {
  dark?: boolean;
}

const Container = styled.div<DarkStyle>`
  border: ${({ theme }) => `2px solid ${theme.darkMode.light}`};
  width: 12rem;
  height: 7rem;
  border-radius: 8px;
  background-color: ${({ dark, theme }) =>
    dark ? theme.darkMode.main : "white"};
  cursor: pointer;
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
  border-right: ${({ theme }) => `1px solid ${theme.darkMode.light}`};
`;

interface Props {
  dark?: boolean;
}

const ThemePreview = ({ dark }: Props) => {
  return (
    <Container dark={dark}>
      <Header dark={dark} />
      <SideBar dark={dark} />
    </Container>
  );
};

export default ThemePreview;
