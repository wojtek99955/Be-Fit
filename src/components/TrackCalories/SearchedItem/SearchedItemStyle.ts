import styled from "styled-components";
import { Field } from "formik";

interface SearchItemProps {
  loading: boolean;
}

export const SearchedItemContainer = styled.div`
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
  padding: 3rem 0;
  position: relative;
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
  position: relative;
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

export const AddButton = styled.button`
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
