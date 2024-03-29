import { useState, useEffect, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { AuthContext } from "../../../AuthContext";
import { Container, RemainedCalories } from "./RemainCaloriesStyle";
import { darkModeContext } from "../../../../context/DarkModeContextProvider";

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

  const remainCalories = Number(
    (data?.calorieIntake - consumedKcal!).toFixed(1)
  );

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container loading={loading} darkMode={darkMode!}>
      <RemainedCalories loading={loading} darkMode={darkMode!}>
        <div>{remainCalories <= 0 ? "0" : remainCalories}</div>
        <span>Calories left</span>
      </RemainedCalories>
    </Container>
  );
};

export default RemainCalories;
