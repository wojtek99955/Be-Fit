import { GiJumpingRope } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSwim } from "react-icons/bi";

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
  display: flex;
  gap: 2rem;
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
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ActivityCalculators = () => {
  return (
    <Container>
      <CalculatorsContainer>
        <div>
          <JumpingRopeIcon />

          <h1>Jumping rope</h1>
        </div>
      </CalculatorsContainer>
      <CalculatorsContainer>
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
