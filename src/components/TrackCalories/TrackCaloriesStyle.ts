import styled from "styled-components";
import { Field } from "formik";
const img = require("../../assets/images/track-calories.jpg");

export const Container = styled.section`
  padding: 1rem;
  width: calc(100vw - 14rem);
  background-color: white;
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
`;
export const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3) url(${img});
  height: 20rem;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
    font-size: 2.6rem;
    text-align: center;
    line-height: 3.2rem;
  }
`;

export const SearchFood = styled.div`
  max-width: 800px;
  margin: auto;
`;
export const StyledField = styled(Field)`
  border: none;
  border-bottom: 3px solid #ffa101;
  outline: none;
  font-size: 1.3rem;
  background-color: transparent;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  padding: 4rem 0;
  width: 20rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: inline;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
  }
`;

interface SearchItemProps {
  loading: boolean;
}

export const SearchedItem = styled.div`
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 1rem;
`;

export const SearchItemWrapper = styled.div<SearchItemProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
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

export const NutrientsWrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    position: relative;

    span {
      position: absolute;
      right: 0;
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
`;

export const AmountWrapper = styled.div`
  display: flex;
  gap: 1rem;
  div {
    font-size: 1.1rem;
  }
`;

export const Calories = styled.div`
  margin: auto;
`;

export const AmountField = styled(Field)`
  display: block;
  width: 3rem;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 3px solid #ffa101;
  font-size: 1.1rem;
`;

export const FoodName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
