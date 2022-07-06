import { Box, SettingsIcon } from "./CardStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 12px;
  &:first-of-type {
    background-color: #faf2ef;
    p {
      background-color: #e1605e;
    }
  }
  &:nth-of-type(2) {
    background-color: #c7e1c7;
    p {
      background-color: #6db26b;
    }
  }
  h2 {
    font-size: 1rem;
    color: #a29e9e;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    display: inline-block;
    color: white;
    padding: 0.3rem;
    border-radius: 12px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledSettingsIcon = styled(SettingsIcon)`
  margin-left: auto;
`;

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
