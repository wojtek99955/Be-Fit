import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { BiCalculator } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { device } from "../../assets/mediaQueries/device";

interface ImgProps {
  url: string;
}

interface DarkMode {
  darkMode: boolean;
}

export const Container = styled.aside<DarkMode>`
  padding: 0.8rem;
  display: none;
  z-index: 15;
  width: 13rem;
  height: 100%;
  transition: background-color 400ms;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.main : "white"};
  ul {
    list-style-type: none;
  }
  li {
    cursor: pointer;
    font-weight: 300;
  }
  @media ${device.laptop} {
    display: block;
    position: relative;
    z-index: 1;
    top: 3.5rem;
  }
`;
export const Wrapper = styled.div`
  position: fixed;
`;
export const StyledNavLink = styled(NavLink)<DarkMode>`
  transition: background-color 300ms;
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
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  text-decoration: none;
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

export const User = styled.div<DarkMode>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
  height: 3rem;
  strong {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }

  span {
    font-size: 0.9rem;
    display: block;
    color: ${({ darkMode }) => (darkMode ? "white" : "#55595b")};
  }
`;

export const UserData = styled.div``;

export const WeightIcon = styled(MdOutlineMonitorWeight)`
  font-size: 1.3rem;
`;
