import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCalculator } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { device } from "../../../assets/mediaQueries/device";

interface DarkMode {
  darkMode: Boolean;
}
export const Container = styled.div`
  background-color: #00c579;
  height: 12rem;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 1100px;
  h1 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }
  @media ${device.tablet} {
    height: 15rem;
    margin-bottom: 2rem;
  }
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 0.2rem 0rem;
  display: block;
  height: 2.2rem;
  border-radius: 8px;
  width: 100%;
`;

export const HealthyStyleIconContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 9rem;
    position: absolute;
    left: 2rem;
  }
  @media ${device.laptop} {
    width: 11rem;
  }
`;

export const WorkOutIconContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute;
    width: 6rem;
    right: 3rem;
  }
  @media ${device.laptop} {
    width: 8rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
`;

export const LinkIcons = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    gap: 2.5rem;
    margin-top: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #00a364;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transition: background-color 300ms;
  &:hover {
    background-color: white;
  }
`;

export const CalculatorIcon = styled(BiCalculator)`
  color: white;
  font-size: 1.5rem;
  transition: color 300ms;
  ${StyledLink}:hover & {
    color: #ffa101;
  }
`;

export const GoalIcon = styled(RiMedalLine)`
  color: white;
  font-size: 1.5rem;
  transition: color 300ms;
  ${StyledLink}:hover & {
    color: #ffa101;
  }
`;

export const FoodCalories = styled(MdOutlineFastfood)`
  color: white;
  transition: color 300ms;
  font-size: 1.5rem;
  ${StyledLink}:hover & {
    color: #ffa101;
  }
`;

export const WeightIcon = styled(MdOutlineMonitorWeight)`
  color: white;
  transition: color 300ms;
  font-size: 1.5rem;
  ${StyledLink}:hover & {
    color: #ffa101;
  }
`;

export const LinkContainer = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

export const FormWrapper = styled.div`
  width: clamp(15rem, 50%, 30rem);
  position: relative;
`;

export const SuggestionsContainer = styled.div<DarkMode>`
  position: absolute;
  background-color: white;
  width: 100%;
  border-radius: 8px;
  height: auto;
  overflow-y: scroll;
  padding: 0.5rem 0.5rem;
  z-index: 50;
  top: 2.6rem;
  box-shadow: -3px 0px 48px -1px rgba(225, 228, 231, 1);
  div {
    color: black;
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: ${({ darkMode }) => (darkMode ? "#28292B" : "#f2f3f5")};
    }
    &:active {
      background-color: ${({ darkMode }) => (darkMode ? "#3a3b3d" : "#e2e4e7")};
    }
    &.active {
      background-color: ${({ darkMode }) => (darkMode ? "#3a3b3d" : "#e4e7e8")};
      font-weight: 600;
    }
  }
`;
