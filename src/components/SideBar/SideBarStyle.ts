import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { BiCalculator } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineMonitorWeight } from "react-icons/md";

interface ImgProps {
  url: string;
}

export const Container = styled.aside`
  height: 100vh;
  border-right: 1px solid #e1e4e7;
  position: relative;
  top: 3.5rem;
  height: calc(100vh - 3.5rem);
  padding: 0.8rem;
  width: 14rem;
  ul {
    list-style-type: none;
  }
  li {
    cursor: pointer;
    font-weight: 300;
  }
`;
export const StyledNavLink = styled(NavLink)`
  &:hover {
    background-color: #f0f2f2;
  }
  &.active {
    background-color: #e4e7e8;
    font-weight: 600;
  }
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`;
export const HomeIcon = styled(BiHomeAlt)`
  font-size: 1.3rem;
`;
export const GoalIcon = styled(RiMedalLine)`
  font-size: 1.3rem;
`;
export const CalculatorIcon = styled(BiCalculator)`
  font-size: 1.3rem;
`;
export const FoodCalories = styled(MdOutlineFastfood)`
  font-size: 1.3rem;
`;
export const StyledUserIcon = styled.div<ImgProps>`
  width: 2rem;
  height: 2rem;
  background-color: #ffa101;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const User = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;

  strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    display: block;
    color: #55595b;
  }
`;

export const UserData = styled.div``;

export const WeightIcon = styled(MdOutlineMonitorWeight)`
  font-size: 1.3rem;
`;
