import { Box, StyledLink } from "../CardStyles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Kcal,
  Nutrients,
  Wrapper,
  RowOne,
  RowTwo,
  StyledSettingsIcon,
} from "./DailyNutrientsStyle";

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
