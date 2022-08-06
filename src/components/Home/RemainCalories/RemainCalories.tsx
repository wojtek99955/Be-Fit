import { Box, StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Calories,
  StyledSettingsIcon,
  ChartWrapper,
} from "./RemainCaloriesStyle";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
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

  const chartData = {
    labels: ["Daily intake", "Calories left"],
    datasets: [
      {
        label: "# of Votes",
        data: [calorieIntake, calorieIntake - consumedKcal!],
        backgroundColor: ["#e4e7e8", "#00C579"],
      },
    ],
    text: "cos",
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledLink to="/track-calories">
        <StyledSettingsIcon />
      </StyledLink>
      <Doughnut
        style={{ position: "relative", zIndex: 2 }}
        data={chartData}
        options={{
          responsive: true,
          cutout: "60%",
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
