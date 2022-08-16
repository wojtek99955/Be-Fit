import styled from "styled-components";
import { Box } from "../CardStyles";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

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
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
export const DropdownItem = styled.div`
  position: absolute;
  background-color: #f5f2f6;
  border-radius: 12px;
  padding: 0.3rem 0.8rem;
  left: 0;
  width: 100%;
  bottom: -2rem;
`;

export const DownIcon = styled(BiChevronDown)`
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;

export const UpIcon = styled(BiChevronUp)`
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;
