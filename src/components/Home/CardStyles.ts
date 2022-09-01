import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { device } from "../../assets/mediaQueries/device";

export const Box = styled.div`
  background-color: white;
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
