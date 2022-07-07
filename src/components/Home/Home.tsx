import styled from "styled-components";
import Measurement from "./Measurement/Measurement";
import Greeting from "./Greeting";
import BMI from "./BMI/BMI";
import Goal from "./Goal";
import { useState, useEffect, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import Modal from "../../Modal";

const Container = styled.section`
  padding: 1rem;
  width: 100%;
  background-color: #f5f2f6;
  height: calc(100vh - 5.2rem);
  position: relative;
  top: 5.2rem;
  overflow: scroll;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const Home = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<undefined | Object>("");
  const [showModal, setShowModal] = useState(false);
  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      console.log(snap.data());
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
      {showModal ? <Modal /> : null}
      <GridContainer>
        {data && (
          <>
            <Measurement />
            <BMI />
            <Goal />
          </>
        )}
      </GridContainer>
    </Container>
  );
};

export default Home;
