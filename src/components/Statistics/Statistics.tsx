import FitnessStats from "../../assets/svg/FitnessStats";
import StatisticsPieChartIcon from "../../assets/svg/StatisticsPieChartIcon";
import { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../AuthContext";
import { collection, getDocs, where, query } from "firebase/firestore";
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
  CaloriesChartContainer,
  Wrapper,
  StyledLi,
  NoData,
} from "./StatisticsStyle";
import DoughNutChart from "./NutrientsCharts/DoughNutChart";
import VerticalChart from "./NutrientsCharts/VerticalChart";
import CaloriesVerticalChart from "./CaloriesCharts/CaloriesVerticalChart";
import { AnimatePresence } from "framer-motion";

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
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const dropdownRef = useRef<HTMLDivElement>(null);

  async function getNutrients() {
    const foodRef = collection(db, `users/${uid}/food`);
    const q = query(foodRef, where("month", "==", selectedMonth + 1));
    const docsSnap = await getDocs(q);
    const foodz: any = [];
    docsSnap.forEach((doc) => {
      foodz.push(doc.data());
    });

    const consumedFat = foodz.reduce((acc: any, obj: any) => {
      return acc + obj.details.fat;
    }, 0);
    const consumedFiber = foodz.reduce((acc: any, obj: any) => {
      return acc + obj.details.fiber;
    }, 0);
    const consumedProtein = foodz.reduce((acc: any, obj: any) => {
      return acc + obj.details.protein;
    }, 0);
    const consumedCarbo = foodz.reduce((acc: any, obj: any) => {
      return acc + obj.details.carbo;
    }, 0);
    console.log(foodz);
    if (foodz.length >= 1) {
      setNutrients({
        fat: consumedFat.toFixed(1),
        fiber: consumedFiber.toFixed(1),
        protein: consumedProtein.toFixed(1),
        carbo: consumedCarbo.toFixed(1),
      });
    } else {
      setNutrients(null);
    }
    setLoading(false);
  }
  useEffect(() => {
    getNutrients();
  }, [selectedMonth]);

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
      <Wrapper>
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
              {selectedMonth !== null && selectedMonth >= 0
                ? monthNames[selectedMonth!]
                : monthNames[month]}
            </h2>
            {openDropdown ? <UpIcon /> : <DownIcon />}
          </DropdownHeader>
          <AnimatePresence>
            {openDropdown ? (
              <DropdownListContainer
                initial={{ y: "-50%", opacity: 0, scale: 0.5 }}
                animate={{ y: "10%", opacity: 1, scale: 1 }}
                exit={{ y: "-30%", opacity: 0, scale: 0.5 }}
              >
                <ul>
                  {monthNames.map((month, id) => {
                    return (
                      <StyledLi
                        selectedMonth={selectedMonth}
                        monthId={id}
                        key={id}
                        onClick={() => {
                          setSelectedMonth(id);
                        }}
                      >
                        {month}
                      </StyledLi>
                    );
                  })}
                </ul>
              </DropdownListContainer>
            ) : null}
          </AnimatePresence>
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
        {loading ? null : (
          <>
            {!nutrients ? (
              <NoData>No data</NoData>
            ) : (
              <>
                {activeCharts ? (
                  <Charts
                    initial={{ y: "-50%", opacity: 0, scale: 0.5 }}
                    animate={{ y: "10%", opacity: 1, scale: 1 }}
                  >
                    <Chart loading={loading}>
                      <DoughNutChart nutrients={nutrients} />
                    </Chart>
                    <Chart loading={loading}>
                      <VerticalChart nutrients={nutrients} />
                    </Chart>
                  </Charts>
                ) : (
                  <CaloriesChartContainer
                    initial={{ y: "-50%", opacity: 0, scale: 0.5 }}
                    animate={{ y: "10%", opacity: 1, scale: 1 }}
                    exit={{ y: "-30%", opacity: 0, scale: 0.5 }}
                  >
                    <CaloriesVerticalChart selectedMonth={selectedMonth} />
                  </CaloriesChartContainer>
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Statistics;
