import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";

const Container = styled.section`
  padding-top: 8rem;
`;

const Box = styled.div`
  border: 1px solid grey;
`;

const Home = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState<any>([]);

  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      console.log(snap.data());
      setData(snap.data());
    } else {
      console.log("No such document");
    }
  }

  const BMI = data.weight / Math.pow(data.height / 100, 2);
  const { height, age, weight } = data;
  return (
    <Container>
      <Box>
        <h2>Your current measure</h2>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>bmi : {BMI.toFixed(1)}</p>
      </Box>
    </Container>
  );
};

export default Home;
