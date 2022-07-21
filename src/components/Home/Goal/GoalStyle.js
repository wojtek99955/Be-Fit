import styled from "styled-components";
import { Box, SettingsIcon } from "../CardStyles";

export const Wrapper = styled.div`
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
      background-color: #009d51;
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

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
