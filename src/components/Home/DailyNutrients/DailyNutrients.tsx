import styled from "styled-components";
import { Box, StyledLink, SettingsIcon } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Kcal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    font-size: 2.5rem;
  }
  span {
    color: #a29e9e;
  }
`;
const Nutrients = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 7rem;
    width: 50%;
    font-size: 0.9rem;
  }
`;

const DailyNutrients = () => {
  const [nutrients, setNutrients] = useState<any>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  async function getNutrients() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const snap = await getDoc(
      doc(db, "users", `${uid}/consumedNutrients/${day}${month}${year}`)
    );
    if (snap.exists()) {
      setNutrients(snap.data());
    } else {
      console.log("No such document");
    }
  }
  useEffect(() => {
    getNutrients();
  }, []);
  return (
    <Box>
      <Wrapper>
        <StyledLink to="/track-calories">
          <StyledSettingsIcon />
        </StyledLink>
        <Kcal>
          <strong>{nutrients?.kcal}</strong>
          <span>kcal</span>
        </Kcal>
        <Nutrients>
          <Row>
            <div>
              Fat: <span>{nutrients?.fat} g</span>
            </div>
            <div>
              Carbo: <span>{nutrients?.carbo} g</span>
            </div>
          </Row>
          <Row>
            <div>
              Protein: <span>{nutrients?.protein} g</span>
            </div>
            <div>
              Fiber: <span>{nutrients?.fiber} g</span>
            </div>
          </Row>
        </Nutrients>
      </Wrapper>
    </Box>
  );
};

export default DailyNutrients;
