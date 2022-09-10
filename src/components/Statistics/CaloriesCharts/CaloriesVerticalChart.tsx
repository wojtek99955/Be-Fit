import { query, getDocs, collection, where } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { db } from "../../../firebase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { NutrientsTypes } from "../../../assets/interfaces/ConsumedNutrientsInterface";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  selectedMonth: number;
}

const CaloriesVerticalChart = ({ selectedMonth }: Props) => {
  const [data, setData] = useState<null | NutrientsTypes[]>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  useEffect(() => {
    async function getData() {
      const date = new Date();
      const year = date.getFullYear();

      const q = await query(
        collection(db, `users/${uid}/consumedNutrients`),
        where("month", "==", selectedMonth + 1),
        where("year", "==", year)
      );
      const foodz: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return foodz.push(doc.data());
      });
      setData(foodz);
      console.log(foodz + "foodz");
    }
    getData();
  }, [selectedMonth]);

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  const labels = data?.map((data: NutrientsTypes) => {
    return data.dayMonth;
  });
  const darkOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  const lightOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        title: {
          color: "orange",
        },
      },
    },
  };
  const calories = data?.map((data: NutrientsTypes) => {
    return data.kcal;
  });
  console.log(data);
  const dataChart = {
    labels,
    datasets: [
      {
        label: "Calories",
        data: calories,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div>
      <Line
        style={{ maxHeight: "20rem" }}
        options={darkMode ? darkOptions : lightOptions}
        data={dataChart}
      />
    </div>
  );
};

export default CaloriesVerticalChart;
