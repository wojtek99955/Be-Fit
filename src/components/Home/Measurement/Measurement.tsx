import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import {
  DataContainer,
  DataWrapper,
  AgeIconContainer,
  HeightIconContainer,
  WeightIconContainer,
  BoxWrapper,
  CalendarIcon,
  HeightIcon,
  WeightIcon,
  StyledLink,
  Wrapper,
} from "./MeasurementStyle";
import { SettingsIcon } from "../CardStyles";
import { Box } from "../CardStyles";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

const Measurement = () => {
  const [loading, setLoading] = useState(true);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);

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

  const { height, age, weight } = data;
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Box darkMode={darkMode!}>
      <Wrapper loading={loading}>
        <StyledLink to="/my-body">
          <SettingsIcon />
        </StyledLink>
        <BoxWrapper loading={loading}>
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
      </Wrapper>
    </Box>
  );
};

export default Measurement;
