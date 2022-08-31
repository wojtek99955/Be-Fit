import { useEffect, useContext, useState } from "react";
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
} from "./SideBarMobileStyle";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthContext";
import { useLocation } from "react-router-dom";
import SettingsSideBar from "../AccountSettings/SettingsSideBar";
import { AnimatePresence } from "framer-motion";

interface Props {
  showSideBarMobile: boolean;
  setShowSideBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarMobile = ({ showSideBarMobile, setShowSideBarMobile }: Props) => {
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

  return (
    <AnimatePresence>
      {location.pathname === "/signin" ||
      location.pathname === "/" ||
      location.pathname === "/signup" ||
      !showSideBarMobile ? null : (
        <Container
          initial={{ left: "-100%" }}
          animate={{ left: 0 }}
          exit={{ left: "-100%" }}
          transition={{ type: "ease-in-out" }}
        >
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
