import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

interface StyleProps {
  logged: any;
  location: any;
}

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1.5rem;
  }
`;
export const StyledHeader = styled.header<StyleProps>`
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  z-index: 1;
  border-bottom: ${({ logged, location }) =>
    logged && location.pathname === "/home"
      ? "1px solid #e1e4e7"
      : "transparent"};

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
  border: 1px solid #e1e4e7;
  position: absolute;
  top: 100%;
  right: 0;
  -webkit-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  -moz-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  z-index: 10;
  background-color: white;
  width: 12rem;

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    padding: 1rem;
    &:hover {
      background-color: #fae6b1;
    }
  }

  strong {
    display: block;
    padding-top: 1rem;
  }

  div {
    &:last-of-type {
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
