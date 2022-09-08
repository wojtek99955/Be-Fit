import { motion } from "framer-motion";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { device } from "../../assets/mediaQueries/device";
const img = require("../../assets/images/food-img.jpg");

interface StylesProps {
  loading: boolean | null;
  darkMode: boolean;
}

interface DarkMode {
  darkMode: boolean;
}
export const Container = styled.div<DarkMode>`
  padding: 1rem 0.2rem;
  @media ${device.tablet} {
    padding: 1rem;
  }
  width: 100%;
  position: relative;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};
  top: 3.5rem;
  overflow-y: scroll;
  h2 {
    margin: 2rem 0;
    text-align: center;
    font-size: 2rem;
  }
`;

export const MainImg = styled.div`
  width: 100%;
  height: 15rem;
  @media ${device.tablet} {
    height: 20rem;
  }
  background: rgba(0, 0, 0, 0.3) url(${img});
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: white;
    text-align: center;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 1rem;
  gap: 0.5rem;
  width: 100%;
  @media ${device.tablet} {
    width: 30rem;
  }
  input {
    outline: none;
    border: none;
    padding: 0.2rem 0;
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
      -webkit-transition-delay: 9999s;
    }
  }
  button {
    background-color: #ffa101;
    border: none;
    border-radius: 8px;
    padding: 0 1rem;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Nutrients = styled(motion.div)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 1rem;
  gap: 2rem;
  @media ${device.tablet} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const BoxContainer = styled.div`
  max-width: 18rem;
  background-color: #f3f4f6;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 7rem 7rem;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  height: 15rem;

  div {
    text-align: center;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-of-type {
      background-color: #6db26b;
    }
    &:nth-of-type(2) {
      background-color: #777777;
    }
    &:nth-of-type(3) {
      background-color: #ffa101;
    }
    &:nth-of-type(4) {
      background-color: #e1605e;
    }
    &:nth-of-type(5) {
      background-color: #31525b;
    }
    &:nth-of-type(6) {
      background-color: #4d904b;
    }
  }
  span {
    padding-top: 0.3rem;
    display: inline-block;
  }
`;

export const StyledH2 = styled.h2<DarkMode>`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  text-align: center;
`;

export const FoodName = styled.div<StylesProps>`
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "transparent")};
  height: 3rem;
  margin: auto;
  width: 8rem;
  border-radius: 12px;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  @media ${device.tablet} {
    margin-bottom: 2rem;
  }
`;

export const BoxHeader = styled.div<StylesProps>`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "transparent")};
  border-radius: 12px;
  width: 15rem;
  h3 {
    color: ${({ darkMode }) => (darkMode ? "white" : "#55595b")};
    display: inline;
    font-size: 1.2rem;
    font-weight: 600;
  }
  input {
    width: 3.5rem;
    border: 2px solid #ffa101;
    display: inline-block;
    border-radius: 8px;
    font-size: 1.2rem;
    color: #55595b;
    font-weight: 600;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: inline-block;
    border: none;
    color: white;
    background-color: #ffa101;
    padding: 0.2rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  span {
    font-size: 1.2rem;
    color: #55595b;
    font-weight: 600;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    display: block;
  }
`;

export const SearchIcon = styled(BiSearch)`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: black;
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 8px;
  background: white;
  align-items: center;
  width: 100%;
  label {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NoMealsFound = styled.h3`
  font-size: 1.3rem;
  color: red;
  text-align: center;
  margin-top: 2rem;
`;
