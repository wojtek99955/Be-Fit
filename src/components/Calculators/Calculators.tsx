import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiBody } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";

export const Container = styled.section`
  max-width: 900px;
  margin: auto;
  /* margin-top: 6rem; */
  display: flex;
  gap: 5rem;
`;

const CalculatorsContainer = styled.div`
  background-color: #f3f4f6;
  width: 15rem;
  height: 15rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 100ms;
  &:hover {
    transform: scale(1.05);
  }
  h1 {
    font-weight: 500;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const BodyIcon = styled(BiBody)`
  font-size: 4rem;
  color: #bcbcbc;
`;

const BodyCalculators = styled.div`
  &:hover ${BodyIcon} {
    color: #ffa101;
  }
`;

const ActivityIcon = styled(GiWeightLiftingUp)`
  font-size: 4rem;
  color: #bcbcbc;
`;

const ActivityCalculators = styled.div`
  &:hover ${ActivityIcon} {
    color: #ffa101;
  }
`;

const Calculators = () => {
  let navigation = useNavigate();
  return (
    <Container>
      <BodyCalculators
        onClick={() => {
          navigation("/calculators/body-calculators");
        }}
      >
        <CalculatorsContainer>
          <div>
            <BodyIcon />
            <h1>Body</h1>
          </div>
        </CalculatorsContainer>
      </BodyCalculators>
      <ActivityCalculators>
        <CalculatorsContainer>
          <div>
            <ActivityIcon />
            <h1>Activity</h1>
          </div>
        </CalculatorsContainer>
      </ActivityCalculators>
    </Container>
  );
};

export default Calculators;
