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

const Kcal = styled.div``;

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
      <StyledLink to="/track-calories">
        <StyledSettingsIcon />
      </StyledLink>
      <Kcal>{nutrients?.kcal}</Kcal>
      <div>
        Fat: <span>{nutrients?.fat}</span>
      </div>
      <div>
        Carbo: <span>{nutrients?.carbo}</span>
      </div>
      <div>
        Protein: <span>{nutrients?.protein}</span>
      </div>
      <div>
        Fiber: <span>{nutrients?.fiber}</span>
      </div>
    </Box>
  );
};

export default DailyNutrients;
