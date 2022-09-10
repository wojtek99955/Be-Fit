import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { darkModeContext } from "../../../context/DarkModeContextProvider";
import { useContext } from "react";

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface Props {
  nutrients: any;
}

const VerticalChart = ({ nutrients }: Props) => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  const horizontalData = {
    labels: [""],

    datasets: [
      {
        label: "Fats",
        data: [nutrients?.fat],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Carbohydrates",
        data: [nutrients?.carbo],
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Proteins",
        data: [nutrients?.protein],
        backgroundColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Fiber",
        data: [nutrients?.fiber],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
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
      },
    },
  };
  return (
    <>
      <Bar
        data={horizontalData}
        options={darkMode ? darkOptions : lightOptions}
      />
    </>
  );
};

export default VerticalChart;
