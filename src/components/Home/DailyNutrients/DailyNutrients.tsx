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

interface Loading {
  loading: boolean;
}
const Wrapper = styled.div<Loading>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  span {
    font-weight: 600;
    color: #555555;
  }
`;

const RowOne = styled.div`
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
    padding: 0.5rem;
    border-radius: 8px;

    &:first-of-type {
      background-color: #efabaa;
    }
    &:nth-of-type(2) {
      background-color: #c8dce1;
    }
  }
`;

const RowTwo = styled.div`
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
    padding: 0.5rem;
    border-radius: 8px;

    &:first-of-type {
      background-color: #c7e1c7;
    }

    &:nth-of-type(2) {
      background-color: #ffe9c5;
    }
  }
`;

const DailyNutrients = () => {
  const [nutrients, setNutrients] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } else {
      console.log("No such document");
    }
  }
  useEffect(() => {
    getNutrients();
  }, []);
  return (
    <Box>
      <StyledLink to="/track-calories">
        <StyledSettingsIcon />
      </StyledLink>
      <Wrapper loading={loading}>
        <Kcal>
          <strong>{nutrients?.kcal}</strong>
          <span>kcal</span>
        </Kcal>
        <Nutrients>
          <RowOne>
            <div>
              Fat: <span>{nutrients?.fat} g</span>
            </div>
            <div>
              Carbo: <span>{nutrients?.carbo} g</span>
            </div>
          </RowOne>
          <RowTwo>
            <div>
              Protein: <span>{nutrients?.protein} g</span>
            </div>
            <div>
              Fiber: <span>{nutrients?.fiber} g</span>
            </div>
          </RowTwo>
        </Nutrients>
      </Wrapper>
    </Box>
  );
};

export default DailyNutrients;
