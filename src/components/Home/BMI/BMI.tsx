import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import { StyledLink } from "../CardStyles";
import { darkModeContext } from "../../../context/DarkModeContextProvider";
import {
  Wrapper,
  Bmi,
  Data,
  StyledSettingsIcon,
  StyledBox,
  BoxWrapper,
} from "./BMIstyle";

const BMI = () => {
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>("");

  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      setData(snap.data());
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  const { height, weight } = data;
  const BMI = weight / Math.pow(height / 100, 2);
  return (
    <StyledBox bmi={BMI} darkMode={darkMode!}>
      <BoxWrapper loading={loading}>
        <StyledLink to="/my-body">
          <StyledSettingsIcon bmi={BMI} />
        </StyledLink>
        <Wrapper bmi={BMI} loading={loading}>
          <Data darkMode={darkMode!}>
            {data && <Bmi>{BMI.toFixed(1)}</Bmi>}
            <p>BMI</p>
          </Data>
        </Wrapper>
      </BoxWrapper>
    </StyledBox>
  );
};

export default BMI;
