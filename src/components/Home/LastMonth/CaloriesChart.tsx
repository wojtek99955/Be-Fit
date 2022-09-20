import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { NutrientsTypes } from "../../../assets/interfaces/ConsumedNutrientsInterface";
import { ChartWrapper } from "./LastMonthStyle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 4,
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
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        fill: {
          target: "origin",
        },
      },
    ],
  };

  return (
    <ChartWrapper>
      <Line style={{ maxHeight: "13rem" }} options={options} data={dataChart} />
    </ChartWrapper>
  );
};

export default CaloriesChart;
