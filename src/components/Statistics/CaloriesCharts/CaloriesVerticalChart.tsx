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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CaloriesVerticalChart = () => {
  const [data, setData] = useState<null | any>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  useEffect(() => {
    async function getData() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const q = await query(
        collection(db, `users/${uid}/consumedNutrients`),
        where("month", "==", month),
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
  }, []);

  const labels = data?.map((data: any) => {
    return data.dayMonth;
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  const calories = data?.map((data: any) => {
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
      <Line style={{ maxHeight: "13rem" }} options={options} data={dataChart} />
    </div>
  );
};

export default CaloriesVerticalChart;
