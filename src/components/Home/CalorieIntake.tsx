import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { Box, SettingsIcon, StyledLink } from "./CardStyles";

const StyledBox = styled(Box)`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  strong {
    font-size: 2.5rem;
    color: black;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7e1c7;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;

  div {
    font-size: 1.2rem;
    color: #a29e9e;
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
      <Header>
        <h2>Calorie Intake </h2>
        <StyledLink to="/calculators/body-calculators/calorie-intake">
          <SettingsIcon />
        </StyledLink>
      </Header>
      <Data>
        <Wrapper>
          <strong>{data.calorieIntake}</strong>
          <div>kcal/day</div>
        </Wrapper>
      </Data>
    </Box>
  );
};

export default CalorieIntake;
