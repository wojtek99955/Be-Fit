import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.section`
  /* padding-top: 8rem; */
  width: 100%;
  padding: 0 1rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #555555;
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
    border-radius: 8px;
    margin-top: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  p {
    line-height: 1.8rem;
    font-size: 1.1rem;
    color: #555555;
  }
`;

export const StyledField = styled(Field)`
  margin: 2px auto;
  display: block;
  width: 100%;
  padding: 0.5rem 0.2rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
  height: 3rem;
`;

export const Result = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export const Text = styled.div``;
export const BmiForm = styled.div`
  min-width: 25rem;
  background-color: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
`;
