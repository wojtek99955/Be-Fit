import { GiJumpingRope } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSwim } from "react-icons/bi";
import { device } from "../../../assets/mediaQueries/device";

const JumpingRopeIcon = styled(GiJumpingRope)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;
const RunningIcon = styled(FaRunning)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;
const SwimmingIcon = styled(BiSwim)`
  font-size: 2.5rem;
  color: #bcbcbc;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 150px));
  max-width: 600px;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
    max-width: 800px;
  }
  gap: 1rem;
  margin: auto;
  justify-content: center;
`;

const CalculatorsContainer = styled.div`
  background-color: #f3f4f6;
  aspect-ratio: 1/1;

  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 100ms;
  &:hover {
    transform: scale(1.05);
  }
  &:first-of-type:hover ${JumpingRopeIcon} {
    color: #ffa101;
  }
  &:nth-of-type(2):hover ${RunningIcon} {
    color: #ffa101;
  }
  &:nth-of-type(3):hover ${SwimmingIcon} {
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

const ActivityCalculators = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <CalculatorsContainer
        onClick={() => {
          navigate("/calculators/activity-calculators/jumping-rope");
        }}
      >
        <div>
          <JumpingRopeIcon />

          <h1>Jumping rope</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer
        onClick={() => {
          navigate("/calculators/activity-calculators/running");
        }}
      >
        <div>
          <RunningIcon />

          <h1>Running</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer>
        <div>
          <SwimmingIcon />

          <h1>Swimming</h1>
        </div>
      </CalculatorsContainer>
    </Container>
  );
};

export default ActivityCalculators;
