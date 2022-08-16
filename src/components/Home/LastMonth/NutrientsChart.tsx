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

const NutrientsChart = ({ chartData }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = chartData?.map((data: NutrientsTypes) => {
    return data.dayMonth;
  });

  const fat = chartData?.map((data: NutrientsTypes) => {
    return data.fat;
  });
  const protein = chartData?.map((data: NutrientsTypes) => {
    return data.protein;
  });
  const carbohydrates = chartData?.map((data: NutrientsTypes) => {
    return data.carbo;
  });
  const fiber = chartData?.map((data: NutrientsTypes) => {
    return data.fiber;
  });

  const dataChart = {
    labels,
    datasets: [
      {
        label: "Fat",
        data: fat,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Protein",
        data: protein,
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Carbohydrates",
        data: carbohydrates,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Fiber",
        data: fiber,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  return (
    <div>
      <Line style={{ maxHeight: "13rem" }} options={options} data={dataChart} />
    </div>
  );
};

export default NutrientsChart;
