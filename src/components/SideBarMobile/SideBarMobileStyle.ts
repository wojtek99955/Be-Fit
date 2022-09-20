import { motion } from "framer-motion";
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

export const Container = styled(motion.aside)<DarkMode>`
  width: calc(100vw - 13rem);
  height: calc(100% - 3.5rem);
  border-right: ${({ darkMode }) => (darkMode ? "none" : "1px solid #e1e4e7")};
  transition: background-color 400ms;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};

  position: fixed;
  top: 0;
  height: 100vh;
  padding: 0.8rem;
  z-index: 25;
  width: 13rem;
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
    top: 3.5rem;
  }
`;
export const StyledNavLink = styled(NavLink)<DarkMode>`
  transition: background-color 300ms;
  &:hover {
    background-color: "ffa101";
  }
  &:active {
    background-color: #e4e7e8;
  }
  &.active {
    background-color: ${({ darkMode }) => (darkMode ? "#424243" : "#e4e7e8")};
    font-weight: 600;
  }
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
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
    color: #55595b;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

export const UserData = styled.div``;

export const WeightIcon = styled(MdOutlineMonitorWeight)`
  font-size: 1.3rem;
`;

export const Background = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 13rem;
  width: calc(100vw - 13rem);
  height: 100vh;
`;
