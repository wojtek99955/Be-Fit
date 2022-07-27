import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

interface StyleProps {
  location: any;
}

interface ImageProps {
  url: string;
}

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
  }
`;
export const StyledHeader = styled.header<StyleProps>`
  position: fixed;
  width: 100%;
  padding: 0rem 0;
  height: 3.5rem;
  z-index: 5;
  align-items: center;
  box-shadow: ${({ location }) =>
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/signin"
      ? "transparent"
      : "0 2px 4px -1px rgba(57, 76, 96, 0.15)"};
  border-bottom: ${({ location }) =>
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
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

export const UserData = styled.div``;

export const DropdownUserIcon = styled.div<ImageProps>`
  width: 2.5rem;
  height: 2.5rem;
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
  gap: 1.2rem;
`;

export const Nav = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LoggedNavItem = styled.div`
  border: none;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    border-radius: 8px;
    padding: 0.4rem 0.8rem;

    &:hover {
      background-color: #f0f2f2;
    }
    &:active {
      background-color: #e4e7e8;
    }
  }
  a {
    border-radius: 8px;
    padding: 0.4rem 0.8rem;

    &:hover {
      background-color: #f0f2f2;
    }
    &:active {
      background-color: #e4e7e8;
    }
  }
`;

export const LoggedHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
