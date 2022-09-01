import { useState, useEffect, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import { Box, SettingsIcon, StyledLink } from "../CardStyles";
import { Wrapper, Data, BoxWrapper } from "./CalorieIntakeStyle";

const CalorieIntake = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  async function getData() {
    const snap = await getDoc(
      doc(db, "users", `${uid}/body-details/calorie-intake`)
    );

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

  return (
    <>
      <Box>
        <BoxWrapper loading={loading}>
          <StyledLink to="/calculators/body-calculators/calorie-intake">
            <SettingsIcon />
          </StyledLink>
          {data ? (
            <Data>
              <Wrapper>
                <strong>{data.calorieIntake}</strong>
                <div>kcal/day</div>
              </Wrapper>
            </Data>
          ) : null}
        </BoxWrapper>
      </Box>
    </>
  );
};

export default CalorieIntake;
