import styled from "styled-components";
import { Box } from "../CardStyles";

export const StyledBox = styled(Box)`
  max-width: 1300px;
  margin: 1rem auto;

  h2 {
    font-size: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChangeChartDropdown = styled.div`
  color: #ffa101;
  background-color: #ffe9c5;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
`;
export const DropdownItem = styled.div`
  position: absolute;
  background-color: white;
  padding: 0.3rem 0.8rem;
  left: 0;
  width: 100%;
  bottom: -2rem;
`;
