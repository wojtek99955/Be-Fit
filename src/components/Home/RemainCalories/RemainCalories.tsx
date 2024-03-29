import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Calories,
  StyledSettingsIcon,
  StyledLink,
  StyledBox,
  Wrapper,
} from "./RemainCaloriesStyle";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { darkModeContext } from "../../../context/DarkModeContextProvider";
ChartJS.register(Tooltip, Legend, ArcElement);

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
      setConsumedKcal(0);
      setLoading(false);
    }
  }

  async function getCalorieIntake() {
    const snap = await getDoc(
      doc(db, "users", `${uid}/body-details/calorie-intake`)
    );
    if (snap.exists()) {
      setCalorieIntake(snap.data().calorieIntake);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    getConsumedKcal();
    getCalorieIntake();
  }, []);

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  const remainingCalories = calorieIntake - consumedKcal!;

  const chartData = {
    labels: ["Consumed calories", "Remaining calories"],
    datasets: [
      {
        data: [consumedKcal, remainingCalories],
        backgroundColor: ["#e4e7e8", "#00C579"],
      },
    ],
  };

  return (
    <StyledBox darkMode={darkMode!}>
      <Wrapper loading={loading}>
        <StyledLink to="/track-calories">
          <StyledSettingsIcon />
        </StyledLink>
        {remainingCalories > 0 ? (
          <Doughnut
            style={{ position: "relative", zIndex: 2 }}
            data={chartData}
            options={{
              responsive: true,
              cutout: "65%",
              plugins: {
                legend: {
                  display: false,
                },
              },
              elements: {
                arc: {
                  borderWidth: 3,
                },
              },
            }}
          />
        ) : null}
        {consumedKcal ? (
          <Calories darkMode={darkMode!}>
            <>
              {consumedKcal ? (
                <strong>
                  {calorieIntake - consumedKcal > 0
                    ? calorieIntake - consumedKcal
                    : 0}
                </strong>
              ) : (
                <strong>0</strong>
              )}

              <span>calories left</span>
            </>
          </Calories>
        ) : (
          <Calories darkMode={darkMode!}>
            <strong>{calorieIntake}</strong>
            <span>calories left</span>
          </Calories>
        )}
      </Wrapper>
    </StyledBox>
  );
};

export default RemainCalories;
