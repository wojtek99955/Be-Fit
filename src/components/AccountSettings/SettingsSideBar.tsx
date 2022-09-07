import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "../../context/DarkModeContextProvider";

interface DarkMode {
  darkMode: boolean;
}

const UserIcon = styled(BiUserCircle)`
  font-size: 1.3rem;
`;
const LockIcon = styled(BiLock)`
  font-size: 1.3rem;
`;
const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.3rem;
`;

const StyledNavLink = styled(NavLink)<DarkMode>`
  transition: background-color 300ms;
  &:hover {
    background-color: "ffa101";
  }
  &:active {
    background-color: #e4e7e8;
  }
  &.active {
    background-color: ${({ darkMode }) => (darkMode ? "#424243" : "#e4e7e8")};
    font-weight: 600;
  }
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`;

const SettingsSideBar = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/settings/account" darkMode={darkMode!}>
            <UserIcon />
            Your account
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings/security" darkMode={darkMode!}>
            <LockIcon />
            Security
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings/preferences" darkMode={darkMode!}>
            <EmailIcon />
            Preferences
          </StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SettingsSideBar;
