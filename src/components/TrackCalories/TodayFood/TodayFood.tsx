import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
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
  CurrentDate,
  DeleteIcon,
} from "./TodayFoodStyle";
import ConsumedNutrientsData from "./ConsumedNutrients/ConsumedNutrientsData";
import RemainCalories from "./RemainCalories/RemainCalories";
import { nanoid } from "nanoid";

const TodayFood = () => {
  const [todayFoods, setTodayFoods] = useState<any>([]);
  const [showFood, setShowFood] = useState(false);
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  useEffect(() => {
    async function getData() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      await onSnapshot(collection(db, `users/${uid}/food`), (docs: any) => {
        const foodz: any = [];

        docs.forEach((doc: any) => {
          return foodz.push(doc.data());
        });
        const filteredFoods = foodz.filter((item: any) => {
          return item.date === `${day}${month}${year}`;
        });
        setTodayFoods(filteredFoods);
        setLoading(false);
      });
    }
    getData();
  }, [uid]);
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const deleteItem = (id: number) => {
    const docRef = doc(db, `users/${uid}/food`, `${id}`);
    deleteDoc(docRef);
  };
  return (
    <Container>
      <CurrentDate>
        <h2>Today</h2>
        <div>{`${day}/${month}/${year}`}</div>
      </CurrentDate>
      <DailyNutrition>
        <ConsumedNutrientsData consumed={todayFoods} loading={loading} />
        <RemainCalories consumed={todayFoods} />
      </DailyNutrition>
      <ShowMealsBtn
        loading={loading}
        onClick={() => {
          setShowFood((prev) => !prev);
        }}
      >
        {showFood ? <UpIcon /> : <DownIcon />}
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
                      <span>{item.details.amount.toFixed(1)} g</span>
                    </Amount>
                    <Nutrients>
                      <div>
                        Fat <span>{item.details.fat.toFixed(1)} g</span>
                      </div>
                      <div>
                        Fiber <span>{item.details.fiber.toFixed(1)} g</span>
                      </div>
                      <div>
                        Protein <span>{item.details.protein.toFixed(1)} g</span>
                      </div>
                      <div>
                        Carbo <span>{item.details.carbo.toFixed(1)} g</span>
                      </div>
                    </Nutrients>
                    <Calories>
                      <div>
                        Kcal <strong>{item.details.kcal.toFixed(0)}</strong>
                      </div>
                    </Calories>
                    <DeleteIcon
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                    />
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
