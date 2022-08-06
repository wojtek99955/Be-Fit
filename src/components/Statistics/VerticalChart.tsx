import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface Props {
  nutrients: any;
}

const VerticalChart = ({ nutrients }: Props) => {
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
  return (
    <>
      <Bar
        data={horizontalData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </>
  );
};

export default VerticalChart;
