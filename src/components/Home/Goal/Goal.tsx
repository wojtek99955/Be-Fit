import { Wrapper, StyledBox, StyledSettingsIcon } from "./GoalStyle";
import { StyledLink } from "../CardStyles";

const Goal = () => {
  return (
    <StyledBox>
      <StyledLink to="/my-goal">
        <StyledSettingsIcon />
      </StyledLink>
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
