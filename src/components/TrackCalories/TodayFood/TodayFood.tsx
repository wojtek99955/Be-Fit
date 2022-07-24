import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Container,
  FoodItem,
  FoodsContainer,
  Nutrients,
  Calories,
  Amount,
  Name,
  DailyNutrition,
  ShowMealsBtn,
  UpIcon,
  DownIcon,
} from "./TodayFoodStyle";
import ConsumedNutrientsData from "./ConsumedNutrients/ConsumedNutrientsData";
import RemainCalories from "./RemainCalories";
import { nanoid } from "nanoid";

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>([]);
  const [showFood, setShowFood] = useState(false);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    onSnapshot(collection(db, `users/${uid}/food`), (docs: any) => {
      console.log("dodano");
      const foodz: any = [];

      docs.forEach((doc: any) => {
        return foodz.push(doc.data());
      });
      const filteredFoods = foodz.filter((item: any) => {
        return item.date === `${day}${month}${year}`;
      });
      setTodayFoods(filteredFoods);
    });
  }, []);
  return (
    <Container>
      <h2>Today</h2>
      <DailyNutrition>
        <ConsumedNutrientsData consumed={todayFoods} />
        <RemainCalories consumed={todayFoods} />
      </DailyNutrition>
      <ShowMealsBtn
        onClick={() => {
          setShowFood((prev) => !prev);
        }}
      >
        {showFood ? <DownIcon /> : <UpIcon />}
        Show today's meals
      </ShowMealsBtn>
      {showFood ? (
        <FoodsContainer>
          {todayFoods
            ? todayFoods.map((item: any) => {
                return (
                  <FoodItem key={nanoid()}>
                    <Name>
                      <h3>{item.name}</h3>
                    </Name>
                    <Amount>
                      <span>{item.details.amount} g</span>
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
      ) : null}
    </Container>
  );
};

export default TodayFood;
