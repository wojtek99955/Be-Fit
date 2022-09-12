import { motion } from "framer-motion";
import styled from "styled-components";
import { Field } from "formik";
import { device } from "../../../assets/mediaQueries/device";

interface SearchItemProps {
  loading: boolean;
}

interface DarkMode {
  darkMode: boolean;
}

export const SearchedItemContainer = styled.div<DarkMode>`
  border-radius: 12px;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.light : "#f3f4f6"};
  padding: 1rem;
`;

export const SearchItemWrapper = styled.div<SearchItemProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  position: relative;
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  h2 {
    text-transform: capitalize;
  }
  span {
    color: black;
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }
  strong {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const Nutrients = styled.div`
  div {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #555555;
  }
`;

export const NutrientsWrapper = styled.div<DarkMode>`
  div {
    display: flex;
    justify-content: space-between;
    position: relative;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};

    span {
      position: absolute;
      right: 0;
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
`;

export const AmountWrapper = styled.div<DarkMode>`
  display: flex;
  gap: 1rem;
  position: relative;
  div {
    font-size: 1.1rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  input {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

export const Calories = styled.div<DarkMode>`
  margin: auto;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const AmountField = styled(Field)`
  display: block;
  width: 3rem;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 3px solid #ffa101;
  font-size: 1.1rem;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const FoodName = styled.div<DarkMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const AddButton = styled(motion.button)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border: none;
  border-radius: 8px;
  background-color: #ffa101;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #cf8300;
  }
`;

export const NoFoodFound = styled.h3`
  font-size: 1.3rem;
  color: red;
  text-align: center;
`;
