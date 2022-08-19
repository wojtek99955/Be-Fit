import FitnessStats from "../../assets/svg/FitnessStats";
import StatisticsPieChartIcon from "../../assets/svg/StatisticsPieChartIcon";
import { useState, useEffect, useContext, useRef } from "react";
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
  ChartsBtns,
  DownIcon,
  UpIcon,
  DropdownContainer,
  DropdownListContainer,
  DropdownHeader,
} from "./StatisticsStyle";
import DoughNutChart from "./NutrientsCharts/DoughNutChart";
import VerticalChart from "./NutrientsCharts/VerticalChart";
import CaloriesVerticalChart from "./CaloriesCharts/CaloriesVerticalChart";

const date = new Date();
const month = date.getMonth();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Statistics = () => {
  const [nutrients, setNutrients] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<null | number>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setLoading(false);
  }
  useEffect(() => {
    getNutrients();
  }, []);

  const [activeCharts, setActiveCharts] = useState(true);

  const handleOpenDropdown = (e: any) => {
    setOpenDropdown((prev) => !prev);
    e.stopPropagation();
  };

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

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
      <DropdownContainer onClick={handleOpenDropdown} ref={dropdownRef}>
        <DropdownHeader>
          <h2>
            {selectedMonth ? monthNames[selectedMonth] : monthNames[month]}
          </h2>
          {openDropdown ? <UpIcon /> : <DownIcon />}
        </DropdownHeader>
        {openDropdown ? (
          <DropdownListContainer>
            <ul>
              {monthNames.map((month, id) => {
                return (
                  <li key={id} onClick={() => setSelectedMonth(id)}>
                    {month}
                  </li>
                );
              })}
            </ul>
          </DropdownListContainer>
        ) : null}
      </DropdownContainer>
      <ChartsBtns active={activeCharts}>
        <button
          onClick={() => {
            setActiveCharts(true);
          }}
        >
          Nutrients
        </button>
        <button
          onClick={() => {
            setActiveCharts(false);
          }}
        >
          Calories
        </button>
      </ChartsBtns>
      {activeCharts ? (
        <Charts>
          <Chart loading={loading}>
            <DoughNutChart nutrients={nutrients} />
          </Chart>
          <Chart loading={loading}>
            <VerticalChart nutrients={nutrients} />
          </Chart>
        </Charts>
      ) : (
        <CaloriesVerticalChart />
      )}
    </Container>
  );
};

export default Statistics;
