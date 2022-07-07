import { Wrapper, StyledBox, StyledSettingsIcon } from "./GoalStyle";

const Goal = () => {
  return (
    <StyledBox>
      <StyledSettingsIcon />
      <Wrapper>
        <h2>Current weight</h2>
        <p>80 kg</p>
      </Wrapper>
      <Wrapper>
        <h2>Target weight</h2>
        <p>76 kg</p>
      </Wrapper>
    </StyledBox>
  );
};

export default Goal;
