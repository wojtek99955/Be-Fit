import styled from "styled-components";
import Measurement from "./Measurement/Measurement";
import Greeting from "./Greeting/Greeting";
import BMI from "./BMI/BMI";
import Goal from "./Goal/Goal";
import { useState, useEffect, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import CalorieIntake from "./CalorieIntake";
import RemainCalories from "./RemainCalories/RemainCalories";
import DailyNutrients from "./DailyNutrients/DailyNutrients";

const Container = styled.section`
  padding: 1rem;
  width: 100%;
  background-color: #f5f2f6;
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1300px;
  margin: auto;
`;

const Home = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<undefined | Object>("");
  const [showModal, setShowModal] = useState(false);
  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      setData(snap.data());
    } else {
      console.log("No such document");
      setShowModal(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Greeting />
      {showModal ? <UpdateProfileModal /> : null}
      <GridContainer>
        {data && (
          <>
            <Measurement />
            <BMI />
            <Goal />
            <CalorieIntake />
            <RemainCalories />
            <DailyNutrients />
          </>
        )}
      </GridContainer>
    </Container>
  );
};

export default Home;
