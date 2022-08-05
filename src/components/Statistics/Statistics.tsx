import FitnessStats from "../../assets/svg/FitnessStats";
import StatisticsPieChartIcon from "../../assets/svg/StatisticsPieChartIcon";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  Container,
  Header,
  FitnessStatsIconContainer,
  PieChartIconContainer,
  Chart,
  Charts,
} from "./StatisticsStyle";
import DoughNutChart from "./DoughNutChart";

const Statistics = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  );

  const [nutrients, setNutrients] = useState<any>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  async function getNutrients() {
    const date = new Date();
    const month = date.getMonth() + 1;

    const foodRef = await collection(db, `users/${uid}/food`);
    const docsSnap = await getDocs(foodRef);
    const foodz: any = [];
    await docsSnap.forEach((doc) => {
      foodz.push(doc.data());
    });
    const filteredFoods = foodz.filter((item: any) => {
      return item.month === month;
    });

    const consumedFat = filteredFoods.reduce((acc: any, obj: any) => {
      return acc + obj.details.fat;
    }, 0);
    const consumedFiber = filteredFoods.reduce((acc: any, obj: any) => {
      return acc + obj.details.fiber;
    }, 0);
    const consumedProtein = filteredFoods.reduce((acc: any, obj: any) => {
      return acc + obj.details.protein;
    }, 0);
    const consumedCarbo = filteredFoods.reduce((acc: any, obj: any) => {
      return acc + obj.details.carbo;
    }, 0);
    setNutrients({
      fat: consumedFat.toFixed(1),
      fiber: consumedFiber.toFixed(1),
      protein: consumedProtein.toFixed(1),
      carbo: consumedCarbo.toFixed(1),
    });
  }
  useEffect(() => {
    getNutrients();
  }, []);

  const horizontalData = {
    labels: ["Nutrients"],

    datasets: [
      {
        label: "Fat",
        data: [nutrients?.fat],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Carbo",
        data: [nutrients?.carbo],
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Protein",
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
    <Container>
      <Header>
        <FitnessStatsIconContainer>
          <FitnessStats />
        </FitnessStatsIconContainer>
        <h1>Monthly statistics</h1>
        <PieChartIconContainer>
          <StatisticsPieChartIcon />
        </PieChartIconContainer>
      </Header>
      <h2>This month</h2>
      <Charts>
        <Chart>
          <DoughNutChart nutrients={nutrients} />
        </Chart>
        <Chart>
          <Bar
            data={horizontalData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "Whom'st let the dogs out",
                },
              },
            }}
          />
        </Chart>
      </Charts>
    </Container>
  );
};

export default Statistics;
