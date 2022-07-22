import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";

const Container = styled.div``;
const Item = styled.div``;

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>(null);
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
      {todayFoods.map((food: any) => {
        return <Item>{food.name}</Item>;
      })}
    </Container>
  );
};

export default TodayFood;
