import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";

const Box = styled.div`
  border: 1px solid grey;
`;

const BMI = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
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

  useEffect(() => {
    getData();
  }, []);
  const { height, age, weight } = data;
  const BMI = data.weight / Math.pow(data.height / 100, 2);

  return (
    <Box>
      <h2>Your BMI</h2>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>bmi : {BMI.toFixed(1)}</p>
    </Box>
  );
};

export default BMI;
