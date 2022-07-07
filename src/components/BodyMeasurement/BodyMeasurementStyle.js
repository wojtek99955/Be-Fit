import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.section`
  padding-top: 8rem;
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
  button {
    display: block;
    margin: auto;
    padding: 0.5rem 1.6rem;
    border: none;
    background-color: #ffa101;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const StyledField = styled(Field)`
  margin: auto;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
`;
