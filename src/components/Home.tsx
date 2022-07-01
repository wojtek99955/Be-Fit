import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "./AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
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
    const foodCollectionRef = collection(db, "food");
    getDocs(foodCollectionRef)
      .then((res) => {
        const fooddata = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setFood(fooddata);
      })
      .catch((error) => console.log(error.message));
  }
  console.log(food);
  return (
    <div>
      <h1>youre log in</h1>
      {food.map((item: any) => {
        return (
          <>
            <h1>{item.id}</h1>
            <h2>{item.data.kcal}</h2>
          </>
        );
      })}
      <h2>Your email is {authData?.currentUser.email}</h2>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default Home;
