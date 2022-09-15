import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { device } from "../../assets/mediaQueries/device";

interface ImageProps {
  url: string;
}

interface DarkMode {
  darkMode: boolean;
}

interface DarkMode {
  darkMode: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    @media ${device.tablet} {
      gap: 1.5rem;
    }
  }
`;
export const StyledHeader = styled.header<DarkMode>`
  position: fixed;
  width: 100%;
  padding: 0rem 0;
  height: 3.5rem;
  z-index: 20;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "#252627" : "white")};
  box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
  border-bottom: ${({ darkMode }) =>
    darkMode ? "1px solid hsla(0, 0%, 100%, 0.1)" : "1px solid #e1e4e7"};
  display: block;
  @media ${device.tablet} {
    display: block;
  }
  a {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;
export const Logo = styled.img`
  cursor: pointer;
  width: 5rem;
  margin-right: 2rem;
  @media ${device.tablet} {
    width: 7rem;
  }
`;

export const UserIcon = styled.div<ImageProps>`
  width: 2rem;
  height: 2rem;
  background-color: #ffa101;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 1.5rem;
`;

export const SettingsIcon = styled(FiSettings)`
  font-size: 1.6rem;
  color: black;
  cursor: pointer;
`;

export const ProfileSettingsDropdown = styled.div`
  box-sizing: content-box;
  padding-right: 0;
  margin-top: 0.5rem;
  border: 1px solid #e1e4e7;
  position: absolute;
  top: 100%;
  right: 0;
  -webkit-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  -moz-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  z-index: 10;
  background-color: white;
  width: 15.5rem;

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    &:hover {
      background-color: #fae6b1;
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

export const Divider = styled.div`
  background-color: #e1e4e7;
  height: 1px;
`;

export const LogoutContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #fae6b1;
  }
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 1.8rem;
  color: #ffa101;
  cursor: pointer;
  position: absolute;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  transition: background-color 300ms;

  &:hover {
    background-color: #f0f2f2;
  }
  &:active {
    background-color: #e4e7e8;
  }
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  display: block;
  display: flex;
  align-items: center;
`;

export const UserData = styled.div``;

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

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-right: auto;
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`;

export const LoggedNavItem = styled.div`
  border: none;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    border-radius: 8px;
    padding: 0.6rem 0.8rem;
    transition: background-color 300ms;

    &:hover {
      background-color: #f0f2f2;
    }
    &:active {
      background-color: #e4e7e8;
    }
  }

  &:last-of-type {
    display: none;
    @media ${device.laptop} {
      display: block;
    }
  }
`;

export const LoggedHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 1.6rem;
  color: #555555;
  cursor: pointer;
`;

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem;

  &:hover {
    background-color: #f0f2f2;
  }
  &:active {
    background-color: #e4e7e8;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  border-radius: 5px;
  padding: 0.2rem;
  transition: background-color 300ms;
  @media ${device.tablet} {
    margin-right: 2rem;
  }

  &:hover {
    background-color: #f0f2f2;
  }
  &:active {
    background-color: #e4e7e8;
  }
`;

export const DownIcon = styled(BiChevronDown)<DarkMode>`
  font-size: 1.3rem;
  margin-left: 0.3rem;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const Calculators = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CalculatorsDropdown = styled.div<DarkMode>`
  border-radius: 4px;
  position: absolute;
  top: 95%;
  border: ${({ darkMode }) =>
    darkMode ? "2px solid hsla(0, 0%, 100%, 0.1)" : "1px solid #e1e4e7"};
  left: 0;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "none" : "-3px 0px 48px -1px rgba(225, 228, 231, 1)"};
  z-index: 10;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.middle : "white"};
  width: 13rem;
  ul {
    list-style: none;
  }
  li {
    color: white;
    cursor: pointer;
  }
  a {
    border-radius: 0;
    padding: 1rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};

    &:hover {
      background-color: ${({ darkMode, theme }) =>
        darkMode ? theme.darkMode.light : "#fae6b1"};
    }
  }
`;
