import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiBody } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";

const Container = styled.section`
  max-width: 900px;
  margin: auto;
  margin-top: 6rem;
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

  h1 {
    font-weight: 500;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BodyIcon = styled(BiBody)`
  font-size: 4rem;
`;

const ActivityIcon = styled(GiWeightLiftingUp)`
  font-size: 4rem;
`;

const Calculators = () => {
  let navigation = useNavigate();
  return (
    <Container>
      <CalculatorsContainer>
        <div>
          <BodyIcon />
          <h1>Body</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer>
        <div>
          <ActivityIcon />
          <h1>Activity</h1>
        </div>
      </CalculatorsContainer>
    </Container>
  );
};

export default Calculators;
