import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 20rem;
  margin: auto;

  input {
    width: 100%;
    border: 2px solid #dfe2e7;
    outline: none;
    font-size: 1rem;
    display: block;
    height: 3rem;
    color: #55595b;
    padding-left: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-color: white;
    }
  }
  select {
    width: 100%;
    border: none;
    font-size: 1rem;
    outline: none;
    color: #55595b;
    cursor: pointer;
    height: 3rem;
    font-weight: 600;
    border: 2px solid #dfe2e7;
    margin-top: 1rem;
    padding-left: 0.3rem;
  }
`;
