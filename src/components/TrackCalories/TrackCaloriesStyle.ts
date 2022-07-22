import styled from "styled-components";
import { Field } from "formik";
const img = require("../../assets/images/track-calories.jpg");

export const Container = styled.section`
  padding: 1rem;
  width: calc(100vw - 14rem);
  height: calc(100vh - 3.5rem);
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
