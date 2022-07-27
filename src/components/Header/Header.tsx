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
  LogoutContainer,
  Divider,
  AddIcon,
  StyledLink,
  UserData,
  UserDataContainer,
  DropdownUserIcon,
  Email,
  Icons,
  Nav,
  LoggedNavItem,
  HamburgerIcon,
  HamburgerContainer,
} from "./HeaderStyle";
import { doc, onSnapshot } from "firebase/firestore";
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

  console.log();
  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  const location = useLocation();
  const goHome = () => {
    ctx?.currentUser ? navigate("/home") : navigate("/");
  };
  return (
    <StyledHeader location={location}>
      <HeaderContainer>
        {location.pathname === "/" ||
        location.pathname === "/signup" ||
        location.pathname === "/signin" ||
        location.pathname === "/forgot-password" ? null : (
          <HamburgerContainer>
            <HamburgerIcon />
          </HamburgerContainer>
        )}
        <Logo src={img} onClick={goHome}></Logo>
        <nav>
          {location.pathname === "/" ||
          location.pathname === "/signup" ||
          location.pathname === "/signin" ||
          location.pathname === "/forgot-password" ? (
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
              <Nav>
                <LoggedNavItem>
                  <StyledLink to="/calculators">Calculators</StyledLink>
                </LoggedNavItem>
                <LoggedNavItem>
                  <StyledLink to="/track-calories">Track calories</StyledLink>
                </LoggedNavItem>
              </Nav>
              <Icons>
                <SettingsIcon
                  onClick={() => {
                    navigate("/settings");
                  }}
                />
                <AddIcon
                  onClick={() => {
                    navigate("/track-calories");
                  }}
                />
                <ProfileSettings>
                  <UserIcon
                    url={data?.avatarImg}
                    onClick={handleProfileMenuOpen}
                  >
                    {data?.avatarImg
                      ? null
                      : data?.name?.toUpperCase().slice(0, 1)}
                  </UserIcon>
                  {openProfileMenu ? (
                    <ProfileSettingsDropdown ref={profileMenuRef}>
                      <UserDataContainer>
                        <DropdownUserIcon url={data?.avatarImg}>
                          {data?.avatarImg
                            ? null
                            : data?.name?.toUpperCase().slice(0, 1)}
                        </DropdownUserIcon>
                        <UserData>
                          <strong>
                            {data?.name?.length > 16
                              ? `${data?.name?.slice(0, 17)}...`
                              : data?.name}
                          </strong>
                          <Email>
                            {data?.email?.length > 16
                              ? `${data?.email.slice(0, 17)}...`
                              : data?.email}
                          </Email>
                        </UserData>
                      </UserDataContainer>

                      <Divider />
                      <ul>
                        <li>
                          <StyledLink to="/settings/account">
                            Profile
                          </StyledLink>
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
                      </ul>
                      <Divider />
                      <LogoutContainer onClick={logOut}>
                        <div>Log out</div>
                      </LogoutContainer>
                    </ProfileSettingsDropdown>
                  ) : null}
                </ProfileSettings>
              </Icons>
            </>
          )}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
