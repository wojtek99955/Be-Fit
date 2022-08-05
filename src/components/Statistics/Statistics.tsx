import styled from "styled-components";
import FitnessStats from "../../assets/svg/FitnessStats";
import StatisticsPieChartIcon from "../../assets/svg/StatisticsPieChartIcon";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const Container = styled.section`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: white;
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Header = styled.div`
  background-color: #00c579;
  height: 15rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  position: relative;
  h1 {
    font-size: 2.5rem;
    position: relative;
    z-index: 2;
  }
`;

const FitnessStatsIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const PieChartIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  right: 10%;
  top: 18%;
`;

const DoughnutChart = styled.div`
  width: 20rem;
  height: 20rem;
  margin: auto;
`;

const Charts = styled.div`
  margin: 4rem 0;
`;

const Statistics = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

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

  const data = {
    labels: ["Fat", "Carbo", "Protein", "Fiber"],
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
        <DoughnutChart>
          <Doughnut data={data} />
        </DoughnutChart>
      </Charts>
    </Container>
  );
};

export default Statistics;
