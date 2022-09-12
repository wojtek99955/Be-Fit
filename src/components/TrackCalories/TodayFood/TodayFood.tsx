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
  FoodIconContainer,
  FoodWrapper,
} from "./TodayFoodStyle";
import ConsumedNutrientsData from "./ConsumedNutrients/ConsumedNutrientsData";
import RemainCalories from "./RemainCalories/RemainCalories";
import { nanoid } from "nanoid";
import HealthyFoodIcon from "../../../assets/svg/HealthyFoodIcon";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

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
  }, []);
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const deleteItem = (id: number) => {
    const docRef = doc(db, `users/${uid}/food`, `${id}`);
    deleteDoc(docRef);
  };
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  return (
    <Container>
      <CurrentDate darkMode={darkMode!}>
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
      <AnimatePresence>
        {showFood ? (
          <FoodsContainer>
            {todayFoods
              ? todayFoods.map((item: any) => {
                  return (
                    <FoodItem
                      key={nanoid()}
                      initial={{ x: "-40%", opacity: 0, scale: 0.5 }}
                      whileInView={{ x: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      exit={{ x: "-40%", opacity: 0, scale: 0.5 }}
                    >
                      <FoodWrapper>
                        <FoodIconContainer>
                          <HealthyFoodIcon />
                        </FoodIconContainer>
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
                            Protein{" "}
                            <span>{item.details.protein.toFixed(1)} g</span>
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
                      </FoodWrapper>
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
      </AnimatePresence>
    </Container>
  );
};

export const TodayFoodMemo = React.memo(TodayFood);
