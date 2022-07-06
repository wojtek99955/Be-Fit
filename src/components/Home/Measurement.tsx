import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { BsCalendar3 } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
`;
const IconContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #fe55ba;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 1rem;
  }
`;

const CalendarIcon = styled(BsCalendar3)`
  font-size: 1rem;
  color: white;
`;
const HeightIcon = styled(GiBodyHeight)`
  font-size: 1rem;
  color: white;
`;
const WeightIcon = styled(GiWeight)`
  font-size: 1.2rem;
  color: white;
`;
const SettingsIcon = styled(GoSettings)`
  font-size: 1.5rem;
  color: #bcbcbc;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
      <Header>
        <h2>Currently</h2>
        <StyledLink to="/your-body">
          <SettingsIcon />
        </StyledLink>
      </Header>
      <BoxWrapper>
        <DataContainer>
          <AgeIconContainer>
            <CalendarIcon />
          </AgeIconContainer>
          <DataWrapper>
            <strong>Age</strong>
            <p>{age}</p>
          </DataWrapper>
        </DataContainer>
        <DataContainer>
          <HeightIconContainer>
            <HeightIcon />
          </HeightIconContainer>
          <DataWrapper>
            <strong>Height</strong>
            <p>{height}</p>
          </DataWrapper>
        </DataContainer>
        <DataContainer>
          <WeightIconContainer>
            <WeightIcon />
          </WeightIconContainer>
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
