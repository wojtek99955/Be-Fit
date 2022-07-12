import { Container } from "./Calculators";
import styled from "styled-components";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

const WeightIcon = styled(MdOutlineMonitorWeight)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;

const IdealWeightIcon = styled(GiWeightLiftingUp)`
  font-size: 2.5rem;
  color: #bcbcbc;
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

  &:first-of-type:hover ${WeightIcon} {
    color: #ffa101;
  }
  &:last-of-type:hover ${IdealWeightIcon} {
    color: #ffa101;
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

const BodyCalculators = () => {
  return (
    <Container>
      <CalculatorsContainer>
        <div>
          <WeightIcon />

          <h1>BMI</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer>
        <div>
          <IdealWeightIcon />
          <h1>Ideal weight</h1>
        </div>
      </CalculatorsContainer>
    </Container>
  );
};

export default BodyCalculators;
