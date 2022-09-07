import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { device } from "../../assets/mediaQueries/device";

interface DarkMode {
  darkMode: boolean;
}

export const Box = styled.div<DarkMode>`
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.light : "white"};
  padding: 1rem;
  border-radius: 12px;
  position: relative;
  height: 13rem;
  @media ${device.tablet} {
    height: 20rem;
  }
`;

export const SettingsIcon = styled(GoSettings)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #bcbcbc;
  cursor: pointer;
  &:hover {
    color: #878787;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
