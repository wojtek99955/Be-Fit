import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";

const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const IconContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  margin-left: 1rem;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-radius: 8px;

  &:first-of-type {
    background-color: #ffe9c5;
  }
  &:nth-of-type(2) {
    background-color: #c8dce1;
  }
  &:nth-of-type(3) {
    background-color: #eef7f9;
  }
`;

const DataWrapper = styled.div`
  strong {
    display: block;
    margin-bottom: 0.5rem;
  }
  p {
    color: #bcbcbc;
  }
`;

const AgeIconContainer = styled(IconContainer)`
  background-color: #ffa101;
`;

const HeightIconContainer = styled(IconContainer)`
  background-color: #31525b;
`;

const WeightIconContainer = styled(IconContainer)`
  background-color: #b3dee5;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Measurement = () => {
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

  const { height, age, weight } = data;

  return (
    <Box>
      <h2>Currently</h2>
      <BoxWrapper>
        <DataContainer>
          <AgeIconContainer></AgeIconContainer>
          <DataWrapper>
            <strong>Age</strong>
            <p>{age}</p>
          </DataWrapper>
        </DataContainer>
        <DataContainer>
          <HeightIconContainer></HeightIconContainer>
          <DataWrapper>
            <strong>Height</strong>
            <p>{height}</p>
          </DataWrapper>
        </DataContainer>
        <DataContainer>
          <WeightIconContainer></WeightIconContainer>
          <DataWrapper>
            <strong>Weight</strong>
            <p> {weight}</p>
          </DataWrapper>
        </DataContainer>
      </BoxWrapper>
    </Box>
  );
};

export default Measurement;
