import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import { StyledLink } from "../CardStyles";
import Loader from "../../../assets/Loader";
import {
  Wrapper,
  Bmi,
  Data,
  StyledSettingsIcon,
  StyledBox,
  LoaderContainer,
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
      console.log("No such document");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const { height, weight } = data;
  const BMI = weight / Math.pow(height / 100, 2);
  return (
    <StyledBox bmi={BMI}>
      <StyledLink to="/my-body">
        <StyledSettingsIcon bmi={BMI} />
      </StyledLink>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : null}
      <Wrapper bmi={BMI} loading={loading}>
        <Data>
          {data && <Bmi>{BMI.toFixed(1)}</Bmi>}
          <p>BMI</p>
        </Data>
      </Wrapper>
    </StyledBox>
  );
};

export default BMI;
