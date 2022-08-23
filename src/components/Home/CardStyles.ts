import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

export const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  position: relative;
  height: 20rem;
`;

export const SettingsIcon = styled(GoSettings)`
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
