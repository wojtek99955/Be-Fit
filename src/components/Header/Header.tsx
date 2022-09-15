import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext, useState, useEffect } from "react";
import {
  HeaderContainer,
  StyledHeader,
  Logo,
  UserIcon,
  SettingsIcon,
  ProfileSettings,
  AddIcon,
  StyledLink,
  Icons,
  Nav,
  LoggedNavItem,
  HamburgerIcon,
  HamburgerContainer,
  DownIcon,
  Calculators,
  CalculatorsDropdown,
  IconContainer,
} from "./HeaderStyle";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { darkModeContext } from "../../context/DarkModeContextProvider";

const img = require("../../assets/images/logo.png");

interface Props {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSideBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setShowSideBar, setShowSideBarMobile }: Props) => {
  let navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openCalculatorsDropdown, setOpenCalculatorsDropdown] = useState(false);

  const handleProfileMenuOpen = (e: any) => {
    e.stopPropagation();
    setOpenProfileMenu((prev) => !prev);
  };

  const [userData, setUserData] = useState<any>("");
  const uid: string = ctx?.currentUser?.uid;

  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setUserData(doc.data());
    });
  }, [uid]);

  const goHome = () => {
    ctx?.currentUser ? navigate("/home") : navigate("/");
  };
  const toggleCalcDropdown = () => {
    setOpenCalculatorsDropdown((prev) => !prev);
  };
  const toggleSideBar = () => {
    if (document.documentElement.clientWidth >= 1024) {
      setShowSideBar((prev) => !prev);
    } else {
      setShowSideBarMobile((prev) => !prev);
    }
  };

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <StyledHeader>
      <HeaderContainer>
        <HamburgerContainer onClick={toggleSideBar}>
          <HamburgerIcon />
        </HamburgerContainer>

        <Logo src={img} onClick={goHome}></Logo>
        <nav>
          <Nav>
            <LoggedNavItem>
              <Calculators
                onMouseEnter={toggleCalcDropdown}
                onMouseLeave={toggleCalcDropdown}
              >
                <StyledLink to="/calculators">
                  Calculators <DownIcon />
                </StyledLink>
                {openCalculatorsDropdown ? (
                  <CalculatorsDropdown darkMode={darkMode!}>
                    <ul>
                      <li>
                        <StyledLink to="/calculators/body-calculators">
                          Body calculators
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/calculators/activity-calculators">
                          Activity calculators
                        </StyledLink>
                      </li>
                    </ul>
                  </CalculatorsDropdown>
                ) : null}
              </Calculators>
            </LoggedNavItem>
            <LoggedNavItem>
              <StyledLink to="/track-calories">Track calories</StyledLink>
            </LoggedNavItem>
            <LoggedNavItem>
              <StyledLink to="/calories-calculator">Check calories</StyledLink>
            </LoggedNavItem>
            <LoggedNavItem>
              <StyledLink to="/statistics">Statistics</StyledLink>
            </LoggedNavItem>
          </Nav>
          <Icons>
            <IconContainer>
              <SettingsIcon
                onClick={() => {
                  navigate("/settings/account");
                }}
              />
            </IconContainer>
            <IconContainer>
              <AddIcon
                onClick={() => {
                  navigate("/track-calories");
                }}
              />
            </IconContainer>
            <ProfileSettings>
              <UserIcon
                url={userData?.avatarImg}
                onClick={handleProfileMenuOpen}
              >
                {userData?.avatarImg
                  ? null
                  : userData?.name?.toUpperCase().slice(0, 1)}
              </UserIcon>
              {openProfileMenu ? (
                <ProfileDropdown
                  openProfileMenu={openProfileMenu}
                  setOpenProfileMenu={setOpenProfileMenu}
                  userData={userData}
                />
              ) : null}
            </ProfileSettings>
          </Icons>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
