import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";

const Container = styled.div`
  border: 4px solid #ffa101;
  width: 50%;
  border-radius: 12px;
`;
const RemainedCalories = styled.div``;

const RemainCalories = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  async function getData() {
    const snap = await getDoc(
      doc(db, "users", `${uid}/body-details/calorie-intake`)
    );

    if (snap.exists()) {
      setData(snap.data());
      setLoading(false);
    } else {
      console.log("No such document");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <RemainedCalories>{data.calorieIntake}</RemainedCalories>
    </Container>
  );
};

export default RemainCalories;
