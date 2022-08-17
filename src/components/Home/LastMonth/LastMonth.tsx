import { useState, useEffect, useContext, useRef } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import NutrientsChart from "./NutrientsChart";
import CaloriesChart from "./CaloriesChart";
import {
  StyledBox,
  Header,
  ChangeChartDropdown,
  DropdownItem,
  UpIcon,
  DownIcon,
  Wrapper,
} from "./LastMonthStyle";
import { NutrientsTypes } from "./ConsumedNutrientsInterface";
import { AnimatePresence } from "framer-motion";

const LastMonth = () => {
  const [activeChart, setActiveChart] = useState("nutrients");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<NutrientsTypes[] | null>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  useEffect(() => {
    async function getData() {
      const q = query(
        collection(db, `users/${uid}/consumedNutrients`),
        orderBy("timestamp", "asc")
      );
      const foodz: any = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return foodz.push(doc.data());
      });
      setData(foodz.slice(0, 30));
      setLoading(false);
    }
    getData();
  }, [uid]);

  const handleOpenDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleChangeChart = () => {
    activeChart === "nutrients"
      ? setActiveChart("calories")
      : setActiveChart("nutrients");
  };

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <StyledBox>
      <Wrapper loading={loading}>
        <Header>
          <h2>Last 30 days</h2>
          <ChangeChartDropdown onClick={handleOpenDropdown} ref={dropdownRef}>
            {activeChart === "nutrients" ? "Nutrients" : "Calories"}
            {showDropdown ? <UpIcon /> : <DownIcon />}
            <AnimatePresence>
              {showDropdown ? (
                <DropdownItem
                  onClick={handleChangeChart}
                  initial={{ y: "30%", opacity: 0, scale: 0.5 }}
                  animate={{ y: "120%", opacity: 1, scale: 1 }}
                  exit={{ y: "0%", opacity: 0, scale: 0.5 }}
                >
                  {activeChart === "nutrients" ? "Calories" : "Nutrients"}
                </DropdownItem>
              ) : null}
            </AnimatePresence>
          </ChangeChartDropdown>
        </Header>
        {activeChart === "nutrients" ? (
          <NutrientsChart chartData={data} />
        ) : (
          <CaloriesChart chartData={data} />
        )}
      </Wrapper>
    </StyledBox>
  );
};

export default LastMonth;
