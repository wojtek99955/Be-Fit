import styled from "styled-components";
import { Link } from "react-router-dom";

interface DarkMode {
  darkMode: boolean;
}

export const ProfileSettingsDropdown = styled.div<DarkMode>`
  box-sizing: content-box;
  padding-right: 0;
  margin-top: 0.5rem;
  border: ${({ darkMode }) =>
    darkMode ? "2px solid hsla(0, 0%, 100%, 0.1)" : "1px solid #e1e4e7"};
  border-radius: 4px;
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "none" : "-3px 0px 48px -1px rgba(225, 228, 231, 1)"};
  z-index: 10;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.middle : "white"};
  width: 15.5rem;

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    &:hover {
      background-color: ${({ theme, darkMode }) =>
        darkMode ? theme.darkMode.light : "#fae6b1"};
    }
    a {
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    }
  }

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const ProfileSettings = styled.div`
  position: relative;
  display: flex;
`;

export const Divider = styled.div<DarkMode>`
  background-color: ${({ darkMode }) =>
    darkMode ? "hsla(0, 0%, 100%, 0.1)" : "#e1e4e7"};
  height: ${({ darkMode }) => (darkMode ? "2px" : "1px")};
`;

export const LogoutContainer = styled.div<DarkMode>`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, darkMode }) =>
      darkMode ? theme.darkMode.light : "#fae6b1"};
  }
  div {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  display: block;
  display: flex;
  align-items: center;
`;

export const UserData = styled.div<DarkMode>`
  strong {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

interface ImageProps {
  url: string;
}

export const DropdownUserIcon = styled.div<ImageProps>`
  width: 3rem;
  height: 3rem;
  background-color: #ffa101;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  color: white;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Email = styled.div`
  color: #55595b;
`;

export const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  cursor: default;
`;
