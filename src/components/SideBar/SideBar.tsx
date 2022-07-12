import { useEffect, useContext, useState } from "react";
import {
  Container,
  StyledLink,
  HomeIcon,
  GoalIcon,
  CalculatorIcon,
  FoodCalories,
  StyledUserIcon,
  User,
  UserData,
} from "./SideBarStyle";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthContext";

const SideBar = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  return (
    <Container>
      <User>
        <StyledUserIcon url={data.avatarImg}>
          {data.avatarImg ? null : data?.name?.toUpperCase().slice(0, 1)}
        </StyledUserIcon>
        <UserData>
          <strong>
            {data?.name?.length > 16
              ? `${data.name.slice(0, 17)}...`
              : data.name}
          </strong>
          <span>
            {data?.email?.length > 16
              ? `${data.email.slice(0, 17)}...`
              : data.email}
          </span>
        </UserData>
      </User>
      <nav>
        <ul>
          <li>
            <StyledLink to="/home">
              <HomeIcon />
              Home page
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <GoalIcon />
              Your goals
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/calculators">
              <CalculatorIcon />
              Calculators
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <FoodCalories />
              Check calories
            </StyledLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
