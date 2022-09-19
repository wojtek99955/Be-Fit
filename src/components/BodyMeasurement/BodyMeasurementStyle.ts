import styled from "styled-components";
import { Field } from "formik";

interface DarkMode {
  darkMode: boolean;
}
export const Container = styled.section<DarkMode>`
  padding-top: 8rem;
  width: 100%;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};
`;
export const Wrapper = styled.div<DarkMode>`
  max-width: 350px;
  margin: auto;
  padding: 1rem;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.middle : "white"};
  h2 {
    text-align: center;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }
  button {
    display: block;
    margin: auto;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    border: none;
    background-color: #ffa101;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const StyledField = styled(Field)`
  margin: auto;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  border-bottom: 2px solid #31525b;
`;
