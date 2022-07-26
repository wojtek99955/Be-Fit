import { Box, StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Calories, StyledSettingsIcon } from "./RemainCaloriesStyle";

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
      {consumedKcal ? (
        <Calories loading={loading}>
          <>
            {calorieIntake - consumedKcal! <= 0 ? (
              <strong>0</strong>
            ) : (
              <strong>{calorieIntake - consumedKcal!}</strong>
            )}

            <span>calories left</span>
          </>
        </Calories>
      ) : (
        <Calories>
          <strong>{calorieIntake}</strong>
          <span>calories left</span>
        </Calories>
      )}
    </Box>
  );
};

export default RemainCalories;
