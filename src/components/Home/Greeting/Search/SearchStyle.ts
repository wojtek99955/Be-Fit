import styled from "styled-components";
import { SearchIcon } from "../../../CaloriesCalculator/CaloriesCalculatorsStyle";

interface DarkMode {
  darkMode: Boolean;
}

export const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 0.2rem 0rem;
  display: block;
  height: 2.2rem;
  border-radius: 8px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
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
  overflow-y: scroll;
  padding: 0.5rem 0.5rem;
  z-index: 50;
  top: 2.6rem;
  max-height: 12rem;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "none" : "-3px 0px 48px -1px rgba(225, 228, 231, 1)"};
  div {
    color: black;
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #f2f3f5;
    }
    &:active {
      background-color: #e2e4e7;
    }
    &.active {
      background-color: #e4e7e8;
      font-weight: 600;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 1rem;
`;
