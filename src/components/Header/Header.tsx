import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import React, { useContext, useState, useRef, useEffect } from "react";
import { auth } from "../../firebase";
import {
  HeaderContainer,
  StyledHeader,
  Logo,
  UserIcon,
  SettingsIcon,
  ProfileSettingsDropdown,
  ProfileSettings,
  ProfileDropdownWrapper,
  Divider,
} from "./HeaderStyle";

const img = require("../../assets/images/logo.png");

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
                <UserIcon onClick={handleProfileMenuOpen}>
                  {ctx.currentUser.email.slice(0, 1).toUpperCase()}
                </UserIcon>
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
