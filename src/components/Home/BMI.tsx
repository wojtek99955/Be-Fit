import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";

interface StyleProps {
  bmi: number;
}
const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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

const BMI = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);

  async function getData() {
    const snap = await getDoc(doc(db, "users", `${uid}/body-details/details`));

    if (snap.exists()) {
      console.log(snap.data());
      setData(snap.data());
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
    <Box>
      <Wrapper bmi={BMI}>
        <Data>
          <Bmi>{BMI.toFixed(1)}</Bmi>
          <p>BMI</p>
        </Data>
      </Wrapper>
    </Box>
  );
};

export default BMI;
