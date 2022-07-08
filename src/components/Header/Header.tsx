import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext, useState, useRef, useEffect } from "react";
import { auth } from "../../firebase";
import { useLocation } from "react-router-dom";
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
  AddIcon,
  StyledLink,
  UserData,
  UserDataContainer,
  DropdownUserIcon,
  Email,
} from "./HeaderStyle";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { updateProfile } from "firebase/auth";

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
    setOpenProfileMenu(false);
    navigate("/signin");
  };
  const [data, setData] = useState<any>("");
  const uid: string = ctx?.currentUser?.uid;

  console.log();
  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  const location = useLocation();
  return (
    <StyledHeader logged={ctx?.currentUser} location={location}>
      <HeaderContainer>
        <Logo src={img}></Logo>
        <nav>
          {(ctx?.currentUser && location.pathname === "/") ||
          location.pathname === "/signup" ||
          location.pathname === "/signin" ? (
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
          ) : (
            <>
              <SettingsIcon
                onClick={() => {
                  navigate("/settings");
                }}
              />
              <AddIcon />
              <ProfileSettings>
                <UserIcon url={data?.avatarImg} onClick={handleProfileMenuOpen}>
                  {data?.name?.slice(0, 1).toUpperCase()}
                </UserIcon>
                {openProfileMenu ? (
                  <ProfileSettingsDropdown ref={profileMenuRef}>
                    <UserDataContainer>
                      <DropdownUserIcon>
                        {data?.name?.slice(0, 1).toUpperCase()}
                      </DropdownUserIcon>
                      <UserData>
                        <strong>{data.name}</strong>
                        <Email>{data.email} </Email>
                      </UserData>
                    </UserDataContainer>

                    <Divider />
                    <ul>
                      <li>
                        <StyledLink to="/profile">Profile</StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/my-body">My body</StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/statistics">Statistics</StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/my-goals">My goals</StyledLink>
                      </li>
                    </ul>
                    <Divider />
                    <ProfileDropdownWrapper onClick={logOut}>
                      <div>Log out</div>
                    </ProfileDropdownWrapper>
                  </ProfileSettingsDropdown>
                ) : null}
              </ProfileSettings>
            </>
          )}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
