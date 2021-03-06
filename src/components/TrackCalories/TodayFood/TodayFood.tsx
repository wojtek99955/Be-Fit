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
  ConsumedNutrients,
} from "./TodayFoodStyle";

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>([]);
  const [consumed, setConsumed] = useState<any>(null);
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
    setConsumed({
      kcal: consumedCalories.toFixed(1),
      fat: consumedFat.toFixed(1),
      fiber: consumedFiber.toFixed(1),
      protein: consumedProtein.toFixed(1),
      carbo: consumedCarbo.toFixed(1),
    });
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(consumed);
  return (
    <Container>
      <h2>Today</h2>
      <DailyCalories>
        <Consumed>
          <div>
            Kcal: <span>{consumed?.kcal}</span>
          </div>
          <ConsumedNutrients>
            <div>
              Fat <span>{consumed?.fat}</span>
            </div>
            <div>
              Protein <span>{consumed?.protein}</span>
            </div>
            <div>
              Carbo <span>{consumed?.carbo}</span>
            </div>
            <div>
              Fiber <span>{consumed?.fiber}</span>
            </div>
          </ConsumedNutrients>
        </Consumed>
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
