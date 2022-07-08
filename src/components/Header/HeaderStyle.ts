import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

interface StyleProps {
  logged: any;
  location: any;
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  nav {
    display: flex;
    gap: 1.5rem;
  }
`;
export const StyledHeader = styled.header<StyleProps>`
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  height: 5.2rem;
  z-index: 5;
  background-color: ${({ logged, location }) =>
    (logged && location.pathname === "/") ||
    location.pathname === "/signup" ||
    location.pathname === "/signin"
      ? "transparent"
      : "white"};
  border-bottom: ${({ logged, location }) =>
    (logged && location.pathname === "/") ||
    location.pathname === "/signup" ||
    location.pathname === "/signin"
      ? "transparent"
      : "1px solid #e1e4e7"};

  button {
    border: 2px solid #ffa101;
    height: 2.5rem;
    width: 6rem;
    border-radius: 5px;
    cursor: pointer;
    color: white;

    &:first-of-type {
      border: 2px solid #ffa101;
      background: transparent;
    }
    &:nth-of-type(2) {
      background-color: #ffa101;
      &:hover {
        background-color: #cf8300;
        border-color: #cf8300;
      }
    }
  }
`;
export const Logo = styled.img`
  cursor: pointer;
  width: 7rem;
`;

export const UserIcon = styled.div`
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
`;

export const SettingsIcon = styled(IoMdSettings)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

export const ProfileSettingsDropdown = styled.div`
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
  width: 14rem;

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

  div {
    &:last-child {
      cursor: pointer;
      &:hover {
        background-color: #fae6b1;
      }
    }
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

export const ProfileDropdownWrapper = styled.div`
  padding: 1rem;
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 2rem;
  color: #ffa101;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  display: block;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownUserIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #ffa101;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  color: white;
`;

export const Email = styled.div`
  color: #55595b;
`;
