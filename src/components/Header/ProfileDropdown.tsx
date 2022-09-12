import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useRef, useEffect } from "react";

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  display: block;
  display: flex;
  align-items: center;
`;

export const UserData = styled.div``;

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
  return (
    <ProfileSettingsDropdown ref={profileMenuRef} onClick={toggleOpenDropdown}>
      <UserDataContainer>
        <DropdownUserIcon url={userData?.avatarImg}>
          {userData?.avatarImg
            ? null
            : userData?.name?.toUpperCase().slice(0, 1)}
        </DropdownUserIcon>
        <UserData>
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

      <Divider />
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
      <Divider />
      <LogoutContainer onClick={logOut}>
        <div>Log out</div>
      </LogoutContainer>
    </ProfileSettingsDropdown>
  );
};

export default ProfileDropdown;
