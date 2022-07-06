import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { SettingsIcon, Box, StyledLink } from "./CardStyles";
import Loader from "../../assets/Loader";

interface StyleProps {
  bmi: number;
  loading: boolean;
}

const Wrapper = styled.div<StyleProps>`
  border-width: 8px;
  border-style: solid;
  border-color: ${({ bmi }) => {
    if (bmi >= 25) {
      return "#E1605E";
    } else if (bmi >= 18.5) {
      return "#6DB26B";
    } else if (bmi < 18.5) {
      return "#E1605E";
    } else {
      return "transparent";
    }
  }};
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ loading }) => (!loading ? "1" : "0")};

  p {
    color: #bcbcbc;
    text-align: center;
  }
`;
const Bmi = styled.strong`
  font-size: 2.5rem;
  display: block;
`;
const Data = styled.div``;

const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BMI = () => {
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);

  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      console.log(snap.data());
      setData(snap.data());
      setLoading(false);
    } else {
      console.log("No such document");
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const { height, weight } = data;
  const BMI = weight / Math.pow(height / 100, 2);
  return (
    <StyledBox>
      <StyledLink to="/your-body">
        <StyledSettingsIcon />
      </StyledLink>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : null}
      <Wrapper bmi={BMI} loading={loading}>
        <Data>
          <Bmi>{BMI.toFixed(1)}</Bmi>
          <p>BMI</p>
        </Data>
      </Wrapper>
    </StyledBox>
  );
};

export default BMI;