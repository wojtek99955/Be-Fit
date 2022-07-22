import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 3rem;
  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;
const Item = styled.div`
  max-width: 800px;
  margin: auto;
`;

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>([]);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  async function getData() {
    const date = await new Date();
    const month = (await date.getMonth()) + 1;
    const day = await date.getDate();
    const year = await date.getFullYear();

    const foodRef = await collection(db, `users/${uid}/food`);
    const docsSnap = await getDocs(foodRef);
    const foodz: any = [];
    await docsSnap.forEach((doc) => {
      foodz.push(doc.data());
    });

    const filteredFoods = foodz.filter((item: any) => {
      return item.date === `${day}${month}${year}`;
    });
    setTodayFoods(filteredFoods);
    console.log(filteredFoods);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h2>Today</h2>
      {todayFoods
        ? todayFoods.map((item: any) => {
            return <Item>{item.name}</Item>;
          })
        : null}
    </Container>
  );
};

export default TodayFood;
