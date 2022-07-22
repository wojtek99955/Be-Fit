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
const FoodItem = styled.div`
  max-width: 800px;
  margin: auto;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  div {
    padding: 0.5rem;
    color: #555555;
  }
  span {
    color: black;
  }
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;

const FoodsContainer = styled.div`
  margin-top: 2rem;
`;

const Nutrients = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 0;
  }
`;

const Calories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 1.2rem;
    color: black;
  }
`;

const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
