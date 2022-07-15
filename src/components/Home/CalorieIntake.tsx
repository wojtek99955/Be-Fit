import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { Box, SettingsIcon } from "./CardStyles";

const StyledBox = styled(Box)`
  position: relative;
`;

const Wrapper = styled.div`
  strong {
    font-size: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1rem;
  }
`;

const Data = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 1.5rem;
  }
`;

const CalorieIntake = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});

  async function getData() {
    const snap = await getDoc(
      doc(db, "users", `${uid}/body-details/calorie-intake`)
    );

    if (snap.exists()) {
      setData(snap.data());
    } else {
      console.log("No such document");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Wrapper>
        <Header>
          <h2>Calorie Intake </h2>
          <SettingsIcon />
        </Header>
        <Data>
          <strong>{data.calorieIntake}</strong>
          <div>kcal/day</div>
        </Data>
      </Wrapper>
    </Box>
  );
};

export default CalorieIntake;
