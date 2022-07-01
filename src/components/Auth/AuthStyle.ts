import styled from "styled-components";
import { Link } from "react-router-dom";
import { Field } from "formik";

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;
export const Container = styled.section`
  height: 100vh;
  background-color: #fff7e8;
`;
export const FormContainer = styled.div`
  background-color: white;
  padding: 1rem;
  max-width: 450px;
  margin: auto;
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #ffa101;
  }

  button {
    display: block;
    background-color: #ffa101;
    border: none;
    padding: 0.8rem 2rem;
    color: white;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`;

export const StyledField = styled(Field)`
  border: 2px solid #ffa101;
  padding: 0.8rem 0.5rem;
  width: 100%;
  margin-bottom: 1.2rem;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;
