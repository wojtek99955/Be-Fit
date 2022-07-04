import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React, { useContext, useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { auth } from "../firebase";

const img = require("../assets/images/logo.png");

interface StyleProps {
  logged: any;
}

const HeaderContainer = styled.div`
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
const StyledHeader = styled.header<StyleProps>`
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  z-index: 1;
  border-bottom: ${({ logged }) =>
    logged ? "1px solid #e1e4e7" : "transparent"};

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
const Logo = styled.img`
  cursor: pointer;
  width: 7rem;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
  position: relative;
`;

const SettingsIcon = styled(IoMdSettings)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const ProfileSettingsDropdown = styled.div`
  border: 1px solid #e1e4e7;
  position: absolute;
  top: 100%;
  right: 0;
  -webkit-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  -moz-box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  z-index: 10;
  background-color: white;

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

const ProfileSettings = styled.div`
  position: relative;
`;

const Divider = styled.div`
  background-color: #e1e4e7;
  height: 1px;
`;

const ProfileDropdownWrapper = styled.div`
  padding: 1rem;
`;

const Header = () => {
  let navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleProfileMenuOpen = (e: any) => {
    e.stopPropagation();
    setOpenProfileMenu((prev) => !prev);
  };
  const handleClickOutside = (e: any) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
      setOpenProfileMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpenProfileMenu]);

  const logOut = async () => {
    await auth.signOut();
    navigate("/signin");
  };

  return (
    <StyledHeader logged={ctx?.currentUser}>
      <HeaderContainer>
        <Logo src={img}></Logo>
        <nav>
          {ctx?.currentUser ? (
            <>
              <SettingsIcon />
              <ProfileSettings>
                <UserIcon onClick={handleProfileMenuOpen} />
                {openProfileMenu ? (
                  <ProfileSettingsDropdown ref={profileMenuRef}>
                    <ProfileDropdownWrapper>
                      <div>Logged as:</div>
                      <strong>{ctx.currentUser.email}</strong>
                    </ProfileDropdownWrapper>
                    <Divider />
                    <ul>
                      <li>Profile</li>
                      <li>Statistics</li>
                      <li>My goals</li>
                    </ul>
                    <Divider />
                    <ProfileDropdownWrapper>
                      <div onClick={logOut}>Log out</div>
                    </ProfileDropdownWrapper>
                  </ProfileSettingsDropdown>
                ) : null}
              </ProfileSettings>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
