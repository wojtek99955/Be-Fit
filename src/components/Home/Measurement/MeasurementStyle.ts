import styled from "styled-components";
import { BsCalendar3 } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { Box } from "../CardStyles";

interface StyleProps {
  loading: boolean;
}

export const IconContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-radius: 8px;

  &:first-of-type {
    background-color: #ffe9c5;
  }
  &:nth-of-type(2) {
    background-color: #c8dce1;
  }
  &:nth-of-type(3) {
    background-color: #eef7f9;
  }
`;

export const DataWrapper = styled.div`
  strong {
    display: block;
    margin-bottom: 0.5rem;
  }
  p {
    color: #bcbcbc;
  }
`;

export const AgeIconContainer = styled(IconContainer)`
  background-color: #ffa101;
`;

export const HeightIconContainer = styled(IconContainer)`
  background-color: #31525b;
`;

export const WeightIconContainer = styled(IconContainer)`
  background-color: #fe55ba;
`;

export const BoxWrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: ${({ loading }) => (!loading ? "1" : "0")};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 1rem;
  }
`;

export const CalendarIcon = styled(BsCalendar3)`
  font-size: 1rem;
  color: white;
`;
export const HeightIcon = styled(GiBodyHeight)`
  font-size: 1rem;
  color: white;
`;
export const WeightIcon = styled(GiWeight)`
  font-size: 1.2rem;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
