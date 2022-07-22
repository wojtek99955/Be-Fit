import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import styled from "styled-components";
import {
  Container,
  FoodItem,
  FoodsContainer,
  Nutrients,
  Calories,
  Amount,
  Name,
  Consumed,
  DailyCalories,
} from "./TodayFoodStyle";

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>([]);
  const [consumed, setConsumed] = useState<number | null>(null);
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

    const consumedCalories = foodz.reduce((acc: any, obj: any) => {
      return acc + obj.details.kcal;
    }, 0);
    setConsumed(consumedCalories);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h2>Today</h2>
      <DailyCalories>
        <Consumed>Consumed: {consumed}</Consumed>
      </DailyCalories>
      <FoodsContainer>
        {todayFoods
          ? todayFoods.map((item: any) => {
              return (
                <FoodItem>
                  <Name>
                    <h3>{item.name}</h3>
                  </Name>
                  <Amount>
                    <span>{item.details.amount}</span>
                  </Amount>
                  <Nutrients>
                    <div>
                      Fat <span>{item.details.fat} g</span>
                    </div>
                    <div>
                      Fiber <span>{item.details.fiber} g</span>
                    </div>
                    <div>
                      Protein <span>{item.details.protein} g</span>
                    </div>
                    <div>
                      Carbo <span>{item.details.carbo} g</span>
                    </div>
                  </Nutrients>
                  <Calories>
                    <div>
                      Kcal <strong>{item.details.kcal}</strong>
                    </div>
                  </Calories>
                </FoodItem>
              );
            })
          : null}
      </FoodsContainer>
    </Container>
  );
};

export default TodayFood;
