import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.section`
  margin-top: 6rem;
  width: calc(100vw - 14rem);
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
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

export const FormContainer = styled.div`
  margin-top: 3rem;
  button {
    background-color: #ffa101;
    border: none;
    padding: 1rem 2.3rem;
    display: block;
    margin: 2rem auto;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

export const RangeInput = styled.div`
  width: 100%;
  position: relative;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 1rem;
    border-radius: 5px;
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

export const RangeValue = styled.div`
  height: 3rem;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

export const Result = styled.div`
  padding-top: 2rem;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  div {
    margin-bottom: 3rem;
  }
`;

export const FieldContainer = styled.div``;

interface ResultType {
  days: number;
  toLoose: number;
}
