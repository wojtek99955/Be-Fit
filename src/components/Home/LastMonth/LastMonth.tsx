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

  const options = {
    responsive: true,
    plugins: {},
  };

  const labels = data.map((data: any) => {
    return [data.dayMonth];
  });
  console.log(data);
  const caloriess = data?.map((data: any) => {
    return data.kcal;
  });
  const fat = data?.map((data: any) => {
    return data.fat;
  });
  const protein = data?.map((data: any) => {
    return data.protein;
  });

  const dataChart = {
    labels,
    datasets: [
      {
        label: "Calories",
        data: caloriess,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Fat",
        data: fat,
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Protein",
        data: protein,
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };

  return (
    <StyledBox>
      <h3>Last 30 days</h3>
      {data?.map((data: any) => {
        return <p>{data.kcal}</p>;
      })}
      <Line
        style={{ maxWidth: "800px", maxHeight: "400px" }}
        options={options}
        data={dataChart}
      />
    </StyledBox>
  );
};

export default LastMonth;
