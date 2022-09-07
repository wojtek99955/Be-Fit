import styled from "styled-components";
import { Box } from "../CardStyles";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";
import { device } from "../../../assets/mediaQueries/device";

interface DarkMode {
  darkMode: boolean;
}
export const StyledBox = styled(Box)<DarkMode>`
  max-width: 1100px;
  margin: 1rem auto;
  height: auto;

  h2 {
    font-size: 1rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ChangeChartDropdown = styled.div`
  color: #ffa101;
  background-color: #ffe9c5;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
export const DropdownItem = styled(motion.div)`
  position: absolute;
  background-color: #f5f2f6;
  border-radius: 12px;
  padding: 0.4rem 0.8rem;
  left: 0;
  width: 100%;
  /* bottom: -2.2rem; */
  &:hover {
    background: #e4e7e8;
  }
`;

export const DownIcon = styled(BiChevronDown)`
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;

export const UpIcon = styled(BiChevronUp)`
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;

interface Loading {
  loading: boolean;
}

export const Wrapper = styled.div<Loading>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const ChartsContainer = styled.div`
  overflow-x: scroll;
  @media ${device.tablet} {
    overflow-x: auto;
  }
`;

export const ChartWrapper = styled.div`
  width: 30rem;
  margin: auto;
  @media ${device.tablet} {
    width: 100%;
  }
`;
