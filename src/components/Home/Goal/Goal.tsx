import {
  Wrapper,
  StyledBox,
  StyledSettingsIcon,
  BoxWrapper,
} from "./GoalStyle";
import { StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";

const Goal = () => {
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>("");

  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/goals`));

    if (snap.exists()) {
      setData(snap.data());
      setLoading(false);
    } else {
      console.log("No such document");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledBox>
      <BoxWrapper loading={loading}>
        <StyledLink to="/my-goal">
          <StyledSettingsIcon />
        </StyledLink>
        <Wrapper loading={loading}>
          <h2>Current weight</h2>
          <p>{data.currentWeight}</p>
        </Wrapper>
        <Wrapper loading={loading}>
          <h2>Target weight</h2>
          <p>{data.goalWeight}</p>
        </Wrapper>
      </BoxWrapper>
    </StyledBox>
  );
};

export default Goal;
