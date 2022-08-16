import styled from "styled-components";
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
import { NutrientsTypes } from "./ConsumedNutrientsInterface";

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
  chartData: NutrientsTypes[] | null;
}

const CaloriesChart = ({ chartData }: Props) => {
  const labels = chartData?.map((data: NutrientsTypes) => {
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

  const calories = chartData?.map((data: NutrientsTypes) => {
    return data.kcal;
  });

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

export default CaloriesChart;
