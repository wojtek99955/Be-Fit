import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCalculator } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineMonitorWeight } from "react-icons/md";

export const Container = styled.div`
  background-color: #00c579;
  height: 15rem;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  position: relative;
  margin: auto;
  margin-bottom: 2rem;

  max-width: 1100px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
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
  width: 12rem;
  position: absolute;
  left: 3rem;
`;

export const WorkOutIconContainer = styled.div`
  width: 8rem;
  position: absolute;
  right: 3rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  width: clamp(15rem, 50%, 30rem);
`;

export const LinkIcons = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
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
