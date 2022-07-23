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
const RemainedCalories = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  div {
    font-size: 2.5rem;
  }
  span {
    font-size: 1.4rem;
    color: #555555;
  }
`;

interface Props {
  consumed: any;
}

const RemainCalories = ({ consumed }: Props) => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [consumedKcal, setConsumedKcal] = useState<null | number>(null);
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
    const calorieAmount = consumed?.reduce((acc: any, obj: any) => {
      return acc + obj.details.kcal;
    }, 0);
    setConsumedKcal(calorieAmount);
  }, [consumed]);
  return (
    <Container>
      <RemainedCalories>
        <div>{data?.calorieIntake - consumedKcal!}</div>
        <span>Calories left</span>
      </RemainedCalories>
    </Container>
  );
};

export default RemainCalories;
