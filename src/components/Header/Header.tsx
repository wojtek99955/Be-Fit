import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import React, { useContext, useState, useRef, useEffect } from "react";
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
} from "./HeaderStyle";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
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
  console.log(uid);
  console.log(data.name);

  console.log();
  useEffect(() => {
    async function getData() {
      const snap = await getDoc(doc(db, "users", `${uid}`));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data());
      } else {
        console.log("No such document");
      }
    }
    getData();
  }, [uid]);

  console.log(uid);
  const location = useLocation();
  console.log(location);
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
              <SettingsIcon />
              <AddIcon />
              <ProfileSettings>
                <UserIcon onClick={handleProfileMenuOpen}>
                  {ctx?.currentUser?.email?.slice(0, 1).toUpperCase()}
                </UserIcon>
                {openProfileMenu ? (
                  <ProfileSettingsDropdown ref={profileMenuRef}>
                    <ProfileDropdownWrapper>
                      <div>Logged as: </div>
                      <strong>{data.name}</strong>
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
          )}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
