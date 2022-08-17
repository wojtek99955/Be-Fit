import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

interface Props {
  nutrients: any;
}

const DoughNutChart = ({ nutrients }: Props) => {
  ChartJS.register(Tooltip, Legend, ArcElement);

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
  return (
    <>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </>
  );
};

export default DoughNutChart;