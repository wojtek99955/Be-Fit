import styled from "styled-components";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { device } from "../../../assets/mediaQueries/device";

interface DarkMode {
  darkMode: boolean;
}

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 3rem;
`;
export const FoodItem = styled(motion.div)`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
  position: relative;
  border-radius: 12px;
  margin-bottom: 2rem;
  background-color: #edf5f1;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const FoodsContainer = styled.div`
  margin-top: 2rem;
`;

export const Nutrients = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 0;
  }
`;

export const Calories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 1.2rem;
    color: black;
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DailyNutrition = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

interface Loading {
  loading: boolean;
}

export const ShowMealsBtn = styled.button<Loading>`
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  margin-top: 3rem;
  font-size: 1rem;
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "#019d51")};
  color: ${({ loading }) => (loading ? "#f3f4f6" : "white")};
`;

export const DownIcon = styled(AiOutlineDownCircle)`
  font-size: 1.3rem;
`;

export const UpIcon = styled(AiOutlineUpCircle)`
  font-size: 1.3rem;
`;

export const CurrentDate = styled.div<DarkMode>`
  h2 {
    font-size: 2rem;
    text-align: center;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  div {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "#555555")};
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  font-size: 2rem;
  padding: 0.3rem;
  border-radius: 50%;
  color: #e67978;

  &:hover {
    background-color: #e36d6b;
    color: white;
  }

  &:active {
    background-color: #e1605e;
  }
`;

export const FoodIconContainer = styled.div`
  width: 4rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const FoodWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  align-items: center;
  max-width: 300px;
  margin: auto;
  border-radius: 12px;
  background-color: #edf5f1;
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
  }
  div {
    padding: 0.5rem;
    color: #555555;
  }
  span {
    color: black;
  }
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;
