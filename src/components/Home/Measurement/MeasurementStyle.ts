import styled from "styled-components";
import { BsCalendar3 } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { Box } from "../CardStyles";
import { device } from "../../../assets/mediaQueries/device";
import { SettingsIcon } from "../CardStyles";

interface StyleProps {
  loading: boolean;
}

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  @media ${device.tablet} {
    padding: 0.5rem 0;
  }

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
    font-size: 0.9rem;
    @media ${device.tablet} {
      font-size: 1rem;
    }
    margin-bottom: 0.2rem;
    @media ${device.tablet} {
      margin-bottom: 0.5rem;
    }
  }
  p {
    color: #bcbcbc;
  }
`;

export const AgeIconContainer = styled(IconContainer)`
  background-color: #ffa101;
  font-size: 0.5rem;
`;

export const HeightIconContainer = styled(IconContainer)`
  background-color: #31525b;
`;

export const WeightIconContainer = styled(IconContainer)`
  background-color: #fe55ba;
`;

export const BoxWrapper = styled.div<StyleProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  gap: 0.3rem;
  @media ${device.tablet} {
    gap: 0.5rem;
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

export const Wrapper = styled.div<StyleProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const StyledBox = styled(Box)``;
