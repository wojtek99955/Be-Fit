import styled from "styled-components";
import { Field } from "formik";
import { device } from "../../assets/mediaQueries/device";

interface DarkMode {
  darkMode: boolean;
}

export const Container = styled.section<DarkMode>`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
  margin: auto;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.main : "white"};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const initialValues = {
  currentWeight: 0,
  goalWeight: 0,
  calorieDeficit: 0,
};

export const StyledField = styled(Field)`
  width: 100%;
  display: block;
  font-size: 1.3rem;
  padding: 0.2rem;
`;

export const FormContainer = styled.div<DarkMode>`
  max-width: 25rem;
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.darkMode.light : "white"};
  @media ${device.tablet} {
    min-width: 20rem;
  }
  button {
    background-color: #ffa101;
    border: none;
    padding: 1rem 2.3rem;
    display: block;
    margin: 3rem auto;
    font-size: 1rem;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const RangeInput = styled.div`
  width: 100%;
  position: relative;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 0.8rem;
    border-radius: 8px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: #ffa101;
    }
    &::-moz-range-thumb {
      width: 2rem;
      height: 2rem;
      background: #04aa6d;
      appearance: none;
      cursor: pointer;
    }
  }
`;

export const RangeValue = styled.div<DarkMode>`
  height: 3rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
  color: ${({ darkMode }) => (darkMode ? "#ffa101" : "#555555")};
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Result = styled.div<DarkMode>`
  padding-top: 2rem;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "#555555")};
  }
  div {
    margin-bottom: 3rem;
    color: #555555;
    font-size: 1.5rem;
    color: ${({ darkMode }) => (darkMode ? "#ffa101" : "#555555")};
  }
`;

export const FieldContainer = styled.div``;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  display: block;
  color: #555555;
`;

export const RangeTitle = styled.div`
  font-size: 1.2rem;
  color: #555555;
  margin-bottom: 1rem;
`;

export const Text = styled.div<DarkMode>`
  max-width: 25rem;
  margin: auto;
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "#555555")};
  }
  p {
    line-height: 1.8rem;
    font-size: 1.1rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "#555555")};
    margin-bottom: 2rem;
  }
`;
