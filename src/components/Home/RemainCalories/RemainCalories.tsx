import { Box, SettingsIcon, StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import styled from "styled-components";

interface Loading {
  loading: boolean;
}

const Calories = styled.div<Loading>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ loading }) => (loading ? "0" : "1")};

  strong {
    font-size: 2.5rem;
  }
  span {
    color: #a29e9e;
  }
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const RemainCalories = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [consumedKcal, setConsumedKcal] = useState<null | number>(null);
  const [calorieIntake, setCalorieIntake] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function getConsumedKcal() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const snap = await getDoc(
      doc(db, "users", `${uid}/consumedNutrients/${day}${month}${year}`)
    );
    if (snap.exists()) {
      setConsumedKcal(snap.data().kcal);
      setLoading(false);
    } else {
      console.log("No such document");
    }
  }

  async function getCalorieIntake() {
    const snap = await getDoc(
      doc(db, "users", `${uid}/body-details/calorie-intake`)
    );
    if (snap.exists()) {
      setCalorieIntake(snap.data().calorieIntake);
    } else {
      console.log("No such document");
    }
  }

  useEffect(() => {
    getConsumedKcal();
    getCalorieIntake();
  }, []);

  return (
    <Box>
      <StyledLink to="/track-calories">
        <StyledSettingsIcon />
      </StyledLink>
      <Calories loading={loading}>
        {calorieIntake - consumedKcal! <= 0 ? (
          <strong>0</strong>
        ) : (
          <strong>{calorieIntake - consumedKcal!}</strong>
        )}
        <span>calories left</span>
      </Calories>
    </Box>
  );
};

export default RemainCalories;
