import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { useRef, useEffect, useContext } from "react";
import {
  ProfileSettingsDropdown,
  Divider,
  LogoutContainer,
  StyledLink,
  UserDataContainer,
  Email,
  DropdownUserIcon,
  UserData,
} from "./ProfileDropdownStyle";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

interface Props {
  openProfileMenu: boolean;
  setOpenProfileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userData: any;
}

const ProfileDropdown = ({
  openProfileMenu,
  setOpenProfileMenu,
  userData,
}: Props) => {
  const profileMenuRef = useRef<HTMLDivElement>(null);

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
  }, [openProfileMenu]);

  let navigate = useNavigate();
  const logOut = async () => {
    await auth.signOut();
    setOpenProfileMenu(false);
    navigate("/signin");
  };

  const toggleOpenDropdown = () => {
    setOpenProfileMenu((prev) => !prev);
  };

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <ProfileSettingsDropdown
      ref={profileMenuRef}
      onClick={toggleOpenDropdown}
      darkMode={darkMode!}
    >
      <UserDataContainer>
        <DropdownUserIcon url={userData?.avatarImg}>
          {userData?.avatarImg
            ? null
            : userData?.name?.toUpperCase().slice(0, 1)}
        </DropdownUserIcon>
        <UserData darkMode={darkMode!}>
          <strong>
            {userData?.name?.length > 16
              ? `${userData?.name?.slice(0, 17)}...`
              : userData?.name}
          </strong>
          <Email>
            {userData?.email?.length > 16
              ? `${userData?.email.slice(0, 17)}...`
              : userData?.email}
          </Email>
        </UserData>
      </UserDataContainer>

      <Divider darkMode={darkMode!} />
      <ul>
        <li>
          <StyledLink to="/settings/account">Profile</StyledLink>
        </li>
        <li>
          <StyledLink to="/my-body">My body</StyledLink>
        </li>
        <li>
          <StyledLink to="/statistics">Statistics</StyledLink>
        </li>
        <li>
          <StyledLink to="/my-goal">My goal</StyledLink>
        </li>
        <li>
          <StyledLink to="/settings/account">Settings</StyledLink>
        </li>
      </ul>
      <Divider darkMode={darkMode!} />
      <LogoutContainer onClick={logOut} darkMode={darkMode!}>
        <div>Log out</div>
      </LogoutContainer>
    </ProfileSettingsDropdown>
  );
};

export default ProfileDropdown;
