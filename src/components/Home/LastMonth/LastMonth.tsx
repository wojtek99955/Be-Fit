import styled from "styled-components";
import { Box } from "../CardStyles";
import { useState, useEffect, useContext } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import NutrientsChart from "./NutrientsChart";
import CaloriesChart from "./CaloriesChart";

const StyledBox = styled(Box)`
  max-width: 1300px;
  margin: 1rem auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChangeChartDropdown = styled.div`
  color: #ffa101;
  background-color: #ffe9c5;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
`;
const DropdownItem = styled.div`
  position: absolute;
  background-color: white;
  padding: 0.3rem 0.8rem;
  left: 0;
  width: 100%;
  bottom: -2rem;
`;
const LastMonth = () => {
  const [activeChart, setActiveChart] = useState("nutrients");
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState<null | any>([]);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  useEffect(() => {
    async function getData() {
      const q = query(
        collection(db, `users/${uid}/consumedNutrients`),
        orderBy("timestamp", "desc")
      );
      const foodz: any = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return foodz.push(doc.data());
      });
      setData(foodz);
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

  return (
    <StyledBox>
      <Header>
        <h3>Last 30 days</h3>
        <ChangeChartDropdown onClick={handleOpenDropdown}>
          {activeChart === "nutrients" ? "Nutrients" : "Calories"}
          {showDropdown ? (
            <DropdownItem onClick={handleChangeChart}>
              {activeChart === "nutrients" ? "Calories" : "Nutrients"}
            </DropdownItem>
          ) : null}
        </ChangeChartDropdown>
      </Header>
      {activeChart === "nutrients" ? (
        <NutrientsChart chartData={data} />
      ) : (
        <CaloriesChart chartData={data} />
      )}
    </StyledBox>
  );
};

export default LastMonth;
