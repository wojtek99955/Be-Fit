import styled from "styled-components";
import { Box } from "../CardStyles";
import { useState, useEffect, useContext } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
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
import NutrientsChart from "./NutrientsChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StyledBox = styled(Box)`
  max-width: 1300px;
  margin: 1rem auto;
`;

const LastMonth = () => {
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

  return (
    <StyledBox>
      <h3>Last 30 days</h3>
      <NutrientsChart chartData={data} />
    </StyledBox>
  );
};

export default LastMonth;
