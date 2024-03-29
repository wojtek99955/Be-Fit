import { StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Kcal,
  StyledSettingsIcon,
  StyledBox,
  Wrapper,
} from "./DailyNutrientsStyle";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { darkModeContext } from "../../../context/DarkModeContextProvider";
ChartJS.register(Tooltip, Legend, ArcElement);

const DailyNutrients = () => {
  const [nutrients, setNutrients] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  async function getNutrients() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const snap = await getDoc(
      doc(db, "users", `${uid}/consumedNutrients/${day}${month}${year}`)
    );
    if (snap.exists()) {
      setNutrients(snap.data());
      setLoading(false);
    } else {
      setLoading(false);
    }
  }
  useEffect(() => {
    getNutrients();
  }, []);

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  const data = {
    labels: ["Fats", "Carbohydrates", "Proteins", "Fiber"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          nutrients?.fat,
          nutrients?.carbo,
          nutrients?.protein,
          nutrients?.fiber,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
    text: "cos",
  };
  return (
    <StyledBox darkMode={darkMode!}>
      <Wrapper loading={loading}>
        <StyledLink to="/track-calories">
          <StyledSettingsIcon />
        </StyledLink>
        <Doughnut
          data={data}
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
        <Kcal darkMode={darkMode!}>
          <strong>{nutrients ? nutrients?.kcal : 0}</strong>
          <span>kcal</span>
        </Kcal>
      </Wrapper>
    </StyledBox>
  );
};

export default DailyNutrients;
