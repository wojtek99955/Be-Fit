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
import CalorieIntake from "./CalorieIntake/CalorieIntake";
import RemainCalories from "./RemainCalories/RemainCalories";
import DailyNutrients from "./DailyNutrients/DailyNutrients";
import LastMonth from "./LastMonth/LastMonth";
import { device } from "../../assets/mediaQueries/device";
import { darkModeContext } from "../../context/DarkModeContextProvider";

interface DarkMode {
  darkMode: boolean;
}
const Container = styled.section<DarkMode>`
  padding: 0.2rem;
  background-color: ${({ darkMode }) => (darkMode ? "#18191A" : "#f5f2f6")};
  position: relative;
  min-height: calc(100vh - 3.5rem);
  top: 3.5rem;
  @media ${device.tablet} {
    padding: 1rem;
  }
`;
const GridContainer = styled.div`
  margin: auto;
  gap: 1rem;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));

  @media ${device.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
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
      setShowModal(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  return (
    <Container darkMode={darkMode!}>
      <Greeting />
      {showModal ? <UpdateProfileModal setShowModal={setShowModal} /> : null}

      {!showModal && (
        <>
          <LastMonth />
          <GridContainer>
            <Measurement />
            <BMI />
            <Goal />
            <CalorieIntake />
            <RemainCalories />
            <DailyNutrients />
          </GridContainer>
        </>
      )}
    </Container>
  );
};

export default Home;
