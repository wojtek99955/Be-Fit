import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { Box, SettingsIcon, StyledLink } from "./CardStyles";
import { device } from "../../assets/mediaQueries/device";

interface StyleProps {
  loading: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  strong {
    font-size: 1.5rem;
    color: black;
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1rem;
  }
`;

const Data = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7e1c7;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  @media ${device.tablet} {
    width: 10rem;
    height: 10rem;
  }
  display: flex;
  align-items: center;

  div {
    font-size: 1rem;
    color: #a29e9e;
  }
`;

const BoxWrapper = styled.div<StyleProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

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
          <Header>
            <h2>Calorie Intake </h2>
            <StyledLink to="/calculators/body-calculators/calorie-intake">
              <SettingsIcon />
            </StyledLink>
          </Header>
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
