import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import { Box } from "../CardStyles";
import Loader from "../../../assets/Loader";
import {
  DataContainer,
  DataWrapper,
  AgeIconContainer,
  HeightIconContainer,
  WeightIconContainer,
  BoxWrapper,
  Header,
  CalendarIcon,
  HeightIcon,
  WeightIcon,
  SettingsIcon,
  StyledLink,
  LoaderContainer,
} from "./MeasurementStyle";

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
      console.log("No such document");
      setLoading(false);
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
        <StyledLink to="/my-body">
          <SettingsIcon />
        </StyledLink>
      </Header>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : null}
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
    </Box>
  );
};

export default Measurement;
