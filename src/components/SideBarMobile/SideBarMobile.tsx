import { useEffect, useContext, useState, useRef } from "react";
import {
  Container,
  StyledNavLink,
  HomeIcon,
  GoalIcon,
  CalculatorIcon,
  FoodCalories,
  StyledUserIcon,
  User,
  UserData,
  WeightIcon,
  Background,
} from "./SideBarMobileStyle";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthContext";
import { useLocation } from "react-router-dom";
import SettingsSideBar from "../AccountSettings/SettingsSideBar";
import { AnimatePresence } from "framer-motion";

interface Props {
  showSideBar: boolean;
  showSideBarMobile: boolean;
  setShowSideBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarMobile = ({
  showSideBar,
  showSideBarMobile,
  setShowSideBarMobile,
}: Props) => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  let location = useLocation();

  const closeSideBar = () => {
    setShowSideBarMobile(false);
  };
  const sideBarRef = useRef<HTMLDivElement>(null);
  const clickOutsideToClose = (e: any) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setShowSideBarMobile(false);
    }
  };
  // useEffect(() => {
  //   document.addEventListener("click", clickOutsideToClose);

  //   return () => {
  //     document.removeEventListener("click", clickOutsideToClose);
  //   };
  // }, []);

  return (
    <AnimatePresence>
      {location.pathname === "/signin" ||
      location.pathname === "/" ||
      location.pathname === "/signup" ||
      !showSideBarMobile ? null : (
        <Container
          ref={sideBarRef}
          initial={{ left: "-100%" }}
          animate={{ left: 0 }}
          exit={{ left: "-100%" }}
          transition={{ type: "ease-in-out" }}
        >
          <Background
            onClick={closeSideBar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <User>
            <StyledUserIcon url={data?.avatarImg}>
              {data?.avatarImg ? null : data?.name?.toUpperCase().slice(0, 1)}
            </StyledUserIcon>
            <UserData>
              <strong>
                {data?.name?.length > 16
                  ? `${data.name.slice(0, 17)}...`
                  : data?.name}
              </strong>
              <span>
                {data?.email?.length > 16
                  ? `${data.email?.slice(0, 17)}...`
                  : data?.email}
              </span>
            </UserData>
          </User>
          {location.pathname === "/settings/account" ||
          location.pathname === "/settings/security" ||
          location.pathname === "/settings/preferences" ? (
            <SettingsSideBar />
          ) : (
            <nav>
              <ul onClick={closeSideBar}>
                <li>
                  <StyledNavLink to="/home">
                    <HomeIcon />
                    Home page
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/my-goal">
                    <GoalIcon />
                    My goal
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/calculators">
                    <CalculatorIcon />
                    Calculators
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/calories-calculator">
                    <FoodCalories />
                    Check calories
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/track-calories">
                    <WeightIcon />
                    Track Calories
                  </StyledNavLink>
                </li>
              </ul>
            </nav>
          )}
        </Container>
      )}
    </AnimatePresence>
  );
};

export default SideBarMobile;
