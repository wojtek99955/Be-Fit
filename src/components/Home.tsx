import { useEffect, useState, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const Container = styled.section`
  padding-top: 8rem;
`;

const Home = () => {
  const ctx = useContext(AuthContext);
  const authData = useAuth();
  let navigate = useNavigate();
  const logOut = async () => {
    await auth.signOut();
    navigate("/signin");
  };

  useEffect(() => {
    getFood();
  }, []);

  const [food, setFood] = useState<any>([]);
  function getFood() {
    const foodCollectionRef = collection(
      db,
      "benefit-bdeb9/",
      "food/",
      "orange"
    );
    getDocs(foodCollectionRef)
      .then((res) => {
        setFood(res);
      })
      .catch((error) => console.log(error.message));
  }

  console.log(ctx?.currentUser);
  const dbx = getDatabase();

  return (
    <Container>
      <h1>youre log in</h1>
      {/* {food.map((item: any) => {
        return (
          <>
            <h1>{item.id}</h1>
            <h2>{item.data.kcal}</h2>
          </>
        );
      })} */}
      <h2>Your email is {authData?.currentUser.email}</h2>
      <button onClick={logOut}>Log out</button>
    </Container>
  );
};

export default Home;
