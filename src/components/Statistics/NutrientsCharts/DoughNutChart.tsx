import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { darkModeContext } from "../../../context/DarkModeContextProvider";
import { useContext } from "react";

interface Props {
  nutrients: any;
}

const DoughNutChart = ({ nutrients }: Props) => {
  ChartJS.register(Tooltip, Legend, ArcElement);

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
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
  };
  return (
    <>
      <Doughnut data={data} options={darkMode ? darkOptions : lightOptions} />
    </>
  );
};

export default DoughNutChart;
