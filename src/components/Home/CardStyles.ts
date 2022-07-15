import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

export const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  position: relative;
  min-height: 18rem;
`;

export const SettingsIcon = styled(GoSettings)`
  font-size: 1.5rem;
  color: #bcbcbc;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
