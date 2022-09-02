import styled from "styled-components";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { device } from "../../../assets/mediaQueries/device";

const WeightIcon = styled(MdOutlineMonitorWeight)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;

const IdealWeightIcon = styled(GiWeightLiftingUp)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;

const FoodIcon = styled(MdOutlineFastfood)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;

const CalculatorsContainer = styled.div`
  aspect-ratio: 1/1;
  background-color: #f3f4f6;
  width: 100%;
  height: 100%;
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
  &:nth-of-type(2):hover ${IdealWeightIcon} {
    color: #ffa101;
  }
  &:nth-of-type(3):hover ${FoodIcon} {
    color: #ffa101;
  }
  h1 {
    font-weight: 500;
    text-align: center;
    font-size: 0.9rem;
    @media ${device.tablet} {
      font-size: 1rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Container = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(auto-fill, minmax(40px, 150px));
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(80px, 250px));
  }
  gap: 1rem;
  width: 90%;
  margin: auto;
  justify-content: center;
`;

const BodyCalculators = () => {
  let navigation = useNavigate();
  return (
    <Container>
      <CalculatorsContainer
        onClick={() => {
          navigation("/calculators/body-calculators/bmi");
        }}
      >
        <div>
          <WeightIcon />

          <h1>BMI</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer
        onClick={() => {
          navigation("/calculators/body-calculators/ideal-weight");
        }}
      >
        <div>
          <IdealWeightIcon />
          <h1>Ideal weight</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer
        onClick={() => {
          navigation("/calculators/body-calculators/calorie-intake");
        }}
      >
        <div>
          <FoodIcon />
          <h1>Calorie intake</h1>
        </div>
      </CalculatorsContainer>
    </Container>
  );
};

export default BodyCalculators;
